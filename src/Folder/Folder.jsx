import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleStopPropagation = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div style={{ margin: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>🗂️{explorer.name}</span>
          <div>
            <button onClick={(e) => handleStopPropagation(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleStopPropagation(e, false)}>
              File +
            </button>
          </div>
        </div>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
            <input
              className="inputContainer__input"
              autoFocus
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              onKeyDown={onAddFolder}
            />
          </div>
        )}
        <div style={{ display: expand ? "block" : "none", paddingLeft: 5 }}>
          {explorer.items.map((x) => {
            return <Folder handleInsertNode={handleInsertNode} explorer={x} key={x.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file" onKeyDown={onAddFolder}>📄{explorer.name}</div>;
  }
}

export default Folder;
