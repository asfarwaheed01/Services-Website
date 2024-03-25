import { Link as ScrollLink } from "react-scroll";
import "./Footer.css";
import f1 from "../../assets/facebook (1).png";
import f2 from "../../assets/instagram (1).png";
import f3 from "../../assets/linkedin.png";
import f4 from "../../assets/whatsapp.png";
import flogo from "../../assets/weblogo.png";

const Footer = () => {
  const linksData = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  const whatsappNumber = "+971566679896";

  return (
    <>
      <section className="bg-[#2F2F2F] md:h-[50vh] h-auto">
        <section className="md:py-[5%] py-[3%] max-w-[1190px] mx-auto pl-[15px] pr-[15px] h-auto flex flex-wrap text-[#DADADA] justify-between items-center md:flex-row flex-col text-center">
          <div className="footer-logo md:w-[300px] md:h-[300px] w-[200px] my-2 md:my-0">
            <img src={flogo} alt="" />
          </div>
          <div className="quick-links text-left">
            <h2 className="text-left font-bold text-[31px]">Quick Links:</h2>
            <ul className="list-none pl-0">
              {linksData.map(({ name, link }) => (
                <li
                  key={link}
                  className="mb-2 text-white text-[24px] cursor-pointer transition-all duration-300 hover:underline md:text-left f-links"
                >
                  <ScrollLink
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                    className="custom-scroll-link text-white"
                  >
                    {name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="socials ">
            <h2 className="md:text-left  font-bold text-[31px] mb-3">
              Socials:
            </h2>
            <ul className="flex md:gap-2 gap-0 md:justify-start justify-center">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61555357547209"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={f1} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/akf_team_324/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={f2}
                    alt=""
                    className="insta"
                    style={{ width: "57px", height: "57px", marginTop: "-3px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/services/page/a81274328a245a5985/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={f3} alt="" />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={f4} alt="" />
                </a>
              </li>
            </ul>
            <div className="email mt-4 text-left">
              <h2 className="text-bold text-[31px]">Email Us at:</h2>
              <a
                href="mailto:info@akftechnicalservices.com"
                className="text-white md:text-[22px] text-[16px]"
              >
                info@akftechnicalservices.com
              </a>
            </div>
          </div>
        </section>
        <hr className="text-white !important border-t-4" />

        <div className="copyright text-center text-white py-[1px] md:px-5 px-1">
          <div className="copy md:text-[14px] text-[12px]">
            <p>&copy;Copyrights 2024-25 AKF Services. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
