import Folder from "./Components/home/folder/Folder"
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Scroll from "./Components/scroll/Scroll";

function App() {

  return (
    <div className="relative w-full bg-cream">
      <div className="absolute bottom-0 top-0">
        <Scroll />
      </div>
  
      <Folder />

      <div className="relative">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <Header />
        </div>

        <div className="bg-gradient-to-b from-cream to-blue from-[40%]">
          <About />

          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
