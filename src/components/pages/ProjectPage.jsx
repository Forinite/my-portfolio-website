import { ArrowBigRight, Flag, HomeIcon } from "lucide-react";
import {
  _2024ProjectsInfo,
  _2025ProjectsInfo,
  ProjectsInfo,
} from "../../constants/Index";
import ProjectInfoBox from "../CustomComponents/ProjectInfoBox";
import { act, useEffect, useRef, useState } from "react";
import { BackgroundCircles } from "../ui/BgCircle";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { GridBackgroundDemo } from "../ui/BgGrid";
import { Spotlight } from "../ui/components/ui/spotlight-new";

const ProjectPage = () => {
  const [activeGridBoxId, setActiveGridBox] = useState(null);
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    const ClearAllGridBoxes = () => {
      ProjectsInfo.forEach((element, id) => {
        let GridBoxInstance = document.getElementById(`GridBox${id}`);
        let ProjectInfoBoxInstance = document.getElementById(`PIB${id}`);

        GridBoxInstance.style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
        GridBoxInstance.style.gridColumn = "span 1 / span 1";
        GridBoxInstance.style.gap = "0rem";

        ProjectInfoBoxInstance.style.opacity = "0";
        ProjectInfoBoxInstance.style.marginLeft = "-20px";
        ProjectInfoBoxInstance.style.zIndex = "-50";
        ProjectInfoBoxInstance.style.display = "nne";
      });
    };
    if (toggled) {
      if (activeGridBoxId == null) {
        ClearAllGridBoxes();
      } else {
        ClearAllGridBoxes();
        let ActiveGridBox = document.getElementById(
          `GridBox${activeGridBoxId}`
        );
        let ActiveProjectInfoBox = document.getElementById(
          `PIB${activeGridBoxId}`
        );
        // Grid Box Css
        ActiveGridBox.style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))";
        ActiveGridBox.style.gridColumn = "span 2 / span 2";
        ActiveGridBox.style.gap = "1rem";

        // Project Box Display
        ActiveProjectInfoBox.style.display = "block";
        ActiveProjectInfoBox.style.marginLeft = "-100px";
        ActiveProjectInfoBox.style.opacity = "100";
        ActiveProjectInfoBox.style.zIndex = "50";
      }
    }
  }, [activeGridBoxId]);
  return (
    <section className="pb-20">
      <div className=" lg:block hidden absolute left-1/2 z-10 top-24  w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-purple-200 w-[40px] h-[15px] shadow-lg shadow-purple-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div>
      <div className="lg:block hidden absolute lg:left-[90%] left-[85%] z-10 top-[600px]  w-[40px] lg:w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-purple-200 w-[40px] h-[15px] shadow-lg shadow-purple-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div>
      <div className="  lg:block hidden absolute left-[5%] -z-10 top-[1000px]  w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-blue-200 w-[25px] h-[11px] shadow-lg shadow-blue-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div>
      {/* <div className="absolute lg:hidden block lg:left-[90%] left-[85%] -z-10 top-[2100px]  w-[40px] lg:w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-blue-200 w-[25px] h-[11px] shadow-lg shadow-blue-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div>

      <div className="absolute lg:hidden block left-[4%] -z-10 top-[2900px]  w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-blue-200 w-[25px] h-[11px] shadow-lg shadow-blue-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div> */}

      <div className="relative top-0 h-[48rem] z-0 -mb-[48rem] ">
        <GridBackgroundDemo />
        <div className="h-[40rem] z-0 w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden -top-60">
          <Spotlight />
        </div>
      </div>

      <section className="">
        <div className="md:w-[70%] w-[80%] mx-auto relative">
          <div className="relative top-16 w-fit">
            <a href="/home">
              {" "}
              <HomeIcon className="w-8 h-8  text-purple-300 hover:text-blue-300  cursor-pointer hover:scale-105 transition-all" />
            </a>
          </div>
          {/* <div className="h-screen w-full bg-black bg-grid-white bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div> */}
          <h1 className=" mt-20 py-4 font-mono font-bold flex items-center justify-center md:text-5xl text-4xl lg:text-6xl  bg-gradient-to-b from-white via-purple-300 to-purple-700 bg-clip-text text-transparent relative z-20">
            <TextGenerateEffect
              words={"My Projects"}
              duration={2}
              className="text-white text-center"
            />
            {/* My Projects */}
          </h1>
        </div>

        <section>
          <div>
            <div className="flex justify-center items-center gap-4 mt-20 relative">
              <div className="w-[35%]  h-0.5  bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400"></div>
              <h3 className="text-neutral-700  md:text-xl">2025</h3>
              <div className="w-[35%]  h-0.5  bg-gradient-to-l from-purple-300 via-purple-200 to-purple-400 shadow-sm "></div>
            </div>
            <div className="mx-auto w-[70%] grid lg:grid-cols-3 gap-8 mt-8">
              {_2025ProjectsInfo.map((item, id) => (
                <div key={id}>
                  {" "}
                  <div
                    id={`GridBox${id}`}
                    className=" relative col-span-1 grid grid-cols-1 gap-0"
                  >
                    <div
                      key={id}
                      className="w-full h-fit border-[1px] border-purple-300 rounded-md"
                    >
                      <div className="flex items-center justify-between  my-2 ml-2 ">
                        <div className="h-6  flex items-center justify-center bg-slate-100  px-1 bg-opacity-5 backdrop-blur-sm hover:bg-opacity-0">
                          <img className=" h-[90%]" src={item.icon} alt="" />
                        </div>
                        <div className="flex items-center justify-end gap-2 mr-4">
                          <div
                            title={`${item.online ? "Online" : "Not online"}`}
                            className={`w-2 aspect-square rounded-full ${
                              item.online ? " bg-[blue]" : ""
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          setToggled(true);
                          activeGridBoxId == id
                            ? setActiveGridBox(null)
                            : setActiveGridBox(id);
                        }}
                        className=" cursor-pointer hover:border-dashed hover:border-blue-300  flex w-[90%] border border-dotted overflow-hidden  aspect-[9/6] rounded-lg mx-auto my-4"
                      >
                        <img
                          className=" w-full h-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <h2 className="w-fit uppercase mx-auto text-center mb-4 text-sm">
                        {item.title}
                      </h2>
                    </div>
                    <div>
                      <div
                        id={`PIB${id}`}
                        className="absolute top-8 max-w-[450px] lg:min-w-[400px] md:left-auto left-20 scale- z-50 hidden -ml-60 transition-all duration-1000 "
                      >
                        <div
                          onClick={() => {
                            setActiveGridBox(null);
                          }}
                          className="text-red-600 font-semibold float-end mt-1 mr-4 cursor-pointer"
                        >
                          Close
                        </div>
                        <ProjectInfoBox content={item} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex justify-center items-center gap-4 mt-20">
              <div className="w-[35%]  h-0.5  bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400"></div>
              <h3 className="text-neutral-700  md:text-xl">2024</h3>
              <div className="w-[35%]  h-0.5  bg-gradient-to-l from-blue-300 via-blue-200 to-blue-400 shadow-sm "></div>
            </div>
            <div className="mx-auto w-[70%] grid lg:grid-cols-3 gap-8 mt-8 relative">
              {_2024ProjectsInfo.map((item, id) => (
                <div key={id}>
                  <div
                    id={`GridBox${id + _2025ProjectsInfo.length}`}
                    className=" relative col-span-1 grid grid-cols-1 gap-0"
                  >
                    <div
                      key={id}
                      className="w-full h-fit border-[1px] border-purple-300 rounded-md"
                    >
                      <div className="flex items-center justify-between  my-2 ml-2 ">
                        <div className="h-6  flex items-center justify-center bg-slate-100  px-1 bg-opacity-5 backdrop-blur-sm hover:bg-opacity-0">
                          <img className=" h-[90%]" src={item.icon} alt="" />
                        </div>
                        <div className="flex items-center justify-end gap-2 mr-4">
                          <div
                            title={`${item.online ? "Online" : "Not online"}`}
                            className={`w-2 aspect-square rounded-full ${
                              item.online ? " bg-[blue]" : " bg-[red]"
                            }] `}
                          ></div>
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          setToggled(true);
                          activeGridBoxId == id
                            ? setActiveGridBox(null)
                            : setActiveGridBox(id + _2025ProjectsInfo.length);
                        }}
                        className=" cursor-pointer hover:border-dashed hover:border-blue-300  flex w-[90%] border border-dotted overflow-hidden  aspect-[9/6] rounded-lg mx-auto my-4"
                      >
                        <img
                          className=" w-full h-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <h2 className="w-fit uppercase mx-auto text-center mb-4 text-sm">
                        {item.title}
                      </h2>
                    </div>
                    <div>
                      <div
                        id={`PIB${id + _2025ProjectsInfo.length}`}
                        className="absolute top-8 max-w-[450px] lg:min-w-[400px] md:left-auto left-20 scale- z-50 hidden -ml-60 transition-all duration-1000 "
                      >
                        <div
                          onClick={() => {
                            setActiveGridBox(null);
                          }}
                          className="text-red-600 font-semibold float-end mt-1 mr-4 cursor-pointer"
                        >
                          Close
                        </div>
                        <ProjectInfoBox content={item} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ProjectPage;
