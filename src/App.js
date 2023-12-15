import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./scenes/Navbar.jsx"
import DotGroup from "./scenes/DotGroup.jsx";
import Landing from "./scenes/Landing.jsx";
import LineGradient from "./components/LineGradient.jsx"
import MySkills from "./scenes/MySkills.jsx";
import Projects from "./scenes/Projects.jsx"
import Testimonials from "./scenes/Testimonials.jsx"
import Contact from "./scenes/Contact.jsx";
import Footer from "./scenes/Footer.jsx"

function App() {

  const [selectedPage, setSelectedPage] = useState();
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    setSelectedPage('home');
  },[])

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage} 
        selectedPage = {selectedPage} 
        setSelectedPage = {setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing 
          setSelectedPage = {setSelectedPage}
        />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">  
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
