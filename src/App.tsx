import { useEffect, useState } from "react";
import Folder from "./components/folder/folder"

function App() {
  const [buttonClicked,setButtonClicked] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]" >
      <Folder />
    </div>
  )
}

export default App
