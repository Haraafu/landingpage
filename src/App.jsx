import Hired from './assets/hired2.webp'
import Navbar from './components/Navbar.jsx'
import Typewriter from './components/Typewriter'
import Networking from './assets/networking.webp'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Hero */}
      <section id="home" className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left px-4 sm:px-8 md:px-16 lg:px-28 py-20 bg-white min-h-[85vh]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <img
            src={Hired}
            alt="Networking"
            className="w-4/5 sm:w-3/4 md:w-4/5 object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6">
          <Typewriter />
          <p className="text-xl sm:text-2xl text-gray-700 max-w-md">
            Sometimes one message is all it takes.
          </p>
          <a
            href="https://www.linkedin.com/login/"
            className="px-6 py-3 text-scienceBlue rounded-3xl text-lg border border-scienceBlue hover:bg-scienceBlue hover:text-white transition duration-300"
          >
            Join LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="flex flex-col md:flex-row items-center text-center justify-center md:text-left px-4 sm:px-8 md:px-16 lg:px-28 py-8 bg-linen min-h-[60vh]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img src={Networking} alt="Networking" className="w-4/5 object-cover rounded-2xl shadow-md" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-scienceBlue mb-4">Why LinkedIn?</h2>
          <p className="max-w-2xl text-lg sm:text-xl text-gray-700 leading-relaxed text-center md:text-left">
            LinkedIn empowers you to build professional connections, discover job opportunities, and grow your personal brand. Whether you're just starting out or a seasoned expert, LinkedIn is where your career story begins.
          </p>
        </div>
      </section>

      {/* Review */}
      <section id="review" className="px-4 sm:px-8 py-16 sm:py-24 bg-white min-h-[50vh]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-scienceBlue mb-10">What Leaders Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 italic text-lg sm:text-xl">
              "LinkedIn is the modern handshake. It's where meaningful professional relationships begin."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Satya Nadella, CEO of Microsoft</p>
          </div>
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 italic text-lg sm:text-xl">
              "Every opportunity I've had in tech started with a LinkedIn message. Don't underestimate your network."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Elon Musk, CEO of Tesla & SpaceX</p>
          </div>
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-md lg:max-w-none">
            <p className="text-gray-700 italic text-lg sm:text-xl">
              "For recruiters, LinkedIn is not optional — it's essential. It's where we find great talent."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Susan Wojcicki, Former CEO of YouTube</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linen text-center py-4 px-4">
        <p className="text-gray-700">
          &copy; Falah Andhesryo (2306161990). All rights reserved.
        </p>
        <div className="flex justify-center mt-2">
          {/* You can add social media icons here if needed */}
        </div>
      </footer>
    </div>
  )
}
