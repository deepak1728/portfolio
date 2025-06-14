import Typewriter from 'typewriter-effect'
import myImage from '../test.png'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I’m Deepak <span className="inline-block animate-wave">👋</span>
        </h1>

        <div className="text-xl font-semibold text-gray-800 h-[32px] mb-2">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Full Stack Developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Tech Enthusiast")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Computer Science & Engg. Student")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Building Scalable Systems")
                .pauseFor(2000)
                .deleteAll()
                .typeString("DSA Enthusiast")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Building elegant solutions to complex problems with modern technologies.
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-6 flex-wrap">
          <a
            href="https://github.com/deepak1728"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub className="text-black w-8 h-12" />
          </a>
          <a
            href="https://linkedin.com/in/deepak-matta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-blue w-8 h-12" />
          </a>
          <a
            href="https://leetcode.com/u/deepak1728/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <SiLeetcode className="text-black w-10 h-12" />
          </a>
          <a
            href="/Deepak_Matta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-700 !text-white"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={myImage}
          alt="Deepak"
          className="w-full max-w-[500px] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Home;
