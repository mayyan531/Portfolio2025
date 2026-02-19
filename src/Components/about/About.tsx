import note from '/assets/note.png'
import patio from '/assets/patio.jpg'
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsFileEarmarkPerson } from "react-icons/bs";

const About = () => {
  const isWiderOrLonger = window.innerWidth > window.innerHeight;
  return (
    <div className={`h-screen w-full z-2 flex ${isWiderOrLonger ? 'flex-row' : 'flex-col'} align-center justify-center overflow-hidden`}>
      {/* Left side */}
      <div className='relative flex-1 h-full'>
        {/* Patio image */}
        <img src={patio} className='absolute inset-0 w-full h-full object-cover' alt='patio image'/>

        {/* text and note image */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <img src={note} className='w-[70%] h-auto' alt='note pad'/>

          <div className='absolute text-center flex-col italic text-lg xl:text-4xl text-navy-blue'>
            <div className='-mb-1'>
              Hey! I'm
            </div>

            <div className='text-5xl xl:text-6xl 2xl:text-7xl not-italic font-bold'>
              May Yan 
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 h-full p-6 md:p-14'>
        <div className='w-full flex flex-col justify-center  h-full'>
          <div className={`text-blue ${isWiderOrLonger ? '' : 'text-center'} text-3xl xl:text-6xl 2xl:text-6xl italic font-bold`}>
            About Me
          </div>

          <div className={`font-inter font-medium ${isWiderOrLonger ? '' : 'text-center'} text-sm md:text-lg xl:text-lg text-navy-blue mt-2 md:mt-6`}>
            Hi! I'm a third year Software Engineering Student at McMaster University. I love picking up new tools and obsessing over new projects. 
            I enjoy working with Python, JavaScript and React, something I'm trying to learn more about is C++. 
            Some other things I have a passion for are scattered across this page like reading an enrapturing book, all sorts of board games, video games, and the colour navy. 
          </div>

          <div className={`${isWiderOrLonger ? 'inline-block ' : 'flex flex-col justify-center items-center'}`}>
            <p className='font-inter italic text-center bg-blue rounded-sm p-1 my-4 lg:my-4 text-xs md:text-sm xl:text-sm w-full'>
              Find me here!
            </p>

            <div className='flex'>
              <a href='https://www.linkedin.com/in/yanm34/' target='_blank'>
                <FaLinkedin size="40px" className='mx-4 hover:text-blue' />
              </a>

              <a href='https://github.com/mayyan531' target='_blank'>
                <SiGithub size="40px" className='mx-4 hover:text-blue'/>
              </a>

              <a href={`${import.meta.env.BASE_URL}files/May_Resume2026.pdf`} target='_blank' rel="noopener noreferrer">
                <BsFileEarmarkPerson size="40px" className='mx-4 hover:text-blue'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About