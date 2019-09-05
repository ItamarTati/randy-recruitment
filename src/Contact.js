import React from 'react';
import './index.scss';


function Contact() {
  return (
    <div className="contact">
        <h1>Contact Us Today</h1>
        <div className ='msform'>
          <form className='msform-box'>
        <h2>CONTACT US</h2>
        <p type="Name:"><input placeholder="Write your name here.."></input></p>
        <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
        <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
        <button>Send Message</button>
        <div>
          <span class="fa fa-phone"></span>001 1023 567
          <span class="fa fa-envelope-o"></span> contact@company.com
        </div>
      </form>
      </div>
    </div>
  );
}

export default Contact;