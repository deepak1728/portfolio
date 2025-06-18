import Deepak from '../Deepak.JPG';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
  SiBootstrap,
  SiMysql,
  SiPostman,
  SiPython,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiCloudflare,
} from 'react-icons/si';
import { BiLogoAws } from 'react-icons/bi';

const techStack = [
  { icon: <SiGo color="#00ADD8" />, label: 'Golang' },
  { icon: <SiPython color="#3776AB" />, label: 'Python' },
  { icon: <SiHtml5 color="#E34F26" />, label: 'HTML' },
  { icon: <SiCss3 color="#1572B6" />, label: 'CSS' },
  { icon: <SiBootstrap color="#7952B3" />, label: 'Bootstrap' },
  { icon: <SiJavascript color="#F7DF1E" />, label: 'Javascript' },
  { icon: <SiTailwindcss color="#06B6D4" />, label: 'Tailwind CSS' },
  { icon: <SiReact color="#61DAFB" />, label: 'React' },
  { icon: <SiTypescript color="#3178C6" />, label: 'TypeScript' },
  { icon: <SiMysql color="#00758F" />, label: 'MySQL' },
  { icon: <SiMongodb color="#47A248" />, label: 'Mongo DB' },
  { icon: <SiGit color="#F05032" />, label: 'Git' },
  { icon: <SiDocker color="#2496ED" />, label: 'Docker' },
  { icon: <SiKubernetes color="#326CE5" />, label: 'Kubernetes' },
  { icon: <SiTerraform color="#623CE4" />, label: 'Terraform' },
  { icon: <SiCloudflare color="#F38020" />, label: 'Cloudflare' },
  { icon: <BiLogoAws color="#FF9900" />, label: 'AWS' },
  { icon: <SiPostman color="#FF6C37" />, label: 'Postman' },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20 relative">
          <img
            src={Deepak}
            alt="Deepak"
            className="w-[220px] md:w-[280px] object-contain rounded-xl shadow-2xl  md:ml-[-120px] md:mt-[30px]"
          />
          <div className="flex flex-col justify-center text-left space-y-4 text-gray-800 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
            <p>
              I’m a passionate and results-driven senior software developer with over six years of
              experience designing and building scalable, user-focused applications. My work is
              rooted in clean architecture, performance optimization, and thoughtful
              problem-solving. I take pride in developing solutions that not only meet business
              needs but also create lasting impact.
            </p>
            <p>
              I thrive in collaborative environments where ownership, innovation, and continuous
              improvement are valued. I bring a mindset of craftsmanship and curiosity to every
              project I take on.
            </p>
            <p>
              Beyond the screen, I’m an avid cricket player and a lifelong learner fascinated by
              emerging technologies—especially the fast-evolving world of artificial intelligence.
              Whether it’s on the field or behind the keyboard, I’m driven by challenge, growth, and
              purposeful contribution.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Technologies and Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I build performant, user-focused web and mobile apps using a powerful combination of
            modern frameworks, tools, and design systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200"
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <p className="text-md font-medium text-gray-800">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
