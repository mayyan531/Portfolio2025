import note from '../../Assets/note.png'
import sea from '../../Assets/sea.jpg'
import pin from '../../Assets/pin.png'
import border from '../../Assets/border.png'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-[100dvh] flexh'>
      <div className='w-auto relative grow-0'>
        <img src={sea} className='h-[100dvh] w-auto' />

        <div className='absolute inset-0 flexh'>
          <img src={note} className='h-[50dvh] w-auto'/>

          <div className='absolute text-center flex-col font-bold italic text-[52px] text-navy-blue'>
            Welcome! I'm
            <p className='text-[72px] not-italic'>
              May Yan 
            </p>
          </div>
        </div>
      </div>

      <div className='w-auto bg-cream h-full grow-1 flexh'>
        <div className='w-[40dvw]'>
          <p className='text-center font-inter font-medium text-[24px] text-navy-blue'>
            Hi! I'm a third year Software Engineering Student at McMaster University. I love picking up new tools and obsessing over new projects. 
            I enjoy working with Java, JavaScript, CSS/HTML, and im currently diving into React. 
            As a highly passionate and curious individual, i'm eager to continue developing my skills and a career in tech. 
            Aside from software, some things I have a passion are scattered across this page like reading an enrapturing book, little neon green things (Smiskis), and the colour navy. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About