import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";
import w6 from "../../assets/hhm.png";

const images = [w1, w2, w3, w4, w5, w6];

const Work = () => {
  return (
    <section className="bg-[#302F2F] text-white md:h-[65vh] h-auto flex flex-col items-center justify-center py-[5%]">
      <h1 className="md:text-[51px] text-[30px] md:font-extrabold font-semibold mb-[3%]">
        Worked With
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Work ${index + 1}`}
            className="md:w-[15%] w-[25%] mt-[10px] mx-2 object-contain aspect-2/3 md:mb-0 mb-[6%]"
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
