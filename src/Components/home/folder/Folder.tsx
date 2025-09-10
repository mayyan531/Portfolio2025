import file from '../../../Assets/file.jpg'

type Props = {
}

const Folder = ({}: Props) => {
  return (
    <div className='absolute top-0 h-full w-full flexh'>
        {/* FILE IMAGE */}
        <img src={file} alt='file folder' className='h-[500px] w-[650px]'/>

        <div className='absolute w-[630px] flex flex-col items-center justify-center '>
            {/* WELCOME TO PORTFOLIO */}
            <div className='mt-[160px] text-center text-navy-blue'>
                <p className='font-medium text-[40px] tracking-wider'>
                    Welcome to
                </p>

                <p className='mt-[-45px] font-bold italic text-[96px] tracking-wider'>
                    My Portfolio
                </p>
            </div>
            
            {/* BUTTON CLICK HERE */}
            <button className='bg-navy-blue text-cream font-inter italic font-medium tracking-wider text-[18px] h-[40px] w-[130px] rounded-[3px] cursor-pointer mt-[20px]'>
                Click Here!
            </button>
            
            {/* 2025-MAY YAN */}
            <div className='mt-[70px] text-right pr-[20px] w-full text-navy-blue font-inter text-[18px] font-bold italic'>
                May Yan - 2025
            </div>
        </div>
    </div>
  )
}

export default Folder
