import Hired from './assets/hired2.webp'
import Navbar from './components/Navbar.jsx'
import Typewriter from './components/Typewriter'
import Networking from './assets/networking.webp'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Hero */}
      <section id="home" className="flex text-center px-28 py-8 bg-white h-[70vh]">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-justify">
          <Typewriter />
          <p className="mt-4 text-2xl text-gray-700 max-w-md">
            Sometimes one message is all it takes.
          </p>
          <a
            href="https://www.linkedin.com/login/"
            className="mt-10 px-5 py-2 text-scienceBlue rounded-3xl text-lg border border-scienceBlue hover:bg-scienceBlue hover:text-white transition duration-300"
          >
            Join LinkedIn
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src={Hired}
            alt="Networking"
            className="w-4/5 object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* About */}
      <section id='about' className="flex flex-col md:flex-row items-center text-center md:text-left px-28 py-8 bg-linen ">
        <div className="w-full md:w-1/2 flex">
          <img
            src={Networking}
            alt="Networking"
            className="w-4/5 object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-justify">
          <h2 className="text-5xl font-bold text-scienceBlue mb-4">Why LinkedIn?</h2>
          <p className="max-w-2xl text-xl text-gray-700 leading-relaxed">
            LinkedIn empowers you to build professional connections, discover job opportunities,
            and grow your personal brand. Whether you're just starting out or a seasoned expert,
            LinkedIn is where your career story begins.
          </p>
        </div>
      </section>

      {/* Review */}
      <section id="review" className="px-8 py-24 bg-white">
        <h2 className="text-5xl font-bold text-center text-scienceBlue mb-10">What Leaders Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 italic text-xl">
              "LinkedIn is the modern handshake. It's where meaningful professional relationships begin."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Satya Nadella, CEO of Microsoft</p>
          </div>
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 italic text-xl">
              "Every opportunity I've had in tech started with a LinkedIn message. Don't underestimate your network."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Elon Musk, CEO of Tesla & SpaceX</p>
          </div>
          <div className="bg-linen p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 italic text-xl">
              "For recruiters, LinkedIn is not optional — it's essential. It's where we find great talent."
            </p>
            <p className="mt-4 font-semibold text-scienceBlue text-lg">— Susan Wojcicki, Former CEO of YouTube</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linen text-center py-4">
        <p className="text-gray-700">
          &copy; Falah Andhesryo (2306161990). All rights reserved.
        </p>
        <div className="flex justify-center">
        </div>
      </footer>
    </div>
  )
}
