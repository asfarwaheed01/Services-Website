import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";

const images = [w1, w2, w3, w4, w5];

const Work = () => {
  return (
    <section className="bg-[#302F2F] text-white h-[60vh] flex flex-col items-center justify-center">
      <h1 className="md:text-[51px] text-[30px] md:font-extrabold font-semibold mb-[5%]">
        Worked With
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Work ${index + 1}`}
            className="w-[18%] mt-[10px] mx-2 object-contain aspect-2/3"
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
