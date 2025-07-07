import { Recycle } from "lucide-react";
import { WorkProcessInfo } from "../../constants/Index";
import { NumAnimation } from "../../constants/GsapAnimations";
import { MobileWidth } from "../../constants/systemConstants";

const WorkProcess = () => {
  return (
    <div className="border  border-neutral-700   bg-[#100F12] w-full h-fit rounded-lg p-3 ">
      <div className="flex">
        <Recycle className="text-purple-300 mr-1" />
        <h3 className="font-semibold">Work Process</h3>
      </div>
      <h6 className="text-[10px] text-neutral-400">
        The work process explained in 4 simple steps
      </h6>
      <div className="mt-4 ">
        {WorkProcessInfo.map((item, id) => (
          <div
            key={id}
            className="w-full py-1.5 my-3 px-1.5 bg-[#00000066] rounded-lg flex relative items-center"
            onMouseOver={() => {
              NumAnimation("hover", id);
            }}
            onMouseOut={() => {
              NumAnimation("out", id);
            }}
          >
            <div className="h-8 rounded-md flex items-center justify-center  aspect-square bg-[#100F12]">
              <item.icon className="text-purple-300" />
            </div>
            <div className="ml-2">
              <h4 className="text-xs font-semibold">{item.title}</h4>
              <p className="text-[10px] text-neutral-400">{item.desc}</p>
            </div>
            <div
              id={id}
              className={` text-neutral-300 rounded-lg bg-[#100F12] font-bold p-1 text-xs h-fit w-fit  absolute right-1 ${
                window.innerWidth < MobileWidth ? "-top-2 -right-8" : " "
              } `}
            >
              #{id + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
