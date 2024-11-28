import React from "react";

const Toolbar = ({
  onAddText,
  onUndo,
  onRedo,
  onFontSizeChange,
  onFontStyleChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 shadow flex justify-between">
     
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onAddText}
      >
        Add Text
      </button>

      
      <div>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded mx-2"
          onClick={onUndo}
        >
          Undo
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={onRedo}
        >
          Redo
        </button>
      </div>

      
      <div>
        <label className="mr-2">Font Size:</label>
        <select
          className="border px-2 py-1 rounded"
          onChange={(e) => onFontSizeChange(e.target.value)}
        >
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-lg">Large</option>
          <option value="text-xl">Extra Large</option>
        </select>
      </div>

      <div>
        <label className="mr-2">Font Style:</label>
        <select
          className="border px-2 py-1 rounded"
          onChange={(e) => onFontStyleChange(e.target.value)}
        >
          <option value="font-normal">Normal</option>
          <option value="font-bold">Bold</option>
          <option value="italic">Italic</option>
          <option value="underline">Underline</option>
        </select>
      </div>
    </div>
  );
};

export default Toolbar;
