import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="form-container">
        <h2 data-aos="fade-down">Contact <span>Me</span></h2>
        <form action="/" className="contact-form" method="POST" data-aos="zoom-in-up">
          <div id="contact-card" className="contact-input-group row">
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-person-fill"></i>
                <input className="contact-input" type="text" id="name" name="name" placeholder="Full Name" autoComplete="name" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-envelope-fill"></i>
                <input className="contact-input" type="email" id="email" name="email" placeholder="Email Address" autoComplete="email" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-field">
                <i className="bi bi-telephone-fill"></i>
                <input className="contact-input" type="tel" id="phone-number" name="phone-number" placeholder="Phone Number" autoComplete="tel" />
              </div>
            </div>
            <div className="col-12">
              <div id="message-box" className="input-field">
                <i className="bi bi-chat-text-fill"></i>
                <textarea className="contact-input" id="message" name="message" rows="4" placeholder="Say hello!"></textarea>
              </div>
            </div>
            <input id="submit-button" type="submit" className="btn btn-info submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
}
