import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Coursework from "./components/Coursework/Coursework";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Coursework />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
