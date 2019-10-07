// Imported Components and built in React/library functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
// import About from '../pages/About';
// import Megamenu from './Megamenu';
// import { connect } from 'react-redux';

// Styles
import '../styles/Header.css';
import '../styles/Megamenu.css';


// Creating the 'Header' Class/Component
export default class Header extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      
	      // Variables
	      impact: false,
	      about: false,
	      get: false,
	      login: false,
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

	// Login Box on click 
	login = (e) => {

		// Stops the href
		e.preventDefault()

		// Display/Hide state
		const on = this.state.login

		// Changes the state on click
		this.setState({
			login: !on
		})
	}


	// Impact Hover On/Off Mega Menu
  	toggleAOn = () => {
  		this.setState({ impact: true })
  		clearTimeout(this.state.timera)
  	}
  	toggleAOff = () => {
  		this.state.timera = setTimeout( () => {
  			this.setState({ impact: false })
  		}, 100);
  	}

	// About Hover On/Off Mega Menu
	toggleBOn = () => {
		this.setState({ about: true })
		clearTimeout(this.state.timerb)
	}
	toggleBOff = () => {
		this.state.timerb = setTimeout( () => {
  			this.setState({ about: false })
		}, 100);
	}

	// Get Hover On/Off Mega Menu
	toggleCOn = () => {
		this.setState({ get: true })
		clearTimeout(this.state.timerc)
	}
	toggleCOff = () => {
		this.state.timerc = setTimeout( () => {
  			this.setState({ get: false })
		}, 100);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div >		
				<Router>
					<div className="header">
						<nav>
							<div className="row">
								<div className="col-md-2">
									<a href="https://secure.conquercancer.ca/devReactBao">

										{/* Logo */}
										<img className="logo" src="https://ride.conquercancer.ca/toronto19/wp-content/uploads/2018/06/rcto_eventlogo_enbupdate_rgb.png" alt="image" />
									</a>
								</div>

								{/* Date */}
								<div className="col-md-4 date">
									<p>
										June 13 - 14, 2020
									</p>
								</div>

								{/* Menu */}
								<div className="col-md-6">
									<ul className="horizontal">
										<li>
											
											{/* Login Text Clickable */}
											<a className="heavy" onClick={this.login}>
												Sign In
											</a>

											{/* Login Box */}
											<div className={this.state.login ? 'loginShow col-md-4 right' : 'hidden' }>
												<div>
													<a target="_blank" href="https://secure.conquercancer.ca/site/SPageServer/?pagename=to20_pc">Participant Centre</a>
												</div>
												<div>
													<a target="_blank" href="https://secure.conquercancer.ca/site/SPageServer/?pagename=to20_login">Login</a>
												</div>
											</div>
										</li>
										<li>
											{/*<Link className={this.state.get ? 'over' : null } onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff} to="/q1e2/gi">Get Involved</Link>*/}

											<a className={this.state.get ? 'over heavy' : null } onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff}>
												Get Involved
											</a>

											{/* Get Involved Mega Menu*/}
											<div onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff} className={this.state.get ? 'mega-menu get active': 'mega-menu get hidden'}>		
												<div className="row">
													<div className="col-md-1"></div>
													<div className="col-md-2">
														<a><strong>Riders</strong></a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_fundraisers">Top fundraisers</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_ambassador">Ambassadors</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/polka-dot-jersey/">Polka dot jersey</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/gold-platinum-helmets/">5 and 10 year riders</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/rider-stories/">Riders' stories</a>
													</div>
													<div className="col-md-2">
														<a><strong>Teams</strong></a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_teams">Top teams</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/ride-as-a-team/">Ride as a team</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_industry_challenge">Industry challenge</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_community_challenge">Community challenge</a>
													</div>
													<div className="col-md-2">
														<a><strong>Crew and volunteer</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/">How you can help</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/important-info/">Important info</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/join-as-a-group/">Join as a group</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/our-support/">Our support</a>
													</div>
													<div className="col-md-2">
														<a><strong>Fundraising</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/fundraising/">Toolkit</a>
														<a href="https://ride.conquercancer.ca/toronto20/fundraising/refer-and-raise/">Refer and raise</a>
													</div>
													<div className="col-md-3 internal a">														
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_2020volunteer.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li>
											{/* About Link */}
											<Link className={this.state.about ? 'over' : null } onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} to="https://ride.conquercancer.ca/toronto20/about/">About</Link>

											{/* About Mega Menu*/}
											<div onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} className={this.state.about ? 'mega-menu about active': 'mega-menu about hidden'}>		
												<div className="row">
													<div className="col-md-3"></div>
													<div className="col-md-2">
														<a href="#"><strong>Ride</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/about/">About the ride</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/find-your-route/">Find your route</a>
														<a href="https://ride.conquercancer.ca/toronto20/calendar-of-events/">Events Calendar</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/training-safety/">Training & Safety</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">How we support you</a>
													</div>
													<div className="col-md-2">
														<a href="https://ride.conquercancer.ca/toronto20/about/partners/"><strong>Partners</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/about/partners/">Our partners</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/outfitters/">Outfitters</a>
													</div>
													<div className="col-md-2">
														<a href="https://ride.conquercancer.ca/toronto20/about/media/"><strong>News</strong></a>
														<a href="http://www.pmcfphotos.ca/therideto">Photos</a>
														<a href="https://ride.conquercancer.ca/toronto20/videos/">Videos</a>
													</div>
													<div className="col-md-3 internal b">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_2019thankyou.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li className="a">
											{/* Impact Link */}
											<Link className={this.state.impact ? 'over' : null } onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} to="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">Impact</Link>

											{/* Impact Mega Menu*/}
											<div onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} className={this.state.impact ? 'mega-menu impact active': 'mega-menu impact hidden'}>		
												<div className="row">
													<div className="col-md-3"></div>
													<div className="col-md-3">
														<a href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/"><strong>Dollars at work</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/impact/about-cancer/"><strong>Cancer in canada</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/impact/tour-pmcc/"><strong>Tour the pmcf</strong></a>
													</div>
													<div className="col-md-3 internal c">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" />
													</div>
													<div className="col-md-3"></div>			
												</div>
											</div>
										</li>
										<li>
											<Link to="/devReactBao/">Home</Link>
										</li>
									</ul>
								</div>
							</div>					
						</nav>
					</div>
					<Route exact path="/devReactBao/" component={Home} />
					
					{/*<Route exact path="/" component={Home} />*/}
				</Router>
			</div>
		)
	}	
}