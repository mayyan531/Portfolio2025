import Folder from "./Components/home/folder/Folder"
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Scroll from "./Components/scroll/Scroll";

function App() {

  return (
    <div className="relative">
      <div className="absolute bottom-0 top-0">
        <Scroll />
      </div>
      
      <div className="h-[100dvh] w-full relative">
        <Folder />
      </div>

      <div className="relative">
        <div className="absolute inset-0 h-full pointer-events-none">
          <Header />
        </div>

        <About />

        <Projects />
      </div>
    </div>
  )
}

export default App
