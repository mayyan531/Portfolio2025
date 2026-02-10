import { PiDiamondsFourFill } from "react-icons/pi";
import { BsDot } from "react-icons/bs";
import { useEffect, useState } from "react";

const Scroll = () => {
  const [position, setPosition ] = useState<number>(0);
  const vh = window.innerHeight;

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setPosition(pos);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClick = (location: number) => {
    window.scrollTo({
      top: location,
      behavior: 'smooth'
    })
  }

  return (
    <div className='hidden md:flex sticky h-[100dvh] p-6 z-10 top-0 flex-col justify-center items-center text-navy-blue'>
      <div className="hover:bg-blue/90 transition-colors duration-200 ease-in-out h-30 p-0.5 rounded-full flex flex-col items-center justify-evenly align-middle">
      {/* First indicator */}
        <button 
          className="w-[25px] h-[25px] relative hover:cursor-pointer"
          onClick={() => handleClick(0)}>
          <PiDiamondsFourFill
            size={"25px"}
            className={`absolute top-0 transition-all duration-100 ease-in-out ${
              position < vh ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
          <BsDot
            size={"25px"}
            className={`absolute top-0 transition-all duration-300 ease-in-out ${
              position < vh ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          />
        </button>

        {/* Second indicator */}
        <button 
          className="w-[25px] h-[25px] relative hover:cursor-pointer"
          onClick={() => handleClick(vh)}>
          <PiDiamondsFourFill
            size={"25px"}
            className={`absolute top-0 transition-all duration-100 ease-in-out ${
              position >= vh && position < vh * 2
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          />
          <BsDot
            size={"25px"}
            className={`absolute top-0 transition-all duration-100 ease-in-out ${
              position >= vh && position < vh * 2
                ? "opacity-0 scale-75"
                : "opacity-100 scale-100"
            }`}
          />
        </button>

        {/* Third indicator */}
        <button 
          className="w-[25px] h-[25px] relative hover:cursor-pointer"
          onClick={() => handleClick(vh*2)}>
          <PiDiamondsFourFill
            size={"25px"}
            className={`absolute top-0 transition-all duration-100 ease-in-out ${
              position >= vh * 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
          <BsDot
            size={"25px"}
            className={`absolute top-0 transition-all duration-300 ease-in-out ${
              position >= vh * 2 ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default Scroll