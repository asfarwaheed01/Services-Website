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
        <div className="card border hover:shadow-lg text-center mx-auto w-[90%] md:w-[30%] px-[10px] py-[20px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out ">
          <img
            src={icon2}
            alt="icon"
            className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] mx-auto"
          />
          <div className="text">
            <h2 className="text-green-900">HVAC</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>Water Chiller complete Installation.</li>
                <li>FAHU, FCU, VAU, and AHU complete Installation.</li>
                <li>PI, GI and Phenolic Ducting.</li>
                <li>Fire Resistance Coating.</li>
                <li>Deluxe and Split AC Installation.</li>
                <li>Maintenance, Trunking, Wiring and Repairing Services.</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="card border hover:shadow-lg text-center mx-auto w-[90%] md:w-[30%] px-[20px] py-[20px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out">
          <img
            src={icon3}
            alt="icon"
            className="w-[65px] h-[65px] md:w-[120px] md:h-[120px] mx-auto overflow-hidden mt-3 mb-[20px]"
          />
          <div className="text">
            <h2 className="text-green-900">Electrical</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>All Types of LED lightning Installation.</li>
                <li>Wiring, Trunking and Labeling.</li>
                <li>DP Dressing and Load Management.</li>
                <li>Emergency Protection and Signs Installation.</li>
                <li>Fire Panel Installation and Looping.</li>
                <li>CCTV Installation.</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="card border hover:shadow-lg text-center mx-auto w-[90%] md:w-[30%] px-[20px] py-[25px] rounded-xl shadow-2xl transition-transform duration-1000 ease-in-out">
          <img
            src={icon1}
            alt="icon"
            className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] mx-auto"
          />
          <div className="text">
            <h2 className="text-green-900">Plumbing</h2>
            <p className="text-[16px] md:text-[18px] text-left">
              <ol style={{ listStyleType: "disc" }}>
                <li>Water supply and Drainage system.</li>
                <li>Washroom and Kitchen Fit-out.</li>
                <li>Water Heater Installation.</li>
                <li>Firefighting Installations</li>
                <li>Sprinkler Installations.</li>
                <li>Pumping Stations Installations.</li>
                <li>Sewage treatment plants.</li>
                <li>CO2 & FM 200 installations.</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
