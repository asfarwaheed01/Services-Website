// import "./App.css";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/Projects";
// import Services from "./components/Services/Services";
// import Team from "./components/Team/Team";
// import TeamPic from "./components/TeamPic/TeamPic";
// import We from "./components/We/We";
// import WhatsApp from "./components/Whatsapp/Whatsapp";
// import Work from "./components/Work/Work";
// import Scrolltotop from "./components/scrolltotop/Scrolltotop";

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Hero />
//       <Services />
//       <About />
//       <Projects />
//       <We />
//       <Team />
//       <TeamPic />
//       <Work />
//       <Contact />
//       <Footer />
//       <WhatsApp />
//       <Scrolltotop />
//     </div>
//   );
// }

// export default App;

import { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// Lazy load components
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Services = lazy(() => import("./components/Services/Services"));
const Team = lazy(() => import("./components/Team/Team"));
const TeamPic = lazy(() => import("./components/TeamPic/TeamPic"));
const We = lazy(() => import("./components/We/We"));
const WhatsApp = lazy(() => import("./components/Whatsapp/Whatsapp"));
const Work = lazy(() => import("./components/Work/Work"));
const Scrolltotop = lazy(() => import("./components/scrolltotop/Scrolltotop"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;


