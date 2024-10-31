import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full text-black">
      <Navbar />
      <div className=" flex flex-col gap-16 md:px-48 px-20">
        <Section1 />
        <Section2 />
        <Section3 />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
