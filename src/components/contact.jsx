import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h1 className="big big-2">Contact</h1>
                            <h2 className="mb-4">Contact Me</h2>
                        </div>
                    </div>
                    <div className="row d-flex contact-info mb-5">
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-map-signs"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Address</h3>
                                    <p>Chandigarh, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-phone2"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Contact Number</h3>
                                    <p><a href="tel://+919501519498">+91 9501519498</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-paper-plane"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Email Address</h3>
                                    <p><a href="mailto:souravthakur1992@gmail.com">souravthakur1992@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                        <div className="align-self-stretch box text-center p-4 shadow">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-globe"></span>
                            </div>
                            <div>
                                <h3 className="mb-4">Website</h3>
                                <p><a href="#">yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                    </div>                 

                    <div className="row no-gutters block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-light p-4 p-md-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="img" style={{ backgroundImage: 'url(images/photo.jpg)' }}></div>
                        </div>
                    </div>

                </div>
            </section >
        );
    }
}