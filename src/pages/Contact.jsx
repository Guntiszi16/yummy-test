import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact_container">
      <h2>Contact Us</h2>
      <p>
        We love hearing from you! Please contact us via the email address or
        phone numbers below.
      </p>
      <p>
        For answers to frequently asked questions about your subscription,
        please check out our FAQ page
      </p>
      <p>
        <span>Email address:</span> help@yummy.com
      </p>
      <p>We will respond to you email within 72 hours.</p>
      <div>
        <p>
          <span>Toll-free number</span> 855-753-1037 <br />
          <span>International number</span> 332-239-2921
        </p>
      </div>
      <p>Hours of operation: Monday through Friday, 9 a.m. to 7 p.m. E.T.</p>
    </div>
  );
}
