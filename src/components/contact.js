import { React, useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({name: "", email: "", message: ""});
  const [errorMessage, setErrorMessage] = useState("");
  const { name , email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    if(e.target.name === "E-mail") {
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage("Your email is invalid.");
      }
      else {
        setErrorMessage("");
      }
    }
    else {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      }
      else {
        setErrorMessage("");
      }
    }
    if(!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  
  return(
    <section className="contact hero">
      <div className="content">
        <h4>Contact</h4>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="Name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="E-mail"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              rows="5"
              className="form-control"
              placeholder="Message"
              name="Message"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div className="error">
              <i class="fas fa-exclamation-triangle"></i>
              <p>{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
