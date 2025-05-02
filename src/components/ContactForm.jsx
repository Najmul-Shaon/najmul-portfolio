import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [result, setResult] = useState("");
  console.log(result);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(import.meta.env.VITE_WEB3_ACCESS_KEY);

    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Sent!",
        text: "Message sent Successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      setResult(data.message);
      Swal.fire({
        title: "Opps!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {`I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.`}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              placeholder="Enter Your Name"
              required
              name="name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              name="message"
              rows={6}
              placeholder="Enter Your Message"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              type="submit"
            >
              Send Message <TbMailForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
