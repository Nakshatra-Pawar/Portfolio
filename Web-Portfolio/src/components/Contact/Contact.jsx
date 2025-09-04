import React from "react";
import Connection from "../../assets/images/connections.svg";
import Facebook from "../../assets/images/socials/facebook.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's Connect and Collaborate</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://www.facebook.com/nakshatra.pawar.3158?mibextid=wwXIfr&mibextid=wwXIfr" target="blank">
              <img src={Facebook} alt="" />
              Nakshatra Pawar
            </a>
            <a href="https://www.instagram.com/pnaksh_5702?igsh=MWxlbnl0NDc3bnltZA%3D%3D&utm_source=qr" target="blank">
              <img src={Instagram} alt="" />
              pnaksh_5702
            </a>
            <a
              href="https://www.linkedin.com/in/nakshatra-pawar/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Nakshatra Pawar
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
