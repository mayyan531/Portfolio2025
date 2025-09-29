import note from '../../Assets/note.png'
import patio from '../../Assets/patio.jpg'
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsFileEarmarkPerson } from "react-icons/bs";

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-[100dvh] flexh z-2'>
      {/* Left side */}
      <div className='w-auto relative grow-0'>
        {/* Patio image */}
        <img src={patio} className='h-[100dvh] w-auto' />

        {/* text and note image */}
        <div className='absolute inset-0 flexh'>
          <img src={note} className='h-[45dvh] w-auto'/>

          <div className='absolute text-center flex-col italic text-[42px] text-navy-blue'>
            <div className='-mb-7'>
              Hey! I'm
            </div>

            <div className='text-[72px] not-italic font-bold'>
              May Yan 
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='w-auto bg-cream h-full grow-1 flexh'>
        <div className='w-[45dvw]'>
          <div className='text-blue text-[52px] italic'>
            About Me
          </div>

          <div className='font-inter font-medium text-[18px] text-navy-blue my-4'>
            Hi! I'm a third year Software Engineering Student at McMaster University. I love picking up new tools and obsessing over new projects. 
            I enjoy working with Java, JavaScript and React, and im currently diving into C# and game development. 
            As a highly passionate and curious individual, i'm eager to continue developing my skills and a career in technology. 
            Aside from software, some things I have a passion are scattered across this page like reading an enrapturing book, all sorts of board games, video games, and the colour navy. 
          </div>

          <div className='inline-block'>
            <p className='font-inter italic text-center bg-blue rounded-sm p-1 my-4 text-[16px]'>
              Find me here!
            </p>

            <div className='flex'>
              <a href='https://www.linkedin.com/in/yanm34/' target='_blank'>
                <FaLinkedin size="40px" className='mx-4 hover:text-blue' />
              </a>

              <a href='https://github.com/mayyan531' target='_blank'>
                <SiGithub size="40px" className='mx-4 hover:text-blue'/>
              </a>

              <a href="src\Files\May_Resume2025.pdf" target='_blank'>
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