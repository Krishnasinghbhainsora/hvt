import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ComponentCss/Hvttourcard.css';
import tours from "../Data/data.js";
import img1 from '../imgs/des1.jpeg'
const Hvttourcard = () => {
  return (
    <section className="bg-light mt-4 p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-3 ">
            <h2 className="fw-bold fs-1">
              Our
              <span className="main-hover"> Destinations </span>
            </h2>
          </div>

          <div className='row'>
            <div className="card">
              <div className="card" style={{ width: '18rem' }}>
                <img src={img1} className="card-img-top" alt="" />
                <div className="card-body">

                  <h5 className="card-title">Vrindavan</h5>
                  <h5 className="btn btn-primary ">Go somewhere</h5>
                </div>
              </div>
              {/* <div className="contain">
                <div className="singlecard">
                  <img src={img1} alt="" />
                </div>
                <h3 >Vrindavan</h3>
              </div> */}

            </div>


          </div>
        </div>
      </div>
    </section >
  );
}

export default Hvttourcard;
