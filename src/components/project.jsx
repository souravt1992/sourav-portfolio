import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container-fluid px-md-0">
    		<div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Projects Accomplished</h2>           
          </div>
        </div>
    		<div className="row no-gutters">
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-1.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="https://d.soderbergpartners.no/" target="_blank">D ( Söderberg & Partners)</a></h3>
	    					<span>Front End Developer</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-2.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="http://lexin.udir.no/" target="_blank">LEXIN</a></h3>
	    					<span>Full Stack Developer</span>
	    				</div>
    				</div>
  				</div>

    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-3.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="https://editorportal.oslomet.no/">LEXIN EDITOR PORTAL</a></h3>
	    					<span>Full Stack Developer</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-4.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">L Sound</a></h3>
	    					<span>Front End Developer</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-5.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Monthly Reporting</a></h3>
	    					<span>Full Stack Developer</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/work-6.jpg)'}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Small Bespoke</a></h3>
	    					<span>Software Developer</span>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
        );
    }
}