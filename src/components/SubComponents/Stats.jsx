import { BriefcaseBusiness, PersonStanding, Star } from "lucide-react";
import {ClientCount, ProjectCount, YearsExp} from "../../constants/dynamicConstants.jsx";

const Stats = () => {
  return (
    <div className="flex space-x-2">
      <div className=" w-1/3 h-[100px] rounded-lg border  border-neutral-700   bg-[#100F12] flex flex-col items-center hover:scale-110 cursor-pointer transition-all">
        <h1 className="text-[36px]">
          <span
            style={{ fontFamily: "suns" }}
            className=" bg-gradient-to-b from-white via-purple-300 to-neutral-700 bg-clip-text text-transparent "
          >
            {ProjectCount}
          </span>
          <span className="font-extrabold text-purple-300">+</span>
        </h1>
        <div className="flex text-[10px]  w-[80%] py-1  justify-center rounded-md bg-neutral-700 bg-opacity-40 items-center">
          <BriefcaseBusiness className="w-4 h-4 mr-1  text-purple-300" />{" "}
          <p>Projects</p>
        </div>
      </div>

      <div className=" w-1/3 h-[100px] rounded-lg border  border-neutral-700   bg-[#100F12] flex flex-col items-center hover:scale-110 cursor-pointer  transition-all">
        <h1 className="text-[36px]">
          <span
            style={{ fontFamily: "suns" }}
            className=" bg-gradient-to-b from-white via-purple-300 to-neutral-700 bg-clip-text text-transparent "
          >
            {ClientCount}
          </span>
          <span className="font-extrabold text-purple-300">+</span>
        </h1>
        <div className="flex text-[10px] w-[80%] py-1  justify-center rounded-md bg-neutral-700 bg-opacity-40 items-center">
          <PersonStanding className="w-4 h-4 mr-1  text-purple-300" />{" "}
          <p>Clients</p>
        </div>
      </div>
      <div className=" w-1/3 h-[100px] rounded-lg border  border-neutral-700   bg-[#100F12] flex flex-col items-center hover:scale-110 cursor-pointer  transition-all">
        <h1 className="text-[36px]">
          <span
            style={{ fontFamily: "suns" }}
            className=" bg-gradient-to-b from-white via-purple-300 to-neutral-700 bg-clip-text text-transparent "
          >
            {YearsExp}
          </span>
          <span className="font-extrabold text-purple-300">+</span>
        </h1>
        <div className="flex text-[10px] w-[80%] py-1  justify-center rounded-md bg-neutral-700 bg-opacity-40 items-center">
          <Star className="w-4 h-4 mr-1  text-purple-300" /> <p>Yrs Exp</p>
        </div>
      </div>
    </div>
  );
};
export default Stats;
