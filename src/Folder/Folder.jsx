import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleStopPropagation = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder,
    });
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
        {
            showInput.visible && <div className="inputContainer">
                <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
                <input className="inputContainer__input" autoFocus onBlur={()=> setShowInput({...showInput, visible: false})} />
            </div>
          }
        <div style={{ display: expand ? "block" : "none", paddingLeft: 5 }}>
          {explorer.items.map((x) => {
            return <Folder explorer={x} key={x.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file">📄{explorer.name}</div>;
  }
}

export default Folder;
