import weimg from "../../assets/we.png";

const We = () => {
  return (
    <section className="w-full bg-[#2F2F2F] text-[#DADADA] md:py-[10%] md:h-[100vh] h-auto">
      <div className="we text-center max-w-[1190px] mx-auto flex items-center justify-center">
        <div className="we-content flex gap-4 md:flex-row flex-col">
          <div className="we-desc md:w-[50%] w-[90%] text-left mx-auto md:py-5 pt-5 pb-[5px]">
            <h1 className="text-[35px] font-bold mb-4 text-left">Who we are</h1>
            <p className=" text-[16px] md:text-[24px] text-left">
              We are pleased to introduce ourselves to your esteemed
              organization as one of the most trusted company of MEP, Renovation
              and Civil work contractor in United Arab Emirates. We provide a
              wide range of services for residential, commercial, and industrial
              projects. Our team of experienced and qualified professionals is
              dedicated to providing high-quality workmanship and exceptional
              customer service.
            </p>
          </div>
          <div className="we-img md:w-[50%] w-[90%] mx-auto mb-5">
            <img src={weimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default We;
