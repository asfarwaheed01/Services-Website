import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <section className=" py-[5%] text-center max-w-[1190px] mx-auto pl-[15px] pr-[15px] md:h-[100vh] h-auto">
      <div id="projects" className="projects">
        <h1 className="md:text-[51px] text-[30px] font-extrabold text-[#302F2F] md:mb-5 mb-4">
          Featured Projects
        </h1>
        <div className="project-cards flex w-full relative gap-4 flex-wrap md:flex-row flex-col">
          <div className="project-container md:w-[30%] w-[90%] mx-auto md:h-[600px] h-[300px] rounded-lg overflow-hidden relative">
            <img
              src={p1}
              alt=""
              className="w-full h-full object-cover hover:scale-125 transition-transform ease-in-out duration-300"
            />
            <div className="P-details">
              <p className="text-[16px] md:text-[18px] text-left">
                In this Projcet, We did:
                <ol>
                  <li>Old AC demolition</li>
                  <li>HVAC complete Installation</li>
                  <li>Complete Paint, WaterProofing</li>
                  <li>Fit out and Trunking</li>
                  <li>Electrical Wiring replacements</li>
                </ol>
              </p>
            </div>
            <div className="absolute left-0 bottom-0 text-[#DADADA] text-left p-4">
              <h2>Dubai Foundation For Women and Children</h2>
            </div>
          </div>
          <div className="project-container md:w-[30%] w-[90%] mx-auto md:h-[600px] h-[300px] rounded-lg overflow-hidden relative">
            <img
              src={p2}
              alt=""
              className="w-full h-full object-cover hover:scale-125 transition-transform ease-in-out duration-300"
            />
            <div className="P-details">
              <p className="text-[16px] md:text-[18px] text-left">
                In this Projcet, We did:
                <ol>
                  <li>We can complete renovation of villa Fit out</li>
                  <li>Decoration and Painting</li>
                  <li>Backyard renovation</li>
                  <li>Villa front side complete decoration</li>
                  <li>Carpeting and Interior designing</li>
                </ol>
              </p>
            </div>
            <div className="absolute left-0 bottom-0 text-[#DADADA] text-left p-4">
              <h2>DAMAC Hills Villas Renovation</h2>
            </div>
          </div>
          <div className="project-container md:w-[30%] w-[90%] mx-auto md:h-[600px] h-[300px] rounded-lg overflow-hidden relative">
            <img
              src={p3}
              alt=""
              className="w-full h-full object-cover hover:scale-125 transition-transform ease-in-out duration-300"
            />
            <div className="P-details">
              <p className="text-[16px] md:text-[18px] text-left">
                In this Projcet, We did:
                <ol>
                  <li>
                    Demolition old café and complete renovation of new café
                  </li>
                  <li>Carpentry work and Fit Out</li>
                  <li>Electrical wiring</li>
                  <li>Cooling system complete installation</li>
                </ol>
              </p>
            </div>
            <div className="absolute left-0 bottom-0 text-[#DADADA] text-left p-3">
              <h2>Dubai Mall cafe Complete Renovation</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
