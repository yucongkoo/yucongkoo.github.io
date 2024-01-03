import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Coursework from "./components/Coursework/Coursework";
import './App.css';
import { useEffect, useRef, useState } from "react";

function App() {

  // refs for each section
  const navbarRef = useRef();
  const introRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const courseworkRef = useRef();
  const contactRef = useRef();


  const sectionRefs = [
    {sectionName: 'intro', ref: introRef},
    {sectionName: 'about', ref: aboutRef},
    {sectionName: 'experience', ref: experienceRef},
    {sectionName: 'coursework', ref: courseworkRef},
    {sectionName: 'contact', ref: contactRef}
  ];

  // current active section
  const [activeSection, setActiveSection] = useState();

  // handle scroll to update active section accordingly
  useEffect(() => {
    const handleScroll = () => {
      const { height: navbarHeight } = getOffsets(navbarRef.current);
      const scrollPosition = window.scrollY + navbarHeight;

      const selected = sectionRefs.find(({ ref }) => {
        const e = ref.current;
        const { offsetTop, offsetBottom } = getOffsets(e);

        if (!e) {
          return false;
        }

        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      });

      if (selected && selected.sectionName !== activeSection) {
        setActiveSection(selected.sectionName);
      }

      if (!selected && activeSection) {
        setActiveSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection])

  return (
    <div className="App">
      <Navbar sectionRef={navbarRef} activeSection={activeSection}/>
      <Intro sectionRef={introRef}/>
      <About sectionRef={aboutRef}/>
      <Experience sectionRef={experienceRef}/>
      <Coursework sectionRef={courseworkRef}/>
      <Contact sectionRef={contactRef}/>
      <Footer />
    </div>
  );
}

const getOffsets = e => {
  const { height } = e.getBoundingClientRect();
  const offsetTop = e.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

export default App;
