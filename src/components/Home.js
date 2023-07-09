import React from 'react';

export default function Home() {
  return (
    <div className="container py-5 " style={{color:'white'}}>
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 mb-4">Welcome to My Website</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut scelerisque urna, id pharetra justo.
          </p>
          <p>
            Fusce quis suscipit dolor. Donec rutrum quam id ullamcorper lacinia. Nam congue facilisis malesuada. Vestibulum gravida ex ac magna interdum dapibus. Nulla ac mauris ac augue hendrerit dictum. Aenean a est eget nunc bibendum fringilla ac vitae diam.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="col-md-6">
          <img src="images/hero-img.png" alt="Hero Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

