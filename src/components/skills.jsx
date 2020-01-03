import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <section className="ftco-section" id="services-section">
            <div className="container-fluid px-md-5">
                <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                  <h1 className="big big-2">Skills</h1>
                <h2 className="mb-4">Skills</h2>
               </div>
            </div>
                <div className="row">
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-analysis"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">UI-UX Integration</h3>                                  
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-flasks"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Front End Developer</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-ideas"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Web Developer</h3>
                                </div>
                            </a>
                        </div>
    
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-innovation"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">App Developing</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-ux-design"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Architecture Design</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a href="#" className="services-1 shadow">
                                <span className="icon">
                                    <i className="flaticon-idea"></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Product Strategy</h3>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
        </section>
        );
    }
}