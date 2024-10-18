import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <strong className="text-4xl sm:text-7xl font-medium text-white">
          I'm a Full Stack Web Developer
        </strong>
        <p className="text-gray-500 py-4 max-w-md">
           I have 13 years of experience in web development. I have worked across various PHP MVC frameworks. I have also worked in CMS/Open Sources like WordPress, Drupal, Opencart etc.
           Having experience in frontend web development skills like Html, Css, Javascript, Angular, React JS etc and cloud service AWS.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;