
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
return (
<div className="container my-5" >
<div className="contact-heading">
<h2 className="contact-title">Contact Me</h2>
</div>
<div className="row">
<div className="col-md-6">
<h2 className="get-in-touch-title">Get In Touch With Me</h2>
<p style={{ color: 'white' }}>
The technological revolution is changing aspects of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything.
</p>
<div className="contact-info"style={{color:'white'}}>
<div className="phone-info"style={{color:'white'}}>
<FontAwesomeIcon icon={faPhone} className="contact-icon" style={{marginRight:'15px',marginTop:'40px'}} />
<span className="contact-text" >Phone: +92 321 123 1212</span>
</div>
<div className="email-info">
<FontAwesomeIcon icon={faEnvelope} className="contact-icon" style={{marginRight:'15px',marginTop:'20px'}} />
<span className="contact-text">Email: usman@gmail.com</span>
</div>
</div>
</div>
<div className="col-md-6">
<form>
<div className="mb-3">
<label htmlFor="fullName" className="form-label" style={{ color: 'white' }}>Full Name</label>
<input type="text" className="form-control" id="fullName" style={{ background: 'inherit', borderColor: 'lightgreen', color: 'white' }} />
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label" style={{ color: 'white' }}>Email Address</label>
<input type="email" className="form-control" id="email" style={{ background: 'inherit', borderColor: 'lightgreen', color: 'white' }} />
</div>
<div className="mb-3">
<label htmlFor="message" className="form-label" style={{ color: 'white' }}>Message</label>
<textarea className="form-control" id="message" rows="5" style={{ background: 'inherit', borderColor: 'lightgreen', color: 'white' }}></textarea>
</div>
<button type="submit" className="btn btn-outline-dark" style={{ background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',marginBottom:'60px' }}>Send to me</button>
</form>
</div>
</div>
</div>
);
}