import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
        
        <h1 className="text-2xl font-bold text-orange-500">
        Welcom to My Portfolio
        </h1>

        <div className="flex gap-8 items-center">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/projects" className="hover:text-orange-400">Projects</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>

          <Link
            to="/contact"
            className="px-5 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-10 min-h-[80vh]">

  <div className="flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left Content */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

      <p className="text-2xl text-green-400 mb-4">
        Hi, I am
      </p>

      <h3 className="text-3xl text-green-500 font-bold mb-4">
        Ishtiyak Ahmed Plabon
      </h3>

      <h2 className="text-4xl md:text-5xl text-green-600 font-bold">
        Full-Stack Developer
      </h2>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6">
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition">
          <FaInstagram size={22} />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
          <FaLinkedin size={22} />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition">
          <FaFacebook size={22} />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600 transition">
          <FaGithub size={22} />
        </a>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-2 bg-orange-500 rounded hover:bg-orange-600 transition">
          Hire Me
        </button>

        <a href="Picture/cv.pdf" download>
          <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition">
            Download CV
          </button>
        </a>
      </div>

      {/* Stats */}
      <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
        <div className="px-6 py-6 bg-gray-900 rounded-2xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-orange-500">5+</h1>
          <p className="text-gray-400 mt-2">Experience</p>
        </div>

        <div className="px-6 py-6 bg-gray-900 rounded-2xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-orange-500">20+</h1>
          <p className="text-gray-400 mt-2">Project Done</p>
        </div>

        <div className="px-6 py-6 bg-gray-900 rounded-2xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-orange-500">80+</h1>
          <p className="text-gray-400 mt-2">Satisfied Clients</p>
        </div>
      </div>

    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/Picture/image.png"
        alt="Profile"
        className="w-[280px] sm:w-[320px] md:w-[400px] h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>

</section>
</div>
  );
}