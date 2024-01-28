import React, { useState } from "react";
import { useData } from "../context/TodoContext";

function DataItem({ data }) {
  // console.log(data.text);

  const [isEditable, setIsEditable] = useState(false);
  const [textMessage, setTextMessage] = useState(data.text);
  const { editText, deleteText } = useData();

  const updateText = () => {
    editText(data.id, { ...data, text: textMessage });
  };

  return (
    <div className="className={`flex border rounded-lg px-3 py-1.5 gap-x-3 z-10 h-fit ">
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-gray-300`}
        value={textMessage}
        onChange={(e) => setTextMessage(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isEditable) {
            updateText();
          } else setIsEditable((prev) => !prev);
        }}
      >
        {isEditable ? "📁" : "📝"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteText(data.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default DataItem;
