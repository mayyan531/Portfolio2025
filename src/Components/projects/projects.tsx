import folder from "../../Assets/BlueFolder.png"
import paper from "../../Assets/paper.png"

type Props = {}

const projects = (props: Props) => {
  return (
    <div className='bg-cream h-[100dvh] w-auto flex flex-col align-bottom justify-end items-center'>
      <div className="relative">
        <img src={folder} className='h-[60dvh] w-auto'/>
        <img src={paper} className="absolute h-[40dvh] top-[2dvh] right-0"/>
      </div>
    </div>
  )
}

export default projects