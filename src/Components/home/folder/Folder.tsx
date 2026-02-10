import file from '/Assets/file.png'
import Images from '../images/Images'

type Props = {
}

const Folder = ({}: Props) => {
  return (
    <div className='bg-cream flexh h-screen w-full relative'>
        <Images />

        <div className='h-2/6 w-auto lg:w-3/9 lg:h-auto relative '>
            <img src={file} alt='file folder' className='h-full w-auto' />

            <div className='absolute inset-0 flex flex-col items-center justify-center hover:cursor-default'>
                {/* WELCOME TO PORTFOLIO */}
                <div className='mt-4 text-center text-navy-blue'>
                    <div className='text-lg xl:text-2xl tracking-wider'>
                        Welcome to
                    </div>

                    <div className='font-bold text-5xl xl:text-6xl 2xl:text-7xl tracking-wider -mt-3'>
                        My <span className='italic'>Portfolio</span>
                    </div>
                </div>
                
                {/* 2025-MAY YAN */}
                <div className='absolute bottom-3 right-3 px-4 rounded-md text-navy-blue font-inter text-sm font-medium italic bg-blue'>
                    May Yan - 2025
                </div>
            </div>
        </div>
    </div>
  )
}

export default Folder
