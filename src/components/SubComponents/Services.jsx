import { Cross, Crosshair, PencilRuler } from "lucide-react";
import { ServicesInfo } from "../../constants/Index";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Services = () => {
  return (
    <div>
      <div className="w-full border border-neutral-700 h-[170px] p-3 rounded-lg bg-[#100F12]">
        <h4 className=" flex font-semibold items-center ">
          <PencilRuler className="w-5 h-5 mr-2 text-purple-300" /> Services
        </h4>
        <h6 className="text-[10px] text-neutral-400">
          My services are tailored to your needs and budget
        </h6>
        <div className="mt-2">
          {/* <ul className=" my-5 flex overflow-hidden space-x-8 text-sm font-bold text-purple-300">
            {ServicesInfo.map((item, id) => (
              <li className="min-w-fit" key={id}>
                {item}
              </li>
            ))}
          </ul> */}
          <InfiniteMovingCards
            direction="right"
            speed="slow"
            items={ServicesInfo}
            pauseOnHover={true}
          />
          <InfiniteMovingCards
            direction="left"
            speed="slow"
            items={ServicesInfo}
            pauseOnHover={true}
          />
          {/* <ul className="flex overflow-hidden space-x-8 text-sm font-bold text-purple-300">
            
            {ServicesInfo.map((item, id) => (
              <li className="min-w-fit" key={id}>
                {item}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
