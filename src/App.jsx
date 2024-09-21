import { useState } from 'react'
import './App.css'
import explorer from './Data/explorer'
import Folder from './Folder/Folder';
import useTraverse from './hooks/useTraverse';
function App() {
  const [explorerData, setExplorerData]=useState(explorer);
  const { insertNode } = useTraverse();
  console.log(explorerData);

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item ,isFolder);
    setExplorerData(finalTree)
  }
  return (
    <>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode}/>
      <span>Folder</span>
    </>
  )
}

export default App
