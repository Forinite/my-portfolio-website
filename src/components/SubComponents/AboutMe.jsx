import {
  Computer,
  Dock,
  FolderGitIcon,
  Github,
  GithubIcon,
  Laptop,
  SpeechIcon,
} from "lucide-react";
import { AboutMeInfo, ProfilePic } from "../../constants/Index";

const AboutMe = () => {
  return (
    <div>
      <div className="border border-neutral-700 h-[220px] p-3 rounded-lg bg-[#100F12]">
        <div className="flex space-x-2">
          <div className="">
            <img
              className="  w-[60px] aspect-square   rounded-md"
              src={ProfilePic}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-xs ml-6">Available To Work</h4>
            <h3 className="text-sm font-semibold text-purple-300 mt-2">
              Fortune
            </h3>
            <h4 className="text-xs text-purple-300">Frontend Developer</h4>
          </div>
        </div>
        <ul className=" p-2  mx-auto text-[10px] w-[98%] mt-4 bg-neutral-950 h-[68px] overflow-hidden">
          {AboutMeInfo.map((item, id) => (
            <li key={id} className="float-left w-fit mx-2 mb-1 ">
              <div className="flex  items-center space-x-1 bg-neutral-800 w-fit py-1 px-3 rounded-lg">
                {/* <img className="w-4 h-4" src="" alt="" /> */}
                <item.icon className="w-4 h-4 text-purple-300" />
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-center space-x-1">
          <a className="w-1/2" href="">
            <div className="w-full bg-purple-300 hover:bg-purple-400 h-8 rounded-md text-black text-[10px] items-center flex justify-center ">
              <Laptop className="w-4 h-4 mr-1" />
              Hire Me
            </div>
          </a>
          <a className="w-1/2" href="">
            <div className="w-full bg-neutral-700 hover:bg-neutral-800 h-8 rounded-md text-white text-[10px] items-center flex justify-center ">
              <div>
                <GithubIcon className="w-4 h-4 mr-1" />
              </div>
              GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
