import folder from "/assets/blueFolder.png"
import postcard from "/assets/postcard.png"
import note2 from "/assets/note2.png"
import reciept from "/assets/reciept.png"
import paper from "/assets/paper.png"
import { useEffect, useState } from "react"
import lily from "/assets/lily.png"
import orchid from "/assets/orchid.png"

const Projects = () => {
  const [cardsClicked, setCardsClicked] = useState(false);
  const [movement, setMovement] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovement(prev => !prev);
    }, 1200)

    return () => clearInterval(interval);
  }, [movement])

  return (
    <div className="h-screen w-full flex flex-col items-center justify-end overflow-hidden relative">
      {/* Folder and papers */}
      <div className="relative h-2/6 md:h-2/5 w-auto lg:w-3/10 lg:h-auto mb-2">
        {/* Folder image*/}
        <img
          src={folder}
          className="h-full w-auto z-10 relative"
          alt="blue folder"
        />

        {/* Maze runner */}
        <div 
          className={`absolute h-[75%] -top-7 -rotate-2 left-[5%] z-0 transform transition-transform duration-300 ${cardsClicked ? '-translate-y-125 md:-translate-y-[140%] xl:-translate-y-[90%]' : 'hover:-translate-y-2'}`}
          onClick={() => setCardsClicked(!cardsClicked)}>
          <img
            src={postcard}
            className="h-full w-auto object-contain"
            alt="postcard"
          />

          <div className="absolute w-1/2 left-0 inset-y-0 p-4">
            <p className="text-navy-blue text-sm xl:text-xl italic font-bold mb-1">
              Maze Runner
            </p>

            <p className="font-inter font-medium text-[12px] xxl:text-md text-navy-blue">
              A pathfinding algorithm written in Java based on the Breadth First Search algorithm that finds the shortest path from a start point to an end point in a maze.
            </p>
          </div>
        </div>

        {/* Assertive Emailer */}
        <div className={`absolute h-[90%] -top-10 right-[7%] z-0 rotate-5 transform transition-transform duration-300 md:duration-400 ${cardsClicked ? '-translate-y-80 md:-translate-y-[70%] translate-x-6 md:translate-x-[110%]' : 'hover:-translate-y-2'}`}
          onClick={() => setCardsClicked(!cardsClicked)}>
          <img
            src={reciept}
            className="h-full w-auto object-contain"
            alt="receipt"
          />

          <div className="absolute inset-0 py-6 px-8 lg:px-10">
            <p className="text-navy-blue text-sm xl:text-xl italic font-bold mb-1">
              Assertive Emailer
            </p>

            <p className="font-inter font-medium text-[12px] xxl:text-md text-navy-blue">
              A web application built with Python, Streamlit, and Gemini APIs to edit emails to be more assertive. Users can input their email text and receive a revised version that maintains professionalism while enhancing assertiveness.
            </p>
          </div>
        </div>

        {/* Priority Clarity */}
        <div className={`absolute h-[90%] -top-6 left-[30%] z-0 transform transition-transform duration-300 md:duration-400 -rotate-4 ${cardsClicked ? '-translate-y-60 -translate-x-26 md:-translate-x-[180%]' : 'hover:-translate-y-2'}`}
          onClick={() => setCardsClicked(!cardsClicked)}>
          <img
            src={note2}
            className="h-full w-auto object-contain"
            alt="note with clipped edges"
          />

          <div className="absolute inset-0 py-6 px-6 lg:px-10">
            <p className="text-navy-blue text-sm xl:text-xl italic font-bold mb-1">
              This website!
            </p>

            <p className="font-inter font-medium text-[12px] xxl:text-md text-navy-blue">
              Built with React TypeScript, Tailwind CSS, and Vite, this responsive portfolio website showcases my projects and skills in a visually appealing, and user-friendly way.
            </p>
          </div>
        </div>

        {/* Paper overlay with text */}
        <div className="absolute h-[45%] top-[4%] right-3 z-20">
          <img src={paper} className="h-full w-full object-contain" alt="note with paperclip"/>
          <p className="absolute top-2/5 left-1/6 text-center rotate-7 font-medium italic text-sm md:text-lg xl:text-lg text-navy-blue">
            Projects
          </p>
        </div>
      </div>

      <img src={lily} className={`hidden lg:block absolute h-1/3 left-20 bottom-10 ${movement ? '-rotate-20' : ''}`}/>

      <img src={orchid} className={`hidden lg:block absolute h-1/3 right-20 top-10 ${movement ? '' : '-rotate-20'}`}/>
    </div>
  )
}

export default Projects