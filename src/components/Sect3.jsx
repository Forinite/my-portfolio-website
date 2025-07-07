import Footer from "./SubComponents/Footer";
import Testimonials from "./SubComponents/Testimonials";
import WorkProcess from "./SubComponents/WorkProcess";

const Sect3 = () => {
  return (
    <div className="lg:w-[40%] md:col-span-2 space-y-3">
      <WorkProcess />
      <Testimonials />
      <div className="block lg:hidden pt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Sect3;
