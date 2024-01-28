import React, { useState } from "react";
import { useData } from "../context/TodoContext";

function Modal({ isOpen, onClose, onSubmit }) {
  const [textInput, setTextInput] = useState("");

  const { addText } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();

    addText({ text: textInput });
    setTextInput("");
    onClose();
  };

  const modalStyle = {
    display: isOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    backgroundColor: "#199",
    padding: "20px",
    width: "300px", // Adjust the width as needed
    textAlign: "center",
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "20px",
    backgroundColor: "red",
  };

  return (
    <div className="z-20" style={modalStyle}>
      <div style={contentStyle}>
        <span onClick={onClose} style={closeButtonStyle}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <input
            className="rounded-md h-10"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter text..."
          />
          <button className="bg-red-700 rounded-md h-10">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
