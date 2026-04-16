import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import ResumePdf from "../assets/Resume.pdf";
import "./ResumeView.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.2;

const ResumeView = () => {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [loadError, setLoadError] = useState(null);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const measure = () => setContainerWidth(node.clientWidth);
    measure();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(measure);
      observer.observe(node);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (numPages > 0 && pageNumber > numPages) {
      setPageNumber(numPages);
    }
  }, [numPages, pageNumber]);

  const onDocumentLoadSuccess = ({ numPages: total }) => {
    setNumPages(total);
    setLoadError(null);
  };

  const onDocumentLoadError = (err) => {
    setLoadError(err);
  };

  const goPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () =>
    setPageNumber((p) => Math.min(numPages || p, p + 1));
  const zoomOut = () =>
    setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  const zoomIn = () =>
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const resetZoom = () => setZoom(1);

  const renderWidth = Math.max(
    240,
    Math.min(containerWidth || 720, 960) * zoom
  );

  return (
    <div className="resume-view">
      <div className="resume-view__toolbar">
        <Link to="/" className="resume-view__back">
          ← Back to portfolio
        </Link>

        <div className="resume-view__controls">
          <button
            type="button"
            className="resume-view__btn"
            onClick={goPrev}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
          >
            ‹
          </button>
          <span className="resume-view__page-indicator">
            Page {numPages ? pageNumber : "–"} / {numPages || "–"}
          </span>
          <button
            type="button"
            className="resume-view__btn"
            onClick={goNext}
            disabled={!numPages || pageNumber >= numPages}
            aria-label="Next page"
          >
            ›
          </button>

          <span className="resume-view__divider" aria-hidden="true" />

          <button
            type="button"
            className="resume-view__btn"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            className="resume-view__btn resume-view__btn--text"
            onClick={resetZoom}
            aria-label="Reset zoom"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            type="button"
            className="resume-view__btn"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
          >
            +
          </button>
        </div>

        <a
          href={ResumePdf}
          download="Abhinav-Resume.pdf"
          className="resume-view__download"
        >
          Download
        </a>
      </div>

      <div className="resume-view__frame-wrap" ref={containerRef}>
        {loadError ? (
          <div className="resume-view__error">
            Could not load the resume. You can{" "}
            <a href={ResumePdf} target="_blank" rel="noreferrer">
              open it in a new tab
            </a>
            .
          </div>
        ) : (
          <Document
            file={ResumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="resume-view__status">Loading resume…</div>}
            error={
              <div className="resume-view__status">
                Failed to load resume.
              </div>
            }
            className="resume-view__document"
          >
            <Page
              pageNumber={pageNumber}
              width={renderWidth}
              renderAnnotationLayer
              renderTextLayer
              className="resume-view__page"
            />
          </Document>
        )}
      </div>
    </div>
  );
};

export default ResumeView;
