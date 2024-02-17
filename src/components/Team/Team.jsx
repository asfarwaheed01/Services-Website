import founder from "../../assets/founder.png";

const Team = () => {
  return (
    <section className="py-[5%] text-center max-w-[1190px] mx-auto pl-[15px] pr-[15px] md:h-[100vh] h-auto">
      <h1 className="text-[51px] font-extrabold mb-[10%]">Our Team</h1>
      <div className="team flex justify-between md:flex-row flex-col text-center gap-3">
        <div className="founder flex items-center gap-3 text-center">
          <img
            src={founder}
            alt="founder"
            className="md:w-[250px] md:h-[250px] w-[150px] h-[150px]"
          />
          <div className="founder-desc text-left">
            <h2 className="md:text-[32px] text-[20px] font-bold mb-3">
              Imran Khalid
            </h2>
            <p className="md:text-[24px] text-[16px] font-semibold">
              Founder of AKF technical Services
            </p>
          </div>
        </div>
        <div className="members md:text-left text-center">
          <div className="manager">
            <h2 className="md:text-[32px] text-[20px] font-bold md:mb-3 mb-2 md:text-left">
              Project Engineer
            </h2>
            <p className="md:text-[24px] text-[16px] font-semibold mb-3 md:text-left">
              Engr. Muhammad Zohaib
            </p>
          </div>
          <hr className="line border-t-2 opacity-[1]" />
          <div className="employees">
            <h2 className="text-[32px] font-bold mb-3 text-left">Employees:</h2>
            <div className="emp-lists flex gap-5 text-left">
              <ol className="list-disc">
                <li className="mb-2">Shoaib Khaliq</li>
                <li className="mb-2">Rizwan Farooq</li>
                <li className="mb-2">Sk Najam Ali</li>
                <li className="mb-2">Sk Samer</li>
                <li className="mb-2">Sabibur Rehman</li>
              </ol>
              <ol className="list-disc">
                <li className="mb-2">Imran Kayal</li>
                <li className="mb-2">Mir Hamza</li>
                <li className="mb-2">Muhammad Sajid</li>
                <li className="mb-2">Ali Hassan </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
