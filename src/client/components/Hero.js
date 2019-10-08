import  React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/Hero.css';

// Hero Class Component
export default class Hero extends Component {
	
	// Variables
	constructor(props) {
		super(props)
		
		this.state = {
			a: true,
			b: false,
	        c: false,
	        d: 0,
	        t: null,
	        s: ['a','b','c'],
	        timer: null
		}
		
	    // Bind This
	    this.togglea = this.togglea.bind(this);
	    this.toggleb = this.toggleb.bind(this);
	    this.togglec = this.togglec.bind(this);
	}

	// Toggle Slide A
	togglea() {
	clearTimeout(this.state.timer)
	this.setState({ a: true })
	this.setState({ b: false })
	this.setState({ c: false })
	}

	// Toggle Slide B
	toggleb() {
	clearTimeout(this.state.timer)
	this.setState({ a: false })
	this.setState({ b: true })
	this.setState({ c: false })
	}

	// Toggle Slide C
	togglec() {
	clearTimeout(this.state.timer)
	this.setState({ a: false })
	this.setState({ b: false })
	this.setState({ c: true })
	}

	// Auto Change Slide
	changeSlide() {

	setTimeout( () => {
	  
	  // If Slide A
	  if ( this.state.a === true ) {
	    this.setState({
	      a: false,
	      b: true
	    })

	    // Auto Every 3 Repeat
	    this.state.timer = setTimeout( () => {
	      this.changeSlide()
	    }, 3000)

	  // If Slide B
	  } else if ( this.state.b === true ) {
	    this.setState({
	      b: false,
	      c: true
	    })

	    // Auto Every 3 Repeat
	    this.timer = setTimeout( () => {
	      this.changeSlide()
	    }, 3000)

	  // If Slide C
	  } else if ( this.state.c === true ) {
	    this.setState({
	      c: false,
	      a: true
	    })

	    // Auto Every 3 Repeat
	    this.timer = setTimeout( () => {
	      this.changeSlide()
	    }, 3000)
	  }
	}, 3000)
	}

	componentDidMount() {

	// First Slide Change after 3 seconds per code
	this.changeSlide()

	}

	render() {
		return (
			<div className="hero">
			  <div className="container-fluid">
			    <div className="col-md-5 float fade"></div>
			    <div className="col-md-5 float">
			      <div>
			        <p className={this.state.a ? 's' : 'h'}>Help Conquer Cancer</p>
			        <p className={this.state.b ? 's' : 'h'}>2020 Ride Launch October 2</p>
			        <p className={this.state.c ? 's n' : 'h'}>We Raised over $213.2 Million in 12 Years.</p>
			        <div className="box">
			          <a className={this.state.a ? 's' : 'h'} href="https://secure.conquercancer.ca/site/TRR/Ride/Toronto2020/?pg=utype&amp;fr_id=1761">
			            Register Now
			          </a>
			          <a className={this.state.b ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/team-up-challenge/">
			            RSVP Today
			          </a>
			          <a className={this.state.c ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/about/media/">
			            Learn More
			          </a>
			        </div>
			      </div>
			      <div className="buttons">
			        <button className={this.state.a ? 'active' : 'not'} onClick={this.togglea}></button>
			        <button className={this.state.b ? 'active' : 'not'} onClick={this.toggleb}></button>
			        <button className={this.state.c ? 'active' : 'not'} onClick={this.togglec}></button>
			      </div>
			    </div>
			    <div className="col-md-12">
			      <div className="img">
			        <img className={this.state.a ? 'active a' : 'not'} />
			        <img className={this.state.b ? 'active b' : 'not'} />
			        <img className={this.state.c ? 'active c' : 'not'} />
			      </div>
			    </div>
			  </div>
			</div>
		)
	}

}

// const Hero = () => (
// 	<div className="hero">
// 	  <div className="container-fluid">
// 	    <div className="col-md-5 float fade"></div>
// 	    <div className="col-md-5 float">
// 	      <div>
// 	        <p className={this.state.a ? 's' : 'h'}>Help Conquer Cancer</p>
// 	        <p className={this.state.b ? 's' : 'h'}>2020 Ride Launch October 2</p>
// 	        <p className={this.state.c ? 's n' : 'h'}>We Raised over $213.2 Million in 12 Years.</p>
// 	        <div className="box">
// 	          <a className={this.state.a ? 's' : 'h'} href="https://secure.conquercancer.ca/site/TRR/Ride/Toronto2020/?pg=utype&amp;fr_id=1761">
// 	            Register Now
// 	          </a>
// 	          <a className={this.state.b ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/team-up-challenge/">
// 	            RSVP Today
// 	          </a>
// 	          <a className={this.state.c ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/about/media/">
// 	            Learn More
// 	          </a>
// 	        </div>
// 	      </div>
// 	      <div className="buttons">
// 	        <button className={this.state.a ? 'active' : 'not'} onClick={this.togglea}></button>
// 	        <button className={this.state.b ? 'active' : 'not'} onClick={this.toggleb}></button>
// 	        <button className={this.state.c ? 'active' : 'not'} onClick={this.togglec}></button>
// 	      </div>
// 	    </div>
// 	    <div className="col-md-12">
// 	      <div className="img">
// 	        <img className={this.state.a ? 'active a' : 'not'} />
// 	        <img className={this.state.b ? 'active b' : 'not'} />
// 	        <img className={this.state.c ? 'active c' : 'not'} />
// 	      </div>
// 	    </div>
// 	  </div>
// 	</div>

// )

// export default Hero;