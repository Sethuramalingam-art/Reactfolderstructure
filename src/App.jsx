import { useState } from 'react'
import './App.css'
import explorer from './Data/explorer'
import Folder from './Folder/Folder';
function App() {
  const [explorerData, setExplorerData]=useState(explorer);
  console.log(explorerData);
  return (
    <>
      <Folder explorer={explorerData}/>
      <span>Folder</span>
    </>
  )
}

export default App
