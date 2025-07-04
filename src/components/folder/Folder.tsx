import React from 'react'
import file from './file.jpg'
import { Shake } from 'reshake'

type Props = {
}

const Folder = ({}: Props) => {
  return (
    <div className='relative'>
        <img src={file} alt='file folder' className='h-[500px] w-[630px]'/>

        <div className='absolute w-full bottom-0 top-0 flex flex-col items-center justify-center '>
            <div className='mt-[160px] text-center text-navy-blue'>
                <p className='font-medium text-[40px] tracking-wider'>
                    Welcome to
                </p>

                <p className='mt-[-45px] font-bold italic text-[96px] tracking-wider'>
                    My Portfolio
                </p>
            </div>
            
            <Shake 
                h={0}
                v={30}
                r={0}
                dur={1000}
                int={26}
                max={36}
                fixed={true}
                fixedStop={true}
                freez={false}>
                <button className='bg-navy-blue text-cream font-inter italic font-medium tracking-wider text-[18px] h-[40px] w-[130px] rounded-[3px] cursor-pointer mt-[20px]'>
                    Click Here!
                </button>
            </Shake>

            <div className='self-end mr-[20px] mt-[70px] text-navy-blue font-inter text-[18px] font-bold italic'>
                2025 - May Yan
            </div>
        </div>
    </div>
  )
}

export default Folder
