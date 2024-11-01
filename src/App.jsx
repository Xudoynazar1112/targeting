import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,  // Animation duration (in milliseconds)
      offset: 50,       // Trigger animations at 50px from original trigger point
      easing: 'ease-in-out', // Easing function
      delay: 100,       // Delay before animation starts
    });
  }, []);
  return (
    <div className="w-full text-black">
      <Navbar />
      <div className=" flex flex-col gap-16 md:px-48 px-5">
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
