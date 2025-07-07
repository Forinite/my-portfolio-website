import Sect1 from "../Sect1";
import Sect2 from "../Sect2";
import Sect3 from "../Sect3";

const HomePage = () => {
  return (
    <>
      <section className="px-8 py-3 md:grid grid-cols-2 lg:flex space-y-4 space-x-4">
        <Sect1 />
        <Sect2 />
        <Sect3 />
      </section>
    </>
  );
};

export default HomePage;
