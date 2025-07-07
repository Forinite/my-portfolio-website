import AboutMe from "./SubComponents/AboutMe";
import Projects from "./SubComponents/Projects";
import Services from "./SubComponents/Services";

const Sect1 = () => {
  return (
    <div className="lg:w-[35%] md:w-full  space-y-3">
      <AboutMe />
      <Services />
      <Projects />
    </div>
  );
};
export default Sect1;
