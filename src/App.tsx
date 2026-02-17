import Folder from "./Components/home/folder/Folder"
import Header from "./Components/header/Header";
import AboutV2 from "./Components/about/AboutV2";
import Projects from "./Components/projects/Projects";
import Scroll from "./Components/scroll/Scroll";

function App() {

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 top-0">
        <Scroll />
      </div>
  
      <Folder />

      <div className="relative">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <Header />
        </div>

        <div className="bg-gradient-to-b from-cream to-blue">
          <AboutV2 />

          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
