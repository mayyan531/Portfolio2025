import { TiHeart } from "react-icons/ti";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="absolute top-0 w-full">
      <div className="sticky top-0 z-1 text-navy-blue">
        <div className="w-full h-10 flex items-center justify-between py-9 px-10">
          <div className="w-36 font-bold italic text-[28px] flex rounded-full">
            <TiHeart size="16px" className="mr-1"/>
          </div>

          <div className="text-[16px]">
            <button className="mx-2 p-0.5 border-2 border-navy-blue rounded-md w-30 tracking-wider font-bold">
              Home
            </button>

            <button className="mx-2 p-0.5 border-2 border-navy-blue rounded-md w-30 tracking-wider font-bold">
              About
            </button>

            <button className="mx-2 p-0.5 border-2 border-navy-blue rounded-md w-30 tracking-wider font-bold">
              Projects
            </button>
          </div>

          <div className="text-[16px]">
            <button className="ml-2 p-0.5 border-2 bg-navy-blue text-cream rounded-md w-36 tracking-wider font-bold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header