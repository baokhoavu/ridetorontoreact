// Header

// Imported Styles and Middleware
import React, { Component } from 'react';
import '../styles/Megamenu.css';

// Class Component declared as Header
export default class Header extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      
	      impact: false

	    }

    	// Bind to This
    	this.toggle = this.toggle.bind(this)

	}

  	toggle() {
  		const a = this.state.impact

  		this.setState({ impact: !a })
  		console.log(this.state.impact)
  	}

	render() {
		return (
			<div className={this.state.impact ? 'mega-menu active': 'mega-menu hidden'} onMouseOut={this.toggle}>		
				<div className="impact">
					<div className="col-md-3"></div>
					<div className="col-md-3">
						<a href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">Dollars at work</a>
						<a href="https://ride.conquercancer.ca/toronto20/impact/about-cancer/">Cancer in canada</a>
						<a href="https://ride.conquercancer.ca/toronto20/impact/tour-pmcc/">Tour the pmcf</a>
					</div>
					<div className="col-md-3 internal">
						<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" alt="ride" />
					</div>
					<div className="col-md-3"></div>			
				</div>
			</div>
		)
	}

}
