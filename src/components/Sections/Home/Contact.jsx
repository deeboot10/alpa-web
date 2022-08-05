function Contact() {
  const handleSubmit = (e) => {
    console.log("hello world");
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
        </select>
        <textarea
          placeholder="Project Details"
          name="details"
          rows={9}
        ></textarea>
        <button className="send-btn" type="submit">
          SEND REQUEST
        </button>
      </form>
    </section>
  );
}

export default Contact;
