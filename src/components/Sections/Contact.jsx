function Contact() {
  const handleSubmit = (e) => {
    console.log("hello world");
  };

  return (
    <section className="contact">
      <h2>CONTACT US</h2>
      <p>
        To get in touch with us, use the form below. We are interested in
        finding out more about you, your business, and how we can contribute to
        your continued growth.
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
