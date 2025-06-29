import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //serviceId, templateId, templateParams, publicKey
      await emailjs.send(
        "service_ekfctwr",
        "template_q99vthj",
        {
          from_name: form.name,
          to_name: "Rajat",
          from_email: form.email,
          to_email: "rajatsen7568@gmail.com",
          message: form.message,
        },
        "kx9tFDdvNSc03q176"
      );

      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-10">Let's Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm a full-stack developer with a passion for building interactive
            web apps and 3D experiences. If you're looking to collaborate or
            have a project idea, feel free to reach out!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Let's work together!"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
