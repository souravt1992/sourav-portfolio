import React, { Component } from 'react'
import Partner1 from '../images/partner-1.png';
import Partner2 from '../images/partner-2.png';
import Partner3 from '../images/partner-3.png';
import Partner4 from '../images/partner-4.png';
import Partner5 from '../images/partner-5.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                    <div className="container">
                        <div className="row d-flex no-gutters">
                            <div className="col-md-6 col-lg-6 d-flex">
                                <div className="img-about img d-flex align-items-stretch">
                                    <div className="overlay"></div>
                                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/photo.jpg)' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                                <div className="row justify-content-start">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <h1 className="big">About</h1>
                                        <h2 className="mb-4">About Me</h2>
                                        <p>I have a background from engineering and has a very versatile experience in
                                            software development, unit test-cases, release and requirement analysis.
                                        </p>
                                        <p>I am solution-oriented and outgoing. I engages up quickly and gets into better
                                            solution. New and exciting challenges amuses me a lot.
                                        </p>
                                        <ul className="about-info mt-4 px-md-0 px-2">
                                            <li className="d-flex"><span>Name:</span> <span>Sourav Thakur</span></li>
                                            <li className="d-flex"><span>Date of birth:</span> <span>July 27, 1992</span></li>
                                            <li className="d-flex"><span>Address:</span> <span>Chandigarh, INDIA</span></li>
                                            <li className="d-flex"><span>Zip code:</span> <span>160014</span></li>
                                            <li className="d-flex"><span>Email:</span> <span>souravthakur1992@gmail.com</span></li>
                                            <li className="d-flex"><span>Phone: </span> <span>+91-9501519498</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                                    <div className="text">
                                        <p className="mb-4">
                                            <span className="number" data-number="7">0</span>
                                            <span> Project completed</span>
                                        </p>
                                        <p><a href="https://drive.google.com/file/d/1aPmXz4BBYXo3Gi_yszwDxHE9QAd58alV/view" className="btn btn-primary py-3 px-3">Download CV</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-partner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm ftco-animate">
                                <a href="#" className="partner"><img src={Partner1} className="img-fluid" alt="Colorlib Template" /></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="#" className="partner"><img src={Partner2} className="img-fluid" alt="Colorlib Template" /></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="#" className="partner"><img src={Partner3} className="img-fluid" alt="Colorlib Template" /></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="#" className="partner"><img src={Partner4} className="img-fluid" alt="Colorlib Template" /></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="#" className="partner"><img src={Partner5} className="img-fluid" alt="Colorlib Template" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}