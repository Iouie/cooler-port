import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Footer,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern low-opacity bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
