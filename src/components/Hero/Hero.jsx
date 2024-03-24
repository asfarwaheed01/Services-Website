import hero from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero flex h-full pt-[4%] ">
        <div className="hero-text md:w-[20%] w-0">
          <div className="text-box border bg-[#1E1E1E] bg-opacity-95 absolute top-[30%] left-[0] p-2 w-[80%] md:w-[40%] md:px-5 py-5">
            <h1 className="text-[18px] md:text-[51px] text-[#DADADA]">
              AKF Technical Services
            </h1>
            <hr
              className="rounded-hr"
              style={{
                borderTop: "5px solid white !important",
                borderRadius: "5px",
                margin: "10px 0",
              }}
            />
            <p className="text-[16px] md:text-[30px] text-[#DADADA]">
              We provide MEP, Renovation and Civil work services on residential,
              commercial and industrial level. Our team of experienced and
              qualified professionals is dedicated to providing high-quality
              workmanship and exceptional customer services
            </p>
          </div>
        </div>
        <div className="hero-img w-[100%] md:w-[80%] h-[100%]">
          <img
            src={hero}
            alt=""
            className="w-full h-[100%] image object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
