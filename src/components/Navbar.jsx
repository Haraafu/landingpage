import logoText from '../assets/logoText.webp'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-20">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoText} alt="LinkedIn" className="h-8" />
        </div>
        <div className="flex items-center gap-6 text-xl text-gray-700 font-medium">
          <a href="#about" className="hover:text-scienceBlue transition">Home</a>
          <a href="https://www.linkedin.com/jobs/" className="hover:text-scienceBlue transition">Jobs</a>
          <a href="https://www.linkedin.com/mynetwork/grow/" className="hover:text-scienceBlue transition">Network</a>
          <a href="https://www.linkedin.com/pulse/topics/home/" className="hover:text-scienceBlue transition">Article</a>
          <a
            href="https://www.linkedin.com/login/"
            className="px-5 py-2 text-scienceBlue rounded-3xl text-lg border border-scienceBlue hover:bg-scienceBlue hover:text-white transition duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
