import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { UilSmile } from "@iconscout/react-unicons";
function Contact() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => { 
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c8ivjzi",
        "template_8eathu9",
        form.current,
        "HP9uv8LDhxhc8g3IY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
    );
    
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            autoComplete="false"
            name="hidden"
            type="text"
            style={{ display: "none" }}
          ></input>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input type="submit" value="Send" className="button" />
          <span style={{ display: "flex", gap: "5px" }}>
            {done && "Thanks for contacting me!"}
            {done && <UilSmile color="orange" size={29} />}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
