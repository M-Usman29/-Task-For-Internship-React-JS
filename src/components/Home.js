import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(props) {
  return (
    <div className="container py-5 " style={{color:'white'}}>
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 mb-4">{props.intro}</h1>
          <p className="lead">
            {props.det1}
          </p>
          <p>
          {props.det2}
          </p>
          <Link to="/Contact"
            className="btn btn-outline-dark"
            style={{
              background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
              fontSize: '20px',
              color: 'black',
              borderRadius: '20px',
              padding: '12px 24px', 
              height: '50px',
              width:'220px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
              justifyContent: 'center'
            }}
          >
            Contact Me
          </Link>
        </div>
        <div className="col-md-6">
          <img src="images/hero-img.png" alt="Hero Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

