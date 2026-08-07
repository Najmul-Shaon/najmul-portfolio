import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import GlowCard from "./GlowCard";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  // sweetalert2 is ~1MB, so it's loaded on demand rather than in the main bundle.
  const alert = async (options) => {
    const { default: Swal } = await import("sweetalert2");
    return Swal.fire({ timer: 2000, showConfirmButton: false, ...options });
  };

  const showError = (text) => alert({ title: "Oops!", text, icon: "error" });

  const onSubmit = async (event) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
    if (!accessKey) {
      showError("Contact form is not configured. Please email me directly.");
      return;
    }

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        form.reset();
        alert({
          title: "Sent!",
          text: "Message sent successfully.",
          icon: "success",
          timer: 1500,
        });
      } else {
        showError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      showError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <GlowCard identifier="contact-form">
        <div className="p-5 sm:p-6 text-white">
          <p className="mb-2 text-lg sm:text-xl font-medium uppercase text-[#16f2b3]">
            Send me a message
          </p>
          <p className="text-sm text-[#8f9bba]">
            {`I'd love to hear from you! Whether it's a question, an opportunity, or just to say hi — drop a message below.`}
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
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}{" "}
              <TbMailForward size={20} />
            </button>
          </div>
        </div>
      </div>
      </GlowCard>
    </form>
  );
};

export default ContactForm;
