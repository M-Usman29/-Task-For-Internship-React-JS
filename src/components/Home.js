import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Home(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container" style={{ marginLeft: '30px', fontSize: '18px' ,height:'75px'}}>
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" alt="Logo" height="40" />
          <span style={{ marginLeft: '10px', color: 'white' }}>{props.myname}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ order: '-1', marginRight: 'auto' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{ marginRight: '750px',marginTop:'10px',paddingLeft:'20px' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
              {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">
              {props.portfolio}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
              {props.contact}
              </a>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'40px'}}>
          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '20px', color: 'orange', transition: 'color 0.5s' }} />
          <button
            className="btn btn-outline-dark"
            style={{
              background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
              color: 'black',
              borderRadius: '20px',
              padding: '6px 16px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              width:'relative',
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
