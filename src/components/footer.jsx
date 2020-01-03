import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p>Solution-oriented and outgoing. Engages up quickly and gets into better
                                    solution. New and exciting challenges amuses me a lot.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a href="https://www.linkedin.com/in/sourav-thakur-ba242458" target="_blank"><span className="icon-linkedin"></span></a></li>
                                    <li className="ftco-animate"><a href="https://www.facebook.com/sourav.thakur.9843"><span className="icon-facebook"></span></a></li>
                                    <li className="ftco-animate"><a href="https://www.instagram.com/souravthakur1992"><span className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Skills</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Services</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>UI-UX Integration</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>App Developing</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
                                    <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Architecture Design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">C738, Jujhar Nagar, S.A.S Nagar,Punjab, India</span></li>
                                        <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 9501519498</span></a></li>
                                        <li><a href="#"><span className="icon icon-envelope"></span><span className="text">souravthakur1992@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center" style={{ fontSize: '20px' }}>
                        <p>Made with <i className="icon-heart" style={{ fontSize: '22px', color: 'red' }} aria-hidden="true"></i> Thanks <a href="https://colorlib.com" target="_blank">Colorlib </a> for Inspiration</p>
                    </div>
                </div>
            </footer>
        );
    }
}