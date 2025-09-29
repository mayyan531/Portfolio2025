import file from '../../../Assets/file.jpg'
import Images from '../images/Images'

type Props = {
}

const Folder = ({}: Props) => {
  return (
    <div className='bg-cream flexh h-full w-full'>
        <div className='relative h-[772.44px] w-[1689.78px] flexh'>
            <Images />
            <div className='inline-block relative'>
                <img src={file} alt='file folder' className='h-[500px] w-[650px]'/>

                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    {/* WELCOME TO PORTFOLIO */}
                    <div className='mt-[60px] text-center text-navy-blue'>
                        <p className='text-[40px] tracking-wider'>
                            Welcome to
                        </p>

                        <p className='mt-[-45px] font-bold text-[96px] tracking-wider'>
                            My <span className='italic'>Portfolio</span>
                        </p>
                    </div>
                    
                    {/* 2025-MAY YAN */}
                    <div className='absolute bottom-5 right-5 px-4 rounded-md text-navy-blue font-inter text-[18px] font-medium italic bg-blue'>
                        May Yan - 2025
                    </div>
                </div>
            </div>
            {/* FILE IMAGE */}
        </div>
    </div>
  )
}

export default Folder
