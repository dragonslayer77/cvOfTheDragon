import React from "react";
import Button from "../atoms/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faUser,
  faMailBulk,
  faSearchLocation,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <h2>Got a project? Question? Get in touch :)</h2>
      <div className="contact-section">
        <div className="contact-card">
          <p>
            {" "}
            <FontAwesomeIcon icon={faSearchLocation} /> Lisbon, Portugal
          </p>
          <p>
            <FontAwesomeIcon icon={faMailBulk} /> isabellaafry@gmail.com
          </p>
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/mrgbadjk"
          method="POST"
        >
          <div className="contact-form-name">
            <div className="contact-form-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input type="text" placeholder="Name" name="_replyto" />
          </div>
          <div className="contact-form-email">
            <div className="contact-form-icon">
              <FontAwesomeIcon icon={faAt} />
            </div>
            <input type="text" placeholder="Email" name="_replyto" />
          </div>
          <div className="contact-form-message">
            <div className="contact-form-icon">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </div>
            <textarea placeholder="Your message" name="message"></textarea>
          </div>
          <Button className="button-2" type="submit" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
