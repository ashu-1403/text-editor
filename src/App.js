import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";

const App = () => {
  const [texts, setTexts] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // Track the selected text for updates


  const handleAddText = () => {
    const newText = {
      id: Date.now(),
      content: "New Text",
      fontSize: "text-base",
      fontStyle: "font-normal",
      position: { x: 50, y: 50 },
    };

    updateHistory([...texts, newText]);
  };


  const handleFontSizeChange = (fontSize) => {
    if (!selectedId) return;

    const updatedTexts = texts.map((text) =>
      text.id === selectedId ? { ...text, fontSize } : text
    );
    updateHistory(updatedTexts);
  };


  const handleFontStyleChange = (fontStyle) => {
    if (!selectedId) return;

    const updatedTexts = texts.map((text) =>
      text.id === selectedId ? { ...text, fontStyle } : text
    );
    updateHistory(updatedTexts);
  };

  
  const handleUndo = () => {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];
    setFuture([texts, ...future]);
    setTexts(previousState);
    setHistory(history.slice(0, -1));
  };

  
  const handleRedo = () => {
    if (future.length === 0) return;

    const nextState = future[0];
    setHistory([...history, texts]);
    setTexts(nextState);
    setFuture(future.slice(1));
  };


  const updateHistory = (newState) => {
    setHistory([...history, texts]);
    setTexts(newState);
    setFuture([]); // Clear the redo stack
  };

 
  const handleTextUpdate = (id, position) => {
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, position } : text
    );
    updateHistory(updatedTexts);
  };

 
  const handleTextEdit = (id, content) => {
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, content } : text
    );
    updateHistory(updatedTexts);
  };

  return (
    <div className="h-screen flex flex-col">
      <Toolbar
        onAddText={handleAddText}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onFontSizeChange={handleFontSizeChange}
        onFontStyleChange={handleFontStyleChange}
      />
      <Canvas
        texts={texts}
        onTextUpdate={handleTextUpdate}
        onTextEdit={handleTextEdit}
        setSelectedId={setSelectedId}
      />
    </div>
  );
};

export default App;
