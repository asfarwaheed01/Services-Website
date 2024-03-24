import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import TeamPic from "./components/TeamPic/TeamPic";
import We from "./components/We/We";
import WhatsApp from "./components/Whatsapp/Whatsapp";
import Work from "./components/Work/Work";
import Scrolltotop from "./components/scrolltotop/Scrolltotop";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <We />
      <Team />
      <TeamPic />
      <Work />
      <Contact />
      <Footer />
      <WhatsApp />
      <Scrolltotop />
    </div>
  );
}

export default App;
