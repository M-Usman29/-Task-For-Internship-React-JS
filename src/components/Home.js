import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function Home(props) {
  return (
    <div className="container py-5" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="display-4 mb-4">{props.intro}</h1>
          <p className="lead">{props.det1}</p>
          <p>{props.det2}</p>
          <Link
            to="/Contact"
            className="btn btn-outline-dark link-hover-effect"
            style={{
              background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
              fontSize: '20px',
              color: 'black',
              borderRadius: '20px',
              padding: '12px 24px',
              height: '50px',
              width: '220px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
              justifyContent: 'center',
            }}
          >
            Contact Me
          </Link>
          <a
  href="/pdfs/CV.pdf"
  className="btn btn-outline-dark"
  download
  style={{
    fontSize: '20px',
    color: 'black',
    borderRadius: '20px',
    padding: '12px 24px',
    height: '50px',
    width: '220px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    justifyContent: 'center',
    marginTop: '20px',
    background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
    transition: 'transform 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'scale(1.1)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'scale(1)';
  }}
>
  Download CV
</a>
        </div>
        <div className="col-md-6">
          <img src="images/hero-img.png" alt="Hero Img" className="img-fluid" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row mt-5 my-5">
        <div className="col-md-4">
          <h3 className="mb-3">What I Do</h3>
          <p>A freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.</p>
        </div>
        <div className="col-md-4">
          <h3 className="mb-3">Why Choose Me</h3>
          <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
        </div>
        <div className="col-md-4">
          <h3 className="mb-3">My Skills</h3>
          <p>Product Design , Logo Design , UI Design, Icon Design</p>
        </div>
      </div>
     
      <Portfolio heading="Projects"></Portfolio>
    </div>
  );
}
