import {
  BriefcaseBusiness,
  CloudCogIcon,
  Grid3X3Icon,
  GridIcon,
  PartyPopper,
} from "lucide-react";
import { ProfilePic, ProjectsInfo } from "../../constants/Index";
import { InfiniteMovingProjects } from "../ui/infinite-moving-projects";

const Projects = () => {
  return (
    <div>
      <div className="w-full border border-neutral-700 h-[160px] p-3 rounded-lg bg-[#100F12]">
        <h4 className=" flex font-semibold items-center ">
          <BriefcaseBusiness className="w-5 h-5 mr-2 text-purple-300" />{" "}
          Projects
        </h4>
        <h6 className="text-[10px] text-neutral-400">
          Here are some of the projects I have worked on
        </h6>
        <div className="mt-1">
          <InfiniteMovingProjects
            direction="left"
            speed="slow"
            items={ProjectsInfo}
          />
        </div>
        <a className="w-fit h-fit" href="/projects">
          <div className=" cursor-pointer  w-fit mx-auto text-[10px] flex items-center py-1.5 px-3 text-black bg-purple-300 hover:opacity-100 transition-opacity rounded-lg relative -top-5 z-50  opacity-30">
            <CloudCogIcon className="w-4 h-4 mr-1" /> View All Projects
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
