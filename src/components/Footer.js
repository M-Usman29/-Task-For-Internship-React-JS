import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <div className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src="images/logo.png" alt="Logo" height="40" />
          <span className="ms-2">{props.ftrname}</span>
        </div>
        <p className="mb-0">© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <div className="d-flex">
          <a href="#" className="me-3 text-white">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="#" className="me-3 text-white">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
