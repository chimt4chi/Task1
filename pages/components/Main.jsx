import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Draggable from "react-draggable";
import { DataProvider } from "../context/TodoContext";
import DataItem from "./DataItem";
import ImgModal from "./ImgModal";

function Main() {
  const [data, setData] = useState([]);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [image, setImage] = useState([]);

  const addText = (text) => {
    setData((prev) => [...prev, { id: Date.now(), ...text }]);
  };
  const addImage = (image) => {
    setData((prev) => [...prev, { id: Date.now(), ...image }]);
  };
  const editText = (id, text) => {
    setData((prev) =>
      prev.map((prevData) => (prevData.id === id ? text : prevData))
    );
  };
  const editImage = (id, image) => {
    setData((prev) =>
      prev.map((preImage) => (preImage.id === id ? image : preImage))
    );
  };
  const deleteText = (id) => {
    setData((prev) => prev.filter((prevText) => prevText.id !== id));
  };
  const deleteImage = (id) => {
    setData((prev) => prev.filter((prevImage) => prevImage.id !== id));
  };

  const openTextModal = () => {
    setIsTextModalOpen(true);
  };

  const closeTextModal = () => {
    setIsTextModalOpen(false);
  };

  const ImgModalOpen = () => {
    setIsImgModalOpen(true);
  };

  const closeImgModal = () => {
    setIsImgModalOpen(false);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const image = JSON.parse(localStorage.getItem("image"));

    setImage(image);

    if (data && data.length > 0) {
      setData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <DataProvider
      value={{
        data,
        addText,
        addImage,
        editText,
        addImage,
        editImage,
        deleteImage,
        deleteText,
      }}
    >
      <div className="h-full">
        <div className="relative h-screen flex flex-row bg-[#242424]">
          <div className="flex bg-[#999] ">
            <button
              onClick={openTextModal}
              className="h-fit m-2 p-5 bg-red-700 rounded-md hover:text-white"
            >
              Text
            </button>
            <button
              onClick={ImgModalOpen}
              className="h-fit m-2 p-5 bg-red-700 rounded-md hover:text-white"
            >
              Image
            </button>
          </div>
          <div className="absolute right-0">
            <button className="h-fit m-2 p-5 bg-red-700 rounded-md hover:text-white">
              Submit
            </button>
          </div>
          <div className="">
            <span className="absolute top-[50%] left-14">Toolbar</span>
            <span className="absolute top-[50%] left-[50%] text-white z-0">
              Web section
            </span>
            <Modal isOpen={isTextModalOpen} onClose={closeTextModal} />
            <ImgModal isOpen={isImgModalOpen} onClose={closeImgModal} />
          </div>
          <div>
            {data.map((item) => (
              <Draggable key={item.id}>
                {/* <div key={item.id}> */}
                <DataItem data={item} />
                {/* </div> */}
              </Draggable>
            ))}
          </div>
          {/* <div>
            {image.map((item, index) => (
              <Draggable>
                <div key={index}>
                  <img src={item} alt="image" />
                </div>
              </Draggable>
            ))}
          </div> */}
        </div>
      </div>
    </DataProvider>
  );
}

export default Main;
