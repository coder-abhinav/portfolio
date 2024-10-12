import { Provider } from "react-redux";
import "./App.css";
import Experience from "./Components/Experience";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";
import { store } from "./Store";
import Footer from "./Components/Footer";
import { useEffect, useRef } from "react";

function App() {
  const width = window.innerWidth;
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const testimonialsRef = useRef(null);
  const hiddenElementsRef = useRef([]);

  useEffect(() => {
    const hiddenElements = hiddenElementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      hiddenElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const addToRef = (el) => {
    if (el && !hiddenElementsRef.current.includes(el)) {
      hiddenElementsRef.current.push(el);
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className="hidden" ref={addToRef}>
          <Navbar
            homeRef={homeRef}
            experienceRef={experienceRef}
            testimonialsRef={testimonialsRef}
          />
        </div>
        <div className="hidden" ref={addToRef}>
          <Intro scrollRef={homeRef} />
        </div>
        <div className="hidden" ref={addToRef}>
          <Experience scrollRef={experienceRef} />
        </div>
        <div className="hidden" ref={addToRef}>
          <Skills />
        </div>
        {width > 700 && (
          <div className="hidden" ref={addToRef}>
            {" "}
            <Testimonial scrollRef={testimonialsRef} />{" "}
          </div>
        )}
        <div className="hidden" ref={addToRef}>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
