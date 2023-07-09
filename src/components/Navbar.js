import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container" style={{ marginLeft: '30px', fontSize: '18px', height: '75px', display: 'flex', alignItems: 'center' }}>
        <Link className="navbar-brand" to="/">
          <img src="images/logo.png" alt="Logo" height="40" />
          <span style={{ marginLeft: '10px', color: 'white' }}>{props.myname}</span>
        </Link>
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
              <Link className="nav-link text-white" to="/" style={{ marginLeft: '20px' }}>
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Portfolio" style={{ marginLeft: '20px' }}>
                {props.portfolio}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact" style={{ marginLeft: '20px' }}>
                {props.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/Contact"
           className="btn btn-outline-dark link-hover-effect"
            style={{
              background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
              fontSize: '20px',
              color: 'black',
              borderRadius: '20px',
              padding: '6px 24px', 
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            Contact
          </Link>
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
