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

        // Variables
	    this.state = {
	    	
	      // Menu
	      impact: false,
	      about: false,
	      get: false,

	      // Mobile
	      mi: false,
	      ma: false,
	      mg: false,
	      mr: false,
	      mp: false,
	      mn: false,
	      mrs: false,
	      mt: false,
	      mc: false,
	      mf: false,

	      // Login Box
	      login: false,

	      // Mega Menu Timer
	      timera: null,
	      timerb: null,
	      timerc: null,

	      // Toggle Mobile
	      tM: false,

	    }

    	// Bind
    	this.toggleAOn = this.toggleAOn.bind(this)
    	this.toggleAOff = this.toggleAOff.bind(this)
    	this.toggleBOn = this.toggleBOn.bind(this)
    	this.toggleBOff = this.toggleBOff.bind(this)
    	this.toggleCOn = this.toggleCOn.bind(this)
    	this.toggleCOff = this.toggleCOff.bind(this)
    	this.toggleMobile = this.toggleMobile.bind(this)
    	this.toggleSubMenu = this.toggleSubMenu.bind(this)

	}

	// Login Box on click 
	login = (e) => {

		// Stops the href default redirect
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
  		
  		// Active Menu State
  		this.setState({ 
  			impact: true 
  		})

  		// Remove Timer On Hover
  		clearTimeout(this.state.timera)
  	}
  	toggleAOff = () => {

  		// Set Timer
  		this.state.timera = setTimeout( () => {
  			this.setState({ 
  				impact: false 
  			})
  		}, 100);
  	}

	// About Hover On/Off Mega Menu
	toggleBOn = () => {

		// Active Menu State
		this.setState({ 
			about: true 
		})

		// Remove Timer On Hover
		clearTimeout(this.state.timerb)
	}
	toggleBOff = () => {

		// Set Timer
		this.state.timerb = setTimeout( () => {
  			this.setState({ 
  				about: false 
  			})
		}, 100);
	}

	// Get Hover On/Off Mega Menu
	toggleCOn = () => {
		
		// Active Menu State
		this.setState({ 
			get: true 
		})

		// Remove Timer On Hover
		clearTimeout(this.state.timerc)
	}
	toggleCOff = () => {

		// Set Timer
		this.state.timerc = setTimeout( () => {
  			this.setState({ 
  				get: false
			 })
		}, 100);
	}

	// Toggle Mobile Menu
	toggleMobile = (e) => {
		
		// Removes redirect
		e.preventDefault();

		// Opposite value on click
		var not = this.state.tM;

		// Setting state
		this.setState({
			tM: !not
		})
	}

	// Toggle Mobile Menu Collapseable
	toggleSubMenu = (event) => {
		
		// Targets the class of what's being click
		var eachClass = event.target.className

		if ( eachClass.indexOf('imp') > -1 ) {

			// Opposite
			var not = this.state.mi

			// Set State used for menu
			this.setState({
				mi: !not,
				ma: false,
				mg: false
			})

		} else if ( eachClass.indexOf('abo') > -1 ) {
			
			// Opposite
			var not = this.state.ma

			// Set State used for menu
			this.setState({
				mi: false,
				ma: !not,
				mg: false,
				mrs: false,
				mt: false,
				mc: false,
				mf: false
			})

		} else if ( eachClass.indexOf('get') > -1 ) {
			
			// Opposite
			var not = this.state.mg

			// Set State used for menu
			this.setState({
				mi: false,
				ma: false,
				mg: !not,
				mr: false,
				mp: false,
				mn: false
			})

		} else if ( eachClass.indexOf('rid') > -1 ) {

			// Opposite
			var not = this.state.mr

			// Set State used for menu
			this.setState({
				mr: !not,
				mp: false,
				mn: false
			})

		} else if ( eachClass.indexOf('par') > -1 ) {
			
			// Opposite
			var not = this.state.mp

			// Set State used for menu
			this.setState({
				mr: false,
				mp: !not,
				mn: false
			})

		} else if ( eachClass.indexOf('new') > -1 ) {
			
			// Opposite
			var not = this.state.mn

			// Set State used for menu
			this.setState({
				mr: false,
				mp: false,
				mn: !not
			})

		} else if ( eachClass.indexOf('rds') > -1 ) {
			
			// Opposite
			var not = this.state.mrs

			// Set State used for menu
			this.setState({
				mrs: !not,
				mt: false,
				mc: false,
				mf: false
			})

		} else if ( eachClass.indexOf('tea') > -1 ) {

			// Opposite
			var not = this.state.mt

			// Set State used for menu
			this.setState({
				mrs: false,
				mt: !not,
				mc: false,
				mf: false
			})

		} else if ( eachClass.indexOf('cre') > -1 ) {
			
			// Opposite
			var not = this.state.mc

			// Set State used for menu
			this.setState({
				mrs: false,
				mt: false,
				mc: !not,
				mf: false
			})

		} else if ( eachClass.indexOf('fun') > -1 ) {
			
			// Opposite
			var not = this.state.mf

			// Set State used for menu
			this.setState({
				mrs: false,
				mt: false,
				mc: false,
				mf: !not,
			})

		}


	}

	// componentDidMount() {

	// }

	render() {
		return (
			<div >		
				<Router>

					{/* Head Div */}
					<div className="header">
						<nav className="responsive">
							<div className="row">
								<div className="col-md-2">

									{/* Toggle Open(Three Lines) / Closed(X) */}
									<button className="button">
										<span onClick={this.toggleMobile} className="responsive-menu-open">
											<span className={this.state.tM ? 'lines c' : 'lines o' }>
											</span>
										</span>
									</button>

									{/* Redirects to Home Page */}
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
												
												{/* Link to PC */}
												<div>
													<a target="_blank" href="https://secure.conquercancer.ca/site/SPageServer/?pagename=to20_pc">Participant Centre</a>
												</div>

												{/* LO Log In */}
												<div>
													<a target="_blank" href="https://secure.conquercancer.ca/site/SPageServer/?pagename=to20_login">Login</a>
												</div>
											</div>
										</li>
										<li>

											{/* Hover for Get Involved Mega Menu */}
											<a className={this.state.get ? 'over heavy' : null } onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff}>
												Get Involved
											</a>

											{/* Get Involved Mega Menu */}
											<div onMouseOver={this.toggleCOn} onMouseOut={this.toggleCOff} className={this.state.get ? 'mega-menu get active': 'mega-menu get hidden'}>		
												<div className="row">

													{/* Offset */}
													<div className="col-md-1"></div>

													{/* Rider Category */}
													<div className="col-md-2">
														<a><strong>Riders</strong></a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_fundraisers">Top fundraisers</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_ambassador">Ambassadors</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/polka-dot-jersey/">Polka dot jersey</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/gold-platinum-helmets/">5 and 10 year riders</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/rider-stories/">Riders' stories</a>
													</div>

													{/* Teams Category */}
													<div className="col-md-2">
														<a><strong>Teams</strong></a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_teams">Top teams</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/ride-as-a-team/">Ride as a team</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_industry_challenge">Industry challenge</a>
														<a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_community_challenge">Community challenge</a>
													</div>

													{/* Crew/Volunteer Category */}
													<div className="col-md-2">
														<a><strong>Crew and volunteer</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/">How you can help</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/important-info/">Important info</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/join-as-a-group/">Join as a group</a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/our-support/">Our support</a>
													</div>

													{/* Fundraising */}
													<div className="col-md-2">
														<a><strong>Fundraising</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/get-involved/fundraising/">Toolkit</a>
														<a href="https://ride.conquercancer.ca/toronto20/fundraising/refer-and-raise/">Refer and raise</a>
													</div>

													{/* Volunteer Image */}
													<div className="col-md-3 internal a">														
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_2020volunteer.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li>

											{/* Hover About */}
											<Link className={this.state.about ? 'over' : null } onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} to="https://ride.conquercancer.ca/toronto20/about/">About</Link>

											{/* About Mega Menu*/}
											<div onMouseOver={this.toggleBOn} onMouseOut={this.toggleBOff} className={this.state.about ? 'mega-menu about active': 'mega-menu about hidden'}>		
												<div className="row">
													
													{/* Offset */}
													<div className="col-md-3"></div>

													{/* Ride/Event Category */}
													<div className="col-md-2">
														<a href="#"><strong>Ride</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/about/">About the ride</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/find-your-route/">Find your route</a>
														<a href="https://ride.conquercancer.ca/toronto20/calendar-of-events/">Events Calendar</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/training-safety/">Training & Safety</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">How we support you</a>
													</div>

													{/* Partners/Sponsors/Promotions Category */}
													<div className="col-md-2">
														<a href="https://ride.conquercancer.ca/toronto20/about/partners/"><strong>Partners</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/about/partners/">Our partners</a>
														<a href="https://ride.conquercancer.ca/toronto20/about/outfitters/">Outfitters</a>
													</div>

													{/* Assets/Videos/Images Category */}
													<div className="col-md-2">
														<a href="https://ride.conquercancer.ca/toronto20/about/media/"><strong>News</strong></a>
														<a href="http://www.pmcfphotos.ca/therideto">Photos</a>
														<a href="https://ride.conquercancer.ca/toronto20/videos/">Videos</a>
													</div>

													{/* Thank You Image*/}
													<div className="col-md-3 internal b">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_2019thankyou.jpg" />
													</div>
												</div>
											</div>
										</li>
										<li className="a">
											
											{/* Impact Hover for Mega Menu */}
											<Link className={this.state.impact ? 'over' : null } onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} to="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">Impact</Link>

											{/* Impact Mega Menu*/}
											<div onMouseOver={this.toggleAOn} onMouseOut={this.toggleAOff} className={this.state.impact ? 'mega-menu impact active': 'mega-menu impact hidden'}>		
												<div className="row">

													{/* Offset */}
													<div className="col-md-3"></div>

													{/* Internal Pages */}
													<div className="col-md-3">
														<a href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/"><strong>Dollars at work</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/impact/about-cancer/"><strong>Cancer in canada</strong></a>
														<a href="https://ride.conquercancer.ca/toronto20/impact/tour-pmcc/"><strong>Tour the pmcf</strong></a>
													</div>

													{/* Internal Image */}
													<div className="col-md-3 internal c">
														<img src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/05/20007_rcto_megamenu_adcopy_conquercancer.jpg" />
													</div>
													<div className="col-md-3"></div>			
												</div>
											</div>
										</li>
										<li>

											{/* Home Button */}
											<Link to="/devReactBao/">Home</Link>
										</li>
									</ul>
								</div>
							</div>					
						</nav>
					</div>
					
					{/* Mobile Menu */}
					<div className="mobile-menu">
						<div className={'b mobile-full-menu' + ' ' + (this.state.tM ? 'ho' : 'hu')}>
							<div>

								{/* Home Button */}
								<a href="https://ride.conquercancer.ca/toronto20/">Home</a>

							</div>

							{/* Impact Menu Opens Into Links */}
							<div className="imp" onClick={this.toggleSubMenu}>
								
								{/* Impact Link */}
								<a className="imp" href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">
									Impact
								</a>

								{/* Responsive Animated Arrow */}
								<div className={"imp responsive-arrow" + " " + (this.state.mi ? "open" : null)} onClick={this.toggleSubMenu}>
									›
								</div>
								<div className={'imp col-md-12' + ' ' + (this.state.mi ? 'o' : 'c')}>

									{/* Dollars At Work WP Link */}
									<div>
										<a href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">Dollars At Work</a>
									</div>

									{/* About Cancer WP Link */}
									<div>
										<a href="https://ride.conquercancer.ca/toronto20/impact/about-cancer/">Cancer In Canada</a>
									</div>

									{/* Tour PMCC WP Link */}
									<div>
										<a href="https://ride.conquercancer.ca/toronto20/impact/tour-pmcc/">Tour the PMCC</a>
									</div>

								</div>
							</div>

							{/* About Menu Opens Into Smaller Menu's */}
							<div className="abo" onClick={this.toggleSubMenu}>

								{/* About Link */}
								<a className="abo" href="https://ride.conquercancer.ca/toronto20/about">
									About
								</a>

								{/* Responsive Animated Arrow */}
								<div className={"abo responsive-arrow" + " " + (this.state.ma ? "open" : null)} onClick={this.toggleSubMenu}>
									›
								</div>
								<div className={'abo sub col-md-12' + ' ' + (this.state.ma ? 'o' : 'c')}>

									{/* Toggle Ride Sub Plus Menu */}
									<div className={"rid" + " " + (this.state.mr ? "open" : null)} onClick={this.toggleSubMenu}>
										
										{/* Ride Sub Plus Menu Header */}
										<a className="strong">Ride</a>

										{/* Responsive Animated Arrow */}
										<div className={"rid responsive-arrow" + " " + (this.state.mr ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>

										{/* Ride Sub Plus Menu */}
										<div className={'rid sub plus col-md-12' + ' ' + (this.state.mr ? 'o' : 'c')}>

											{/* About Page WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/">About The Ride</a>
											</div>

											{/* Find Your Route WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/find-your-route/">Find Your Route</a>
											</div>

											{/* Events Calendar WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/calendar-of-events/">Events Calendar</a>
											</div>

											{/* Training and Safety WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/training-safety/">Training & Safety</a>
											</div>

											{/* How We Support You WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">How We Support You</a>
											</div>

										</div>

									</div>
									<div className={"par" + " " + (this.state.mp ? "open" : null)} onClick={this.toggleSubMenu}>
										<a href="https://ride.conquercancer.ca/toronto20/about/partners/">Partners</a>

										{/* Responsive Animated Arrow */}
										<div className={"par responsive-arrow" + " " + (this.state.mp ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>

										<div className={'par sub plus col-md-12' + ' ' + (this.state.mp ? 'o' : 'c')}>

											{/* About Page WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/">About The Ride</a>
											</div>

											{/* Find Your Route WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/find-your-route/">Find Your Route</a>
											</div>

											{/* Events Calendar WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/calendar-of-events/">Events Calendar</a>
											</div>

											{/* Training and Safety WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/training-safety/">Training & Safety</a>
											</div>

											{/* How We Support You WP Link */}
											<div>
												<a href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">How We Support You</a>
											</div>

										</div>

									</div>
									<div>
										<a href="#">News</a>

										{/* Responsive Animated Arrow */}
										<div className={"new responsive-arrow" + " " + (this.state.mn ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>

									</div>
								</div>
							</div>

							{/* Get Involved */}
							<div className="get" onClick={this.toggleSubMenu}>

								{/* Opens Up Sub Menu */}
								<a className="get" onClick={this.toggleSubMenu}>
									Get Involved
								</a>

								{/* Responsive Animated Arrow */}
								<div className={"get responsive-arrow" + " " + (this.state.mg ? "open" : null)} onClick={this.toggleSubMenu}>
									›
								</div>
								<div className={'get sub col-md-12' + ' ' + (this.state.mg ? 'o' : 'c')}>
									<div>
										<a href="#">Riders</a>

										{/* Responsive Animated Arrow */}
										<div className={"rds responsive-arrow" + " " + (this.state.mrs ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>
									</div>
									<div>
										<a href="#">Teams</a>

										{/* Responsive Animated Arrow */}
										<div className={"tea responsive-arrow" + " " + (this.state.mt ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>
									</div>
									<div>
										<a href="#">Crew and Volunteers</a>

										{/* Responsive Animated Arrow */}
										<div className={"cre responsive-arrow" + " " + (this.state.mc ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>
									</div>
									<div>
										<a href="#">Fundraising</a>

										{/* Responsive Animated Arrow */}
										<div className={"fun responsive-arrow" + " " + (this.state.mf ? "open" : null)} onClick={this.toggleSubMenu}>
											›
										</div>
									</div>
								</div>
							</div>

							{/* Get Info */}
							<div>
								<a href="#">
									Get Info
								</a>
							</div>
						</div>
					</div>
					{/*<Route exact path="/devReactBao/" component={Home} />*/}
					
					<Route exact path="/" component={Home} />
				</Router>
			</div>
		)
	}	
}