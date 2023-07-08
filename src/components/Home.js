import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Home(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container" style={{ marginLeft: '30px', fontSize: '18px', height: '75px', display: 'flex', alignItems: 'center' }}>
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
          style={{ order: '-1', marginRight: 'auto', border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home" style={{ marginLeft: '20px' }}>
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio" style={{ marginLeft: '20px' }}>
                {props.portfolio}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact" style={{ marginLeft: '20px' }}>
                {props.contact}
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <button
            className="btn btn-outline-dark"
            style={{
              background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
              fontSize: '20px',
              color: 'black',
              borderRadius: '20px',
              padding: '6px 24px', // Increased button length
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            Contact
          </button>
          <FontAwesomeIcon icon={faGlobe} style={{ color: 'orange', transition: 'color 0.5s', fontSize: '24px' }} /> {/* Increased globe icon size */}
        </div>
      </div>
      <style>
        {`
          .navbar-nav .nav-link:hover {
            text-decoration: underline;
            color: green !important;
            transform: scale(1.2);
          }
        `}
      </style>
    </nav>
  );
}
