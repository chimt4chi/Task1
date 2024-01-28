import React, { useEffect, useState } from "react";
import { useData } from "../context/TodoContext";
import Image from "next/image";

function ImgModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    const img = JSON.parse(localStorage.getItem("image"));

    if (img) {
      setSelectedImage(img);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(selectedImage));
  }, [selectedImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSelectedImage(null);
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
    width: "300px",
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
            draggable
            className="rounded-md h-10"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              if (file) {
                setSelectedImage(file);

                const reader = new FileReader();

                reader.onload = () => {
                  setSelectedImage(reader.result);
                };

                reader.readAsDataURL(file);
              }
            }}
          />
          {selectedImage && (
            <Image
              height="auto"
              src={selectedImage}
              alt="Selected"
              className="mt-2"
            />
          )}
          <button className="bg-red-700 rounded-md h-10">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ImgModal;
