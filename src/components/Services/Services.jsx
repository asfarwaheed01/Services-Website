import icon1 from "../../assets/icon.png";
import icon2 from "../../assets/icon (1).png";
import icon3 from "../../assets/icon (2).png";

const Services = () => {
  return (
    <section
      className="py-[8%] text-center max-w-[1190px] mx-auto pl-[15px] pr-[15px] h-auto md:h-[100vh]"
      id="services"
    >
      <h1 className="text-[31px] md:text-[51px] font-bold mb-[10%]">
        Our Services
      </h1>
      <div className="services flex flex-wrap gap-5 md:flex-row flex-col">
        <div className="card border hover:shadow-lg text-center mx-auto w-[80%] md:w-[30%] px-[10px] py-[20px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out ">
          <img
            src={icon1}
            alt="icon"
            className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] mx-auto"
          />
          <div className="text">
            <h2 className="text-green-900">Plumbing</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>Water supply and drainage system.</li>
                <li>Firefighting installations.</li>
                <li>Sprinkler installations.</li>
                <li>Pumping stations installations.</li>
                <li>Sewage treatment plants.</li>
                <li>CO2 & FM 200 installations.</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="card border hover:shadow-lg text-center mx-auto w-[80%] md:w-[30%] px-[20px] py-[20px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out">
          <img
            src={icon2}
            alt="icon"
            className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] mx-auto"
          />
          <div className="text">
            <h2 className="text-green-900">HVAC</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>HVAC Complete Installation and Maintenance</li>
                <li>Split unit AC installation</li>
                <li>Central AC installation</li>
                <li>We are providing air conditioning complete installation</li>
                <li>Maintenance, ducting, wiring and repair services</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="card border hover:shadow-lg text-center mx-auto w-[80%] md:w-[30%] px-[20px] py-[25px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out">
          <img
            src={icon3}
            alt="icon"
            className="w-[65px] h-[65px] md:w-[120px] md:h-[120px] mx-auto overflow-hidden mb-[20px]"
          />
          <div className="text">
            <h2 className="text-green-900">Electrical</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>Complete Electrical installations</li>
                <li>Diesel generating stations</li>
                <li>Low voltage & current installations</li>
                <li>Lightning protection.</li>
                <li>Building management systems.</li>
                <li>Dimming/Lighting controls</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
