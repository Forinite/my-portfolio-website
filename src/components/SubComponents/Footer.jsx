import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-[10px] text-neutral-400 space-y-1">
        <p>v2.5.0 beta</p>
        <p>Made by Obe Fortune</p>
        <p>&copy; 2025 All rights reserved</p>
      </div>
      <div className="relative -z-10 -top-14 mx-auto w-[100px]">
        <div className="z-10 left-1/2 top-10 absolute backdrop-blur-xl bg-purple-200 w-[40px] h-[15px] shadow-lg shadow-purple-400  rounded-full bg- "></div>
        <div className=" z-30 left-0 top-2 absolute bg-[#00000034] w-[140px] h-[80px] backdrop-blur-md"></div>
      </div>
    </div>
  );
};

export default Footer;
