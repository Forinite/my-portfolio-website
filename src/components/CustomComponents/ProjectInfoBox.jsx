import { ArrowBigLeftIcon, PlayCircle, PlayIcon } from "lucide-react";
import { section } from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import Bot from "../SubComponents/Bot";

const ProjectInfoBox = ({ content }) => {
  const LargeImgRef = useRef(null);
  const [currentLargeImg, setCurrentLargeImg] = useState("");
  const [currentLargeImgArray, setCurrentLargeImgArray] = useState("");
  const [currentLargeImgId, setCurrentLargeImgId] = useState(0);
  const [largeImgIsVisibile, setLargeImgIsVisibile] = useState(false);
  const [currentLargeVideo, setCurrentLargeVideo] = useState("");
  const [largeVideoIsVisibile, setLargeVideoIsVisibile] = useState(false);
  const [largeVideoIsPlay, setLargeVideoIsPlay] = useState(false);
  const DropDownBoxRef = useRef(null);
  const DropDownArrowRef = useRef(null);
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleSetCurrentLargeImgInfo = (imageArray, id) => {
    setCurrentLargeImgArray(imageArray);
    setCurrentLargeImg(imageArray[id]);
  };
  const DropDownLogic = () => {
    if (isDroppedDown) {
      DropDownArrowRef.current.style.transform = "rotate(0deg)";
      DropDownBoxRef.current.style.height = "24px";
      setIsDroppedDown(false);
    } else {
      DropDownBoxRef.current.style.transition = "all 1s";
      DropDownArrowRef.current.style.transform = "rotate(90deg)";
      DropDownBoxRef.current.style.height = "230px";
      setIsDroppedDown(true);
    }
  };
  const ToggleLargeImg = (imageArray, id) => {
    setLargeImgIsVisibile(!largeImgIsVisibile);
    handleSetCurrentLargeImgInfo(imageArray, id);
    setCurrentLargeImg(imageArray[id]);
    console.log("Here", currentLargeImgArray);
  };
  const ToggleLargeVideo = (video) => {
    setLargeVideoIsVisibile(!largeVideoIsVisibile);
    setCurrentLargeVideo(video);
  };

  const NextLargeImg = (reversed) => {
    let absCurrentImgId;
    !reversed
      ? (absCurrentImgId =
          (currentLargeImgId + 1) % currentLargeImgArray.length)
      : (absCurrentImgId =
          (currentLargeImgId + currentLargeImgArray.length - 1) %
          currentLargeImgArray.length);
    setCurrentLargeImg(currentLargeImgArray[absCurrentImgId]);
    setCurrentLargeImgId(absCurrentImgId);
    console.log("tried", absCurrentImgId);
  };
  // useEffect(() => {}, [currentLargeImg]);

  return (
    <div>
      {largeImgIsVisibile && (
        <div
          ref={LargeImgRef}
          className="fixed w-full h-[100vh] top-0 z-50 left-0 flex items-center justify-center p-10 "
        >
          <div
            onClick={() => ToggleLargeImg("")}
            className="absolute   top-20 left-10 cursor-pointer transition-all hover:scale-110 border border-purple-300 text-purple-300 hover:border-blue-300 hover:text-blue-300 z-50 h-fit w-fit p-2 rounded-full flex items-center justify-center "
          >
            <ArrowBigLeftIcon />
          </div>
          <div className="absolute w-full h-screen z-30 bg-[#00000093] backdrop-blur-3xl "></div>
          <div className=" absolute w-[90%] md:w-[80%] lg:w-[60%]  h-auto z-50 flex items-center justify-center gap-4">
            <div
              onClick={() => {
                NextLargeImg(true);
              }}
              className=" select-none cursor-pointer transition-all hover:scale-110 border border-purple-300 text-purple-300 hover:border-blue-300 hover:text-blue-300 z-50 h-8 w-8 min-w-8 p-2 rounded-full flex items-center justify-center "
            >
              <div>&lt;</div>
            </div>
            <div>
              <div className="h-[40px] w-[250px] bg-black mx-auto mb-4 rounded-lg border">
                <div className="flex justify-center items-center h-full w-full">
                  {currentLargeImgArray.map((item, id) => (
                    <div
                      className={`border ${
                        id == currentLargeImgId
                          ? "text-purple-300 border-purple-300"
                          : "text-neutral-700"
                      } rounded-md w-6 scale-75 aspect-square flex justify-center items-center`}
                    >
                      {id + 1}
                    </div>
                  ))}
                </div>
              </div>
              <img
                className=" select-none max-h-[70vh] border-4 rounded-lg z-50 overflow-x-hidden mx-auto"
                src={currentLargeImg}
                alt=""
              />
            </div>{" "}
            <div className="select-none cursor-pointer transition-all hover:scale-110 border border-purple-300 text-purple-300 hover:border-blue-300 hover:text-blue-300 z-50 h-8 w-8 min-w-8 p-2 rounded-full flex items-center justify-center ">
              <div
                onClick={() => {
                  NextLargeImg(false);
                }}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>
      )}
      {largeVideoIsVisibile && (
        <div className="fixed w-full h-[100vh] top-0 z-50 left-0 flex items-center justify-center p-10 ">
          <div
            onClick={() => ToggleLargeVideo("")}
            className="absolute   top-20 left-10 cursor-pointer transition-all hover:scale-110 border border-purple-300 text-purple-300 hover:border-blue-300 hover:text-blue-300 z-50 h-fit w-fit p-2 rounded-full flex items-center justify-center "
          >
            <ArrowBigLeftIcon />
          </div>
          <div className="absolute w-full h-screen z-30 bg-[#00000093] backdrop-blur-3xl "></div>
          <div className=" absolute w-[90%] md:w-[80%] lg:w-[60%]  aspect-video  z-50 ">
            <video
              className=" w-full  max-h-[70vh] border-4 rounded-lg z-50 overflow-x-hidden mx-auto"
              src={currentLargeVideo}
              alt=""
              controls
              autoPlay
            >
              {" "}
            </video>
          </div>
        </div>
      )}
      <div className="   border w-full  bg-white text-black rounded-sm p-4">
        <div className="h-8 min-w-8 w-auto border border-white bg-black  rounded-full absolute -mt-5 -ml-5 p-1 flex items-center justify-center">
          <img className="h-6" src={content.icon} alt="" />
        </div>

        <h4 className="w-fit mx-auto mt-4">{content.title}</h4>
        <p className="text-center w-full text-xs">{content.desc}</p>
        {content.title === "Auto Lip-Sync" && (
          <div className=" relative h-16 mb-12 w-fit top-4 ml-12 text-sm lg:text-base">
            {" "}
            <Bot />{" "}
          </div>
        )}
        <h2 className=" mt-4 mb-2 mx-auto w-fit text-sm font-semibold bg-gradient-to-b from-purple-600 via-purple-400 to-neutral-700 bg-clip-text text-transparent">
          Some More Pictures
        </h2>
        <div className=" w-[90%] grid grid-cols-3 mx-auto">
          {content.screenshots.map((item, id) => (
            <div
              key={id}
              onClick={() => ToggleLargeImg(content.screenshots, id)}
              className="w-full border aspect-square hover:border-blue-300 hover:border-2 hover:scale-105 transition-all cursor-pointer"
            >
              <img className="w-full h-full" src={item} alt="" />
            </div>
          ))}
        </div>
        {content.video && (
          <div>
            <h2 className=" mt-4 mx-auto w-fit text-sm font-semibold bg-gradient-to-b from-blue-600 via-blue-400 to-neutral-700 bg-clip-text text-transparent ">
              Wow! A Video!
            </h2>
            <div
              ref={DropDownBoxRef}
              className="  overflow-hidden transition-all h-7"
            >
              <div className="flex items-center gap-2">
                <div>
                  <PlayCircle
                    ref={DropDownArrowRef}
                    onClick={DropDownLogic}
                    className=" transition-all cursor-pointer "
                  />
                </div>
                <div className="h-0.5 w-full bg-black"></div>
              </div>
              <div className="relative w-full aspect-video bg-neutral-600 my-4">
                <video className="w-full h-full" src={content.video}></video>
                <div className="absolute w-full h-full top-0 left-0 flex text-purple-300 items-center justify-center">
                  <div
                    onClick={() => {
                      ToggleLargeVideo(content.video);
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-full border border-purple-300 bg-slate-500 bg-opacity-60 hover:bg-opacity-100"
                  >
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 className="mx-auto w-fit text-sm font-semibold bg-gradient-to-b from-orange-600 via-orange-400 to-neutral-700 bg-clip-text text-transparent my-4">
          My Remarks
        </h2>
        <p className="w-[90%] p-3 text-xs border border-y-0 border-black rounded-lg mx-auto hover:border-dashed hover:scale-105">
          {content.remarks}
        </p>
        {content.link && (
          <a href={content.link} className="w-fit ">
            <div className=" mt-4 text-sm w-fit mx-auto bg-gradient-to-r from-purple-600 via-purple-800 hover:via-blue-800 to-purple-600 py-1 px-4 bg-clip-text text-transparent font-bold border-2  border-purple-300 rounded-sm hover:rounded-md hover:border-blue-300  transition-all">
              Visit Website
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectInfoBox;
