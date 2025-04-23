import logoText from '../assets/logoText.webp'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-8xl z-50 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoText} alt="LinkedIn" className="h-6 sm:h-8" />
        </div>
        
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6 text-gray-700"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-2 lg:gap-6 text-base lg:text-xl text-gray-700 font-medium">
          <a href="#about" className="hover:text-scienceBlue transition">Home</a>
          <a href="https://www.linkedin.com/jobs/" className="hover:text-scienceBlue transition">Jobs</a>
          <a href="https://www.linkedin.com/mynetwork/grow/" className="hover:text-scienceBlue transition">Network</a>
          <a href="https://www.linkedin.com/pulse/topics/home/" className="hover:text-scienceBlue transition">Article</a>
          <a
            href="https://www.linkedin.com/login/"
            className="px-3 py-1 lg:px-5 lg:py-2 text-scienceBlue rounded-3xl text-base lg:text-lg border border-scienceBlue hover:bg-scienceBlue hover:text-white transition duration-300"
          >
            Login
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-gray-700 hover:text-scienceBlue transition py-2 border-b border-gray-100">Home</a>
            <a href="https://www.linkedin.com/jobs/" className="text-gray-700 hover:text-scienceBlue transition py-2 border-b border-gray-100">Jobs</a>
            <a href="https://www.linkedin.com/mynetwork/grow/" className="text-gray-700 hover:text-scienceBlue transition py-2 border-b border-gray-100">Network</a>
            <a href="https://www.linkedin.com/pulse/topics/home/" className="text-gray-700 hover:text-scienceBlue transition py-2 border-b border-gray-100">Article</a>
            <a
              href="https://www.linkedin.com/login/"
              className="text-center mt-2 px-5 py-2 text-scienceBlue rounded-3xl text-lg border border-scienceBlue hover:bg-scienceBlue hover:text-white transition duration-300"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}