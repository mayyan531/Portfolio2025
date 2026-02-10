import { TiHeart } from "react-icons/ti";

const Header = () => {
  const handleHeaderClick = (location: number) => {
    window.scrollTo({
      top: location,
      behavior: 'smooth'
    })
  }

  return (
    <div className="block sticky top-0 z-4 text-cream">
      <div className="w-full h-[8%] flex items-center justify-between py-6 px-10">
        <TiHeart size="20px" className="mr-35"/>

        <div className="text-[16px] font-inter pointer-events-auto text-navy-blue ">
          <button 
            className="mx-2 p-0.5 border-2 border-navy-blue bg-cream rounded-md w-30 tracking-wider font-medium hover:bg-navy-blue hover:text-cream hover:shadow-md hover:cursor-pointer transition-colors duration-100 ease-in-out" 
            onClick={() => handleHeaderClick(0)}>
            Home
          </button>

          <button 
            className="mx-2 p-0.5 border-2 border-navy-blue bg-cream rounded-md w-30 tracking-wider font-medium hover:bg-navy-blue hover:text-cream hover:shadow-md hover:cursor-pointer transition-colors duration-100 ease-in-out" 
            onClick={() => handleHeaderClick(window.innerHeight)}>
            About
          </button>

          <button 
            className="mx-2 p-0.5 border-2 border-navy-blue bg-cream text-navy-blue rounded-md w-30 tracking-wider font-medium hover:bg-navy-blue hover:text-cream hover:shadow-md hover:cursor-pointer transition-colors duration-100 ease-in-out" 
            onClick={() => handleHeaderClick(window.innerHeight*2)}>
            Projects
          </button>
        </div>

        <div className="text-[16px] font-inter pointer-events-auto">
          <button 
            className="ml-2 p-0.5 border-2 border-navy-blue bg-navy-blue text-cream rounded-md w-36 tracking-wider font-medium hover:bg-blue hover:text-navy-blue hover:shadow-md hover:border-blue hover:cursor-pointer transition-colors duration-100 ease-in-out"
            onClick={() => window.location.href = "mailto:yanm34@mcmaster.ca"}>
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header