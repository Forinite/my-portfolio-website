import { FileStack } from "lucide-react";
import { MyTechStackInfo } from "../../constants/Index";

const MyTechStack = () => {
  return (
    <div>
      <div className="w-full border border-neutral-700 h-[170px] p-3 rounded-lg bg-[#100F12]">
        <h4 className=" flex font-semibold items-center ">
          <FileStack className="w-5 h-5 mr-2 text-purple-300" /> My Tech Stack
        </h4>
        <h6 className="text-[10px] text-neutral-400">
          My tech stack which I use on my projects
        </h6>
        <div className="mt-4">
          <ul className="grid grid-cols-2 gap-x-2 px-1 gap-y-1">
            {MyTechStackInfo.map((item, id) => (
              <div
                key={id}
                className="bg-[#00000066] h-10 rounded-md flex items-center pl-1 text-xs space-x-2 transition-all hover:scale-90"
              >
                <div className="w-9 h-9 rounded-lg p-1 py.5 bg-neutral-900 ">
                  <img className="w-full h-full" src={item.image} alt="" />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTechStack;
