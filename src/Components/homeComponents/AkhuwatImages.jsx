import React from 'react';
import bussinessOwner from '../../Images/Portrait1.jpg'
import Farmer from '../../Images/Portrait2.jpg'

const AkhuwatImages = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center m-5">
          <img 
            src={bussinessOwner} 
            alt="Hasina Bibi - Stitching Business" 
            className="img-fluid rounded mx-5"
            style={{ height: '500px', maxWidth: '250%', objectFit: 'cover' }}
          />
        </div>
  
        <div className="col-md-5 d-flex justify-content-center m-5">
          <img 
            src={Farmer}
            alt="Farzana Bibi - Beauty Parlour" 
            className="img-fluid rounded mx-5"
            style={{ height: '450px', maxWidth: '250%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages;