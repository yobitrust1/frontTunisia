import React, { useState } from "react";
import "./login1.css";
const Contact = () => {
  const [display, setDiplay] = useState(false);
  return (
    <div>
      <div className="bg-image"></div>
      <div className="bg-text">
        <h2 className="text-2xl py-3">I am Shubham Tiwari</h2>
        <h1 className="text-4xl py-3 postTitle">WEB DEVELOPER at DevRonnins</h1>

        <div
          style={{ display: display ? "flex" : "none" }}
          className="flex justify-center align-middle my-4 p-2"
        >
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
