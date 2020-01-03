import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <section className="ftco-section" id="blog-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <h1 className="big big-2">Blog</h1>
                  <h2 className="mb-4">My Blog</h2>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-md-4 d-flex ftco-animate">
                    <div className="blog-entry justify-content-end">
                    <a href="#" className="block-20" style={{ backgroundImage: 'url(images/image_1.jpg)'}}>
                    </a>
                    <div className="text mt-3 float-right d-block">
                      <h3 className="heading"><a href="#">Coming Soon.............................................</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                    <div className="blog-entry justify-content-end">
                    <a href="#" className="block-20" style={{ backgroundImage: 'url(images/image_2.jpg)'}}>
                    </a>
                    <div className="text mt-3 float-right d-block">
                      <h3 className="heading"><a href="#">Coming Soon.............................................</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                    <div className="blog-entry">
                    <a href="#" className="block-20" style={{ backgroundImage: 'url(images/image_3.jpg)'}}>
                    </a>
                    <div className="text mt-3 float-right d-block">
                      <h3 className="heading"><a href="#">Coming Soon.............................................</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}