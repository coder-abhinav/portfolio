import React from "react";
import Navbar from "./Navbar";
import ResumeView from "./ResumeView";

const ResumePage = () => {
  return (
    <div className="App">
      <div className="hidden">
        <Navbar />
      </div>
      <ResumeView />
    </div>
  );
};

export default ResumePage;
