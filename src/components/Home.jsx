import Typewriter from 'typewriter-effect'
import myImage from '../test.png'
import { FaGithub, FaLinkedin, FaFileAlt  } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-40 px-4 md:px-10 bg-gradient-to-b from-sky-100 to-white flex flex-col md:flex-row items-center justify-center gap-10"
    >
      <div className="text-center md:text-left md:mt-[-300px]">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Hi, I am Deepak</h1>
        {/* <h1 className="mt-4 text-4xl md:text-5xl font-bold text-blue-800">I'm a Full Stack Developer</h1> */}

        <div className="mt-4  md:text-xl font-bold text-black min-w-0">
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
                .pauseFor(1000)
                .start();
            }}
          />
          <p className="text-base md:text-xl text-blue-1000 mt-2 font-medium">
               Building elegant solutions to complex problems with modern technologies.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-x-10">
            <a
              href="https://github.com/deepak1728"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-black w-8 h-12" />
              
            </a>

            <a
              href="https://linkedin.com/in/deepak-matta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue w-8 h-12" />
              
            </a>
            
            <a
              href="https://leetcode.com/u/deepak1728/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-black w-10 h-12" />
              
            </a>
            
{/* 
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a> */}
          </div>
        </div>
      </div>

      <img
        src={myImage}
        alt="Deepak"
        className="w-full max-w-xs md:max-w-md object-contain shadow-xl md:mt-[-300px]"
      />
    </section>
  );
};

export default Home;
