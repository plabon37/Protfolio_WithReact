import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

     {/* Navbar */}
<nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#111111]/90 backdrop-blur-md shadow-lg border-b border-gray-800">

  {/* Logo */}
  <h1 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-wide">
    My Portfolio
  </h1>

  {/* Menu */}
  <div className="hidden md:flex gap-8 items-center text-lg font-medium">

    <Link
      to="/"
      className="hover:text-orange-400 transition duration-300"
    >
      Home
    </Link>

    <Link
      to="/about"
      className="hover:text-orange-400 transition duration-300"
    >
      About
    </Link>

    <Link
      to="/projects"
      className="hover:text-orange-400 transition duration-300"
    >
      Projects
    </Link>

    <Link
      to="/contact"
      className="hover:text-orange-400 transition duration-300"
    >
      Contact
    </Link>

    {/* Hire Me Button */}
    <Link
      to="/contact"
      className="px-6 py-3 bg-orange-500 rounded-xl hover:bg-orange-600 transition duration-300 shadow-md"
    >
      Hire Me
    </Link>
  </div>

  {/* Mobile Menu Icon */}
  <button className="md:hidden text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

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
        src="/Picture/picture.jpg"
        alt="Profile"
        className="w-[270px] sm:w-[320px] md:w-[400px] h-auto rounded-full remove-outline shadow-lg object-cover"
      />
    </div>

  </div>

</section>
{/* Services Section */}
<section className="bg-black text-white py-20 px-6 md:px-16">
  
  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-4">Services</h2>
    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
      Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
      blandit felis ligula aliquam
    </p>
  </div>

  {/* Service Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Card 1 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>
    {/* Card 4 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-[#111111] rounded-[30px] p-12 text-center hover:scale-105 transition duration-300 shadow-lg">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-semibold text-orange-500 mb-6">
        App Design
      </h3>

      <p className="text-gray-500 text-lg leading-9">
        Lorem ipsum dolor sit amet . <br />
        Imperdiet Lorem ipsum dolor sit <br />
        amet consectetur
      </p>
    </div>

  </div>
  {/* About Me Div */}
<div className="bg-black text-white py-20 px-6 md:px-16">

  {/* Heading */}
  <div className="text-center mb-20">
    <h2 className="text-5xl font-bold mb-4">About Me</h2>
    <p className="text-gray-500 text-xl">
      User Interface And User Experience And Also Video Editing
    </p>
  </div>

  {/* Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Left Image */}
    <div className="relative flex justify-center ">
      <img
        src="/Picture/picture.jpg"
        alt="About"
        className=" w-[450px] object-cover"
      />
    </div>

    {/* Right Text */}
    <div>
      <p className="text-gray-400 text-lg leading-10 text-justify">
        A software engineer, the modern-day architect of digital realms,
        navigates the ethereal landscapes of code, sculpting intangible
        structures that shape our technological world. With fingers poised
        over keyboards like virtuoso pianists, they compose symphonies of
        logic, their minds a labyrinth of algorithms and solutions.
      </p>

      {/* Button */}
      <a href="Picture/cv.pdf" download>
      <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-xl font-semibold flex items-center gap-3">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-5l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>

        Download CV
      </button>
      </a>
    </div>
  </div>

  {/* Skills */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-24 text-center">

    {[
      { name: "Figma", percent: "100%", icon: "Fi" },
      { name: "Adobe XD", percent: "100%", icon: "Xd" },
      { name: "Adobe Photoshop", percent: "85%", icon: "Ps" },
      { name: "Adobe Illustrator", percent: "60%", icon: "Ai" },
      { name: "Adobe Premiere", percent: "70%", icon: "Pr" },
    ].map((skill, index) => (
      <div key={index} className="flex flex-col items-center">

        <div className="relative w-40 h-40 rounded-full border-[14px] border-orange-500 flex items-center justify-center">

          <div className="w-28 h-28 rounded-full border border-gray-700 flex items-center justify-center text-4xl text-gray-400 font-bold">
            {skill.icon}
          </div>
        </div>

        <h3 className="text-orange-500 text-5xl font-bold mt-6">
          {skill.percent}
        </h3>

        <p className="text-gray-400 text-2xl mt-2">
          {skill.name}
        </p>
      </div>
    ))}
  </div>
</div>
</section>
{/* Portfolio Section */}
<section className="bg-black text-white py-20 px-6 md:px-16">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-6">Portfolio</h2>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <button className="bg-orange-500 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition">
        All
      </button>

      <button className="bg-[#1a1a1a] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-500 transition">
        Website Design
      </button>

      <button className="bg-[#1a1a1a] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-500 transition">
        App Mobile Design
      </button>

      <button className="bg-[#1a1a1a] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-500 transition">
        App Desktop
      </button>

      <button className="bg-[#1a1a1a] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-500 transition">
        Branding
      </button>
    </div>
  </div>

  {/* Projects */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Project 1 */}
    <a
      href="https://github.com/plabon37"
      target="_blank"
      rel="noreferrer"
      className="bg-[#151515] rounded-[30px] overflow-hidden group"
    >
      <img
        src="/Images/project1.png"
        alt="Project"
        className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="flex justify-between items-center px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold">Retail Shop Website</h3>
          <p className="text-gray-500 mt-1">React & Tailwind</p>
        </div>

        <p className="text-gray-400 text-lg">Categories</p>
      </div>
    </a>

    {/* Project 2 */}
    <a
      href="https://github.com/plabon37"
      target="_blank"
      rel="noreferrer"
      className="bg-[#151515] rounded-[30px] overflow-hidden group"
    >
      <img
        src="/Images/project2.png"
        alt="Project"
        className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="flex justify-between items-center px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-500 mt-1">UI/UX Design</p>
        </div>

        <p className="text-gray-400 text-lg">Categories</p>
      </div>
    </a>

    {/* Project 3 */}
    <a
      href="https://github.com/plabon37"
      target="_blank"
      rel="noreferrer"
      className="bg-[#151515] rounded-[30px] overflow-hidden group"
    >
      <img
        src="/Images/project3.png"
        alt="Project"
        className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="flex justify-between items-center px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold">Pharmacy Management</h3>
          <p className="text-gray-500 mt-1">ASP.NET MVC</p>
        </div>

        <p className="text-gray-400 text-lg">Categories</p>
      </div>
    </a>

  </div>

  {/* Github Button */}
  <div className="flex justify-center mt-16">
    <a
      href="https://github.com/plabon37?tab=repositories"
      target="_blank"
      rel="noreferrer"
      className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-xl text-xl font-semibold"
    >
      View Github Repositories
    </a>
  </div>
  {/* Contact Div */}
<div className="bg-black text-white py-24 px-6 md:px-16">

  {/* Heading */}
  <div className="text-center mb-20">
    <h2 className="text-5xl font-bold mb-5">Contact me</h2>

    <p className="text-gray-500 text-xl">
      Cultivating Connections: Reach Out And Connect With Me
    </p>
  </div>

  {/* Form */}
  <form className="max-w-6xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Left Side */}
      <div className="space-y-10">

        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-white placeholder-gray-500 border border-transparent focus:border-orange-500 transition"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-white placeholder-gray-500 border border-transparent focus:border-orange-500 transition"
        />

        <input
          type="text"
          placeholder="Timeline"
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-white placeholder-gray-500 border border-transparent focus:border-orange-500 transition"
        />

      </div>

      {/* Right Side */}
      <div className="space-y-10">

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-white placeholder-gray-500 border border-transparent focus:border-orange-500 transition"
        />

        <select
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-gray-400 border border-transparent focus:border-orange-500 transition"
        >
          <option>Service Of Interest</option>
          <option>Web Design</option>
          <option>UI/UX Design</option>
          <option>Frontend Development</option>
          <option>Backend Development</option>
        </select>

        <textarea
          rows="5"
          placeholder="Project Details..."
          className="w-full bg-[#111111] px-8 py-6 rounded-xl outline-none text-lg text-white placeholder-gray-500 border border-transparent focus:border-orange-500 transition resize-none"
        ></textarea>

      </div>
    </div>

    {/* Button */}
    <div className="flex justify-end mt-12">
      <button
        type="submit"
        className="px-12 py-4 border-2 border-gray-500 rounded-xl text-2xl font-semibold hover:bg-orange-500 hover:border-orange-500 transition duration-300"
      >
        Send
      </button>
    </div>

  </form>

</div>
</section>
{/* Footer */}
<footer className="bg-[#111111] text-white py-20 px-6 md:px-16">

  {/* Logo */}
  <div className="text-center">
    <h1 className="text-5xl font-bold text-orange-500 tracking-wide">
      PLABON
    </h1>
  </div>

  {/* Menu */}
  <div className="flex flex-wrap justify-center gap-10 mt-14 text-2xl text-gray-400">

    <a href="#home" className="hover:text-orange-500 transition">
      Home
    </a>

    <a href="#services" className="hover:text-orange-500 transition">
      Services
    </a>

    <a href="#about" className="hover:text-orange-500 transition">
      About me
    </a>

    <a href="#portfolio" className="hover:text-orange-500 transition">
      Portfolio
    </a>

    <a href="#contact" className="hover:text-orange-500 transition">
      Contact me
    </a>

  </div>

  {/* Social Icons */}
  
    <div className="justify-center flex gap-6 mt-6">
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
  

  {/* Contact Info */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-16 text-gray-400 text-2xl">

    {/* Email */}
    <div className="flex items-center gap-4">
      <i className="ri-mail-line text-3xl"></i>
      <span>ahmedplabon4@gmail.com</span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4">
      <i className="ri-phone-line text-3xl"></i>
      <span>+880 1647688137</span>
    </div>

  </div>

  {/* Line */}
  <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-xl">
    Designed by @Plabon UI/UX designer
  </div>

</footer>
</div>
  );
}