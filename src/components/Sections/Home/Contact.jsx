import { useState } from "react";
import { useRef } from "react";
import loader from "../../../img/loader.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const [state, setState] = useState(null);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setState("loading");
    emailjs
      .sendForm(
        "service_wpuo1bk",
        "template_tzf68tc",
        formRef.current,
        "Uy3wG2Sl_aOafhjix"
      )
      .then((res) => {
        setState("success");
      })
      .catch((err) => {
        setState("error");
      });
  };

  return (
    <section className="contact">
      <h2>CONTACT US</h2>
      <p className="paragraph">
        To get in touch with us, use the form below. We are interested in
        finding out more about you, your business, and how we can contribute to
        your continued growth.
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        ref={formRef}
      >
        <input placeholder="Name" type="text" name="name" />
        <input placeholder="Email" type="email" name="email" />
        <input placeholder="Phone" type="text" name="phone" />
        <select name="service">
          <option value={false} className="placeholderOption">
            What service are you interested in?
          </option>
          <option value="website-design">Website design</option>
          <option value="seo">Search engine optimization</option>
          <option value="ppc">Pay per click</option>
          <option value="maintenance">Maintenance</option>
          <option value="all">All of the above</option>
          <option value="something-else">Something else</option>
        </select>
        <textarea
          placeholder="Project Details"
          name="message"
          rows={9}
        ></textarea>
        {state === "error" && (
          <div className="error">❌ Something went wrong.</div>
        )}
        {state === "success" && (
          <div className="success">
            ✔ Your message has been sent successfully.
          </div>
        )}
        {state === "loading" && (
          <div className="loader">
            <img src={loader} alt="Loader" />
          </div>
        )}
        {(!state || state === "error") && (
          <button className="send-btn" type="submit">
            SEND REQUEST
          </button>
        )}
      </form>
    </section>
  );
}

export default Contact;
