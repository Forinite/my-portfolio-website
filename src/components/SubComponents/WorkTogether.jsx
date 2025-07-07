import { Circle, Handshake, Mail, Phone, PhoneCall } from "lucide-react";
import { Contacts, ProfilePic } from "../../constants/Index";

const WorkTogether = () => {
  return (
    <div className="border  border-neutral-700   bg-[#100F12] w-full h-[220px] rounded-lg flex flex-col items-center ">
      <div className="w-[60px] aspect-square rounded-full border  border-neutral-700   bg-[#100F12] mt-4 flex items-center justify-center ">
        <Handshake className=" text-purple-300 h-8 w-8" />
      </div>

      <h3 className=" mt-4 text-lg md:text-base lg:text-lg font-bold">
        Let's work together
      </h3>
      <h5 className=" text-xs md:text-[10px] lg:text-xs text-neutral-400 flex items-center">
        <p>Let's bring your ideas to Reality </p>
        {/* <p>
          <TypewriterEffect words={words} />
        </p> */}
      </h5>

      <div className="w-full flex items-center justify-center mt-4 gap-4">
        {Contacts.map((item, id) => (
          <div key={id} className="w-fit h-fit transition-all hover:scale-90">
            <a href={item.link} target="_blank">
              <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center">
                <div className=" relative rounded-md  border-neutral-600 w-[95%] h-[95%] flex items-center justify-center ">
                  <img
                    width={32}
                    className=" rounded-md min-w-4 min-h-4"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
        ))}

        {/* <a className="w-[80%]" href="">
          {" "}
          <div className=" mt-4 w-[100%] rounded-md h-6 text-xs bg-purple-300 hover:bg-purple-400  cursor-pointer transition-all  text-black flex items-center justify-center">
            <Mail className="w-4 h-4 mr-1" /> Email Me
          </div>
        </a>

        <a className="w-[80%]" href="">
          <div className=" mt-1 w-[100%] rounded-md h-6 text-xs  bg-neutral-700 hover:bg-neutral-800 cursor-pointer transition-all  text-white flex items-center justify-center">
            <Phone className="w-4 h-4 mr-1" /> Whatsapp
          </div>
        </a> */}
      </div>
    </div>
  );
};
export default WorkTogether;
