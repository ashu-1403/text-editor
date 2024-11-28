import React, { useState } from "react";
import Draggable from "react-draggable";

const Canvas = ({ texts, onTextUpdate, onTextEdit, setSelectedId }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDoubleClick = (text) => {
    setEditingId(text.id);
    setEditText(text.content);
  };

  const handleBlur = () => {
    onTextEdit(editingId, editText);
    setEditingId(null);
  };

  return (
    <div className="w-full h-[500px] bg-gray-200 border-dashed border-2 border-gray-400 relative">
      {texts.map((text) => (
        <Draggable
          key={text.id}
          defaultPosition={text.position}
          onStart={() => setSelectedId(text.id)} // Set selected text ID
          onStop={(e, data) => onTextUpdate(text.id, { x: data.x, y: data.y })}
        >
          <div
            className="absolute"
            onDoubleClick={() => handleDoubleClick(text)}
          >
            {editingId === text.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleBlur();
                }}
                className="border-2 border-gray-400 p-1"
                autoFocus
              />
            ) : (
              <div
                className={`${text.fontSize} ${text.fontStyle} bg-white shadow-md p-2`}
                style={{ cursor: "move" }}
              >
                {text.content}
              </div>
            )}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Canvas;
