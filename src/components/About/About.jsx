import aboutimg from "../../assets/about.png";
import tick from "../../assets/check-circle.png";
import "./About.css";

const About = () => {
  return (
    <section className="w-full bg-[#2F2F2F] text-[#DADADA] md:h[100vh] h-[auto] pb-[20px] md:pt-[7%] md:pb-[5%]">
      <section
        className="text-center max-w-[1190px] mx-auto flex items-center md:h[100vh] h-[auto]"
        id="about"
      >
        <div className="about flex w-full gap-[10px] md:gap-[50px] md:flex-row flex-col-reverse">
          <div className="services-img w-[90%] mx-auto">
            <img src={aboutimg} alt="" />
          </div>
          <div className="flex flex-col description md:w-[50%] w:[90%] pt-[7%] mx-auto">
            <h1 className="w-full md:w-[70%] text-3xl text-[51px] mb-[40px] font-extrabold">
              About Us
            </h1>
            <div className="abt-text flex flex-col px-[10px] md:px-0 w-full">
              <div className="text1 flex gap-[20px]">
                <img src={tick} alt="" className="w-[25px] h-[25px]" />
                <div className="desc md:w-[100%] w-[90%] mx-auto text-left">
                  <h2 className="text-[20px] w-auto md:w-[67%] font-semibold">
                    Over 200,000 Satisfied Clients
                  </h2>
                  <p className="text-[12px] md:text-[14px]">
                    Our track record speaks for itself - with years of
                    experience under our belt, we have had the pleasure of
                    serving over 100+ clients and counting.
                  </p>
                </div>
              </div>
              <div className="text1 flex gap-[20px]">
                <img src={tick} alt="" className="w-[25px] h-[25px]" />
                <div className="desc md:w-[75%] w-auto text-left">
                  <h2 className="text-[20px] w-auto md:w-[54%] font-semibold">
                    Certified and Trusted
                  </h2>
                  <p className="text-[12px] md:text-[14px]">
                    As a certified and trusted Technical agency, we provide
                    exceptional services and have a reputation for delivering
                    high-quality results
                  </p>
                </div>
              </div>
              <div className="text1 flex gap-[20px]">
                <img src={tick} alt="" className="w-[25px] h-[25px]" />
                <div className="desc w-[90%] text-left">
                  <h2 className="text-[20px] md:w-[48%] w-auto font-semibold">
                    Eco-Friendly Services
                  </h2>
                  <p className="text-[12px] md:text-[14px]">
                    Embark on a visual journey along the environment, and
                    witness firsthand the beauty of architectural designs
                    interwoven by nature and human imagination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
