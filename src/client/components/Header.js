import React, { Component } from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import Megamenu from './Megamenu';
import {connect} from 'react-redux';

import '../styles/Header.css';
import '../styles/Megamenu.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      
	      impact: false,
	      about: false,
	      get: false,
	      
	      timera: null,
	      timerb: null,
	      timerc: null

	    }

    	// Bind
    	this.toggleAOn = this.toggleAOn.bind(this)
    	this.toggleAOff = this.toggleAOff.bind(this)
    	this.toggleBOn = this.toggleBOn.bind(this)
    	this.toggleBOff = this.toggleBOff.bind(this)
    	this.toggleCOn = this.toggleCOn.bind(this)
    	this.toggleCOff = this.toggleCOff.bind(this)


	}

	// componentDidMount = () => {

	// }


	// Impact Hover On/Off Mega Menu
  	toggleAOn = () => {
  		this.setState({ impact: true })
  		clearTimeout(this.state.timera)
  	}
  	toggleAOff = () => {
  		this.state.timera = setTimeout( () => {
  			this.setState({ impact: false })
  			// this.setState({ about: false })
  			// this.setState({ get: false })
  		}, 100);
  	}

	// About Hover On/Off Mega Menu
	toggleBOn = () => {
		this.setState({ about: true })
		clearTimeout(this.state.timerb)
	}
	toggleBOff = () => {
		this.state.timerb = setTimeout( () => {
			// this.setState({ impact: false })
  			this.setState({ about: false })
  			// this.setState({ get: false })
		}, 100);
	}

	// Get Hover On/Off Mega Menu
	toggleCOn = () => {
		this.setState({ get: true })
		clearTimeout(this.state.timerc)
	}
	toggleCOff = () => {
		this.state.timerc = setTimeout( () => {
			// this.setState({ impact: false })
  			// this.setState({ about: false })
  			this.setState({ get: false })
		}, 100);
	}



	render() {
		return (
			<div >		
				<Router>
					<div class="header">
						<nav>
							<div class="row">
								<div class="col-md-2">
									<a href="#">
										<img class="logo" src="https://ride.conquercancer.ca/toronto19/wp-content/uploads/2018/06/rcto_eventlogo_enbupdate_rgb.png" />
									</a>
								</div>
								<div class="col-md-4 date">
									<p>
										June 13 - 14, 2020
									</p>
								</div>
								<div class="col-md-6">
									<ul class="horizontal">
										<li>
											<Link to="/q1e2/si">Sign In</Link>
										</li>
										<li>
											<Link className={this.state.get ? 'over' : null } onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff} to="/q1e2/gi">Get Involved</Link>

											{/* Impact Mega Menu*/}
											<div onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff} className={this.state.get ? 'mega-menu get active': 'mega-menu get hidden'}>		
												<div class="row">
													<div class="col-md-1"></div>
													<div class="col-md-2">
														<a href="#"><strong>Riders</strong></a>
														<a href="#">Top fundraisers</a>
														<a href="#">Ambassadors</a>
														<a href="#">Polka dot jersey</a>
														<a href="#">5 and 10 year riders</a>
														<a href="#">Riders' stories</a>
													</div>
													<div class="col-md-2">
														<a href="#"><strong>Teams</strong></a>
														<a href="#">Top teams</a>
														<a href="#">Ride as a team</a>
														<a href="#">Industry challenge</a>
														<a href="#">Community challenge</a>
													</div>
													<div class="col-md-2">
														<a href="#"><strong>Crew and volunteer</strong></a>
														<a href="#">How you can help</a>
														<a href="#">Important info</a>
														<a href="#">Join as a group</a>
														<a href="#">Our support</a>
													</div>
													<div class="col-md-2">
														<a href="#"><strong>Fundraising</strong></a>
														<a href="#">Toolkit</a>
														<a href="#">Refer and raise</a>
														<a href="#">Workplace giving</a>
													</div>
													<div class="col-md-3 internal a">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li>
											{/* About Link */}
											<Link className={this.state.about ? 'over' : null } onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} to="/q1e2/about">About</Link>

											{/* About Mega Menu*/}
											<div onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} className={this.state.about ? 'mega-menu about active': 'mega-menu about hidden'}>		
												<div class="row">
													<div class="col-md-3"></div>
													<div class="col-md-2">
														<a href="#"><strong>Ride</strong></a>
														<a href="#">About the ride</a>
														<a href="#">Find your route</a>
														<a href="#">Events Calendar</a>
														<a href="#">Training & Safety</a>
														<a href="#">How we support you</a>
													</div>
													<div class="col-md-2">
														<a href="#"><strong>Partners</strong></a>
														<a href="#">Our partners</a>
														<a href="#">Outfitters</a>
													</div>
													<div class="col-md-2">
														<a href="#"><strong>News</strong></a>
														<a href="#">Photos</a>
														<a href="#">Videos</a>
													</div>
													<div class="col-md-3 internal b">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li class="a">
											{/* Impact Link */}
											<Link className={this.state.impact ? 'over' : null } onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} to="/q1e2/impact">Impact</Link>

											{/* Impact Mega Menu*/}
											<div onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} className={this.state.impact ? 'mega-menu impact active': 'mega-menu impact hidden'}>		
												<div class="row">
													<div class="col-md-3"></div>
													<div class="col-md-3">
														<a href="#"><strong>Dollars at work</strong></a>
														<a href="#"><strong>Cancer in canada</strong></a>
														<a href="#"><strong>Tour the pmcf</strong></a>
													</div>
													<div class="col-md-3 internal c">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" />
													</div>
													<div class="col-md-3"></div>			
												</div>
											</div>
										</li>
										<li>
											<Link to="/q1e2/">Home</Link>
										</li>
									</ul>
								</div>
							</div>					
						</nav>
					</div>
					{/*<Route exact path="/q1e2/" component={Home} />
					<Route path="/q1e2/about" component={About} />*/}
					
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</Router>
			</div>
		)
	}	
}