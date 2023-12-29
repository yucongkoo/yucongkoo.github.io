import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
