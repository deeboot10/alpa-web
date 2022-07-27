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
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="phone" />
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
        <textarea name="details" rows={15}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
