import Folder from "./Components/home/folder/Folder"
import Header from "./Components/header/Header";
import AboutV2 from "./Components/about/AboutV2";
import Projects from "./Components/projects/Projects";
import Scroll from "./Components/scroll/Scroll";
import { useProgress } from "@react-three/drei";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface LoaderProps {
  onLoaded: () => void;
}

function Loader({ onLoaded }: LoaderProps) {
  const { progress } = useProgress();

  if (progress === 100) {
    setTimeout(() => {
      onLoaded();
    }, 500);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cream">
      <AiOutlineLoading className="animate-spin text-4xl" />
    </div>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onLoaded={() => setLoaded(true)} />
  }

  return (
    <div className="relative w-full select-none drag-none bg-cream">
      <div className="absolute bottom-0 top-0">
        <Scroll />
      </div>
  
      <Folder />

      <div className="relative">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <Header />
        </div>

        <div className="bg-gradient-to-b from-cream to-blue from-[40%]">
          <AboutV2 />

          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
