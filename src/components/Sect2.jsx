import Footer from "./SubComponents/Footer";
import MyTechStack from "./SubComponents/MyTechStack";
import Stats from "./SubComponents/Stats";
import WorkTogether from "./SubComponents/WorkTogether";

const Sect2 = () => {
  return (
    <div className="lg:w-[25%] md:w-full space-y-3">
      <MyTechStack />
      <Stats />
      <WorkTogether />
      <div className="hidden lg:block pt-6">
        <Footer />
      </div>
    </div>
  );
};
export default Sect2;
