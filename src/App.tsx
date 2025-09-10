import { useEffect, useState } from "react";
import Folder from "./Components/home/folder/Folder"
import Images from "./Components/home/images/Images";
import Header from "./Components/header/Header";
import About from "./Components/about/About";

function App() {

  return (
    <div>
      <div className="h-[100dvh] w-full">
        <Folder />
        <Images />
      </div>

      <div className="h-auto w-full relative">
        <Header />
        <About />
      </div>
    </div>
  )
}

export default App
