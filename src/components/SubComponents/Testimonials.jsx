import { StarIcon, Stars } from "lucide-react";
import RevStar from "./RevStar";
import { TestimonialsInfo } from "../../constants/Index";
import { MobileWidth } from "../../constants/systemConstants";

const Testimonials = () => {
  return (
    <div className="border  border-neutral-700   bg-[#100F12] w-full h-fit rounded-lg p-3 ">
      <div className="flex">
        <Stars className="text-purple-300 mr-1" />
        <h3 className="font-semibold">Testimonials</h3>
      </div>
      <h6 className="text-[10px] text-neutral-400">
        For aesthic purposes only, I don't have many clients available to
        showcase yet
      </h6>
      <div
        className={` grid mt-4 gap-3 ${
          window.innerWidth < MobileWidth ? "grid-cols-1" : "grid-cols-2 "
        }`}
      >
        {TestimonialsInfo.map((item, id) => (
          <div
            key={id}
            className="w-full h-fit border rounded-lg border-neutral-800 bg-[#151417] p-3  text-xs "
          >
            <div className="flex justify-between w-full gap-2">
              <div className="flex space-x-2">
                <div className="rounded-full bg-neutral-700 h-7 aspect-square flex items-center justify-center">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <h5 className="text-[10px] text-neutral-400">
                    {item.company}
                  </h5>
                </div>
              </div>

              <div className="flex space-x-1">
                {item.Rating.map((item, id) => (
                  <div
                    key={id}
                    className={`   ${
                      window.innerWidth < MobileWidth
                        ? "w-3 "
                        : "max-w-4 w-[12%] "
                    } `}
                  >
                    {item === "*" ? <RevStar /> : <StarIcon className="h-4" />}
                  </div>
                ))}
              </div>
            </div>
            <p
              className={`  text-neutral-300 mt-1 ${
                window.innerWidth < MobileWidth ? "text-[10px]" : " "
              } `}
            >
              {item.testimony}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
