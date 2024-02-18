import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import tick from "../../assets/check.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ukryypf", "template_a78qq8c", form.current, {
        publicKey: "An3D6hdkunRWOKiwS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="md:h-[70vh] h-auto bg-[#ffffff] md:py-[5%] py-5"
      id="contact"
    >
      <section className=" text-center max-w-[1190px] mx-auto pl-[15px] pr-[15px] h-full">
        <form
          className="md:w-[70%] w-[90%] mx-auto text-left border-2 py-10 bg-slate-50 rounded-lg md:px-20 px-3 shadow-2xl"
          onSubmit={handleSubmit}
          ref={form}
        >
          <h1 className="font-extrabold md:text-[51px] text-[31px] text-center">
            Contact Us
          </h1>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-semibold text-gray-900 dark:text-black"
            >
              Your email:
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="i.e: akftechnicalservices@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-semibold text-gray-900 dark:text-black"
            >
              Your Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="i.e: Imran Khalid"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-semibold text-gray-900 dark:text-black"
            >
              Your message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Your Message..."
            ></textarea>
          </div>
          <div className="contact-button text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-56">
          <div className="mx-auto my-2 w-52">
            <img src={tick} alt="" className="w-[50px] mx-auto mb-2" />
            <p className="font-bold text-[14px] text-center">
              Your Response was received. We will get back to you soon. Thank
              You.
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
