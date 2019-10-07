// Imported Footer Styles
import '../styles/Footer.css';

// Imported SVG saved Images for Social Icon
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import youtube from "../images/youtube.svg"

// Imported Middleware
import React from 'react';

// Function based Component called Footer
const Footer = () => (
    <div className="footer">		
		<div className="container-fluid row">

			{/* First/Logo Column starting from Left to Right */}
			<div className="col-md-3 first">
				
				{/* Logo */}
				<a href="https://secure.conquercancer.ca/q1e2/">
					<img className="logo" src="https://ride.conquercancer.ca/toronto19/wp-content/uploads/2018/06/rcto_eventlogo_enbupdate_rgb.png" alt="logo" />
				</a>

				{/* Date*/}
				<p>
					[877] 699-BIKE [2453]
					JUNE 13-14, 2020
				</p>

			    {/* Address */}
				<p>
					<strong>Address:</strong>
					<br />
					110 Eglinton Ave East,
					Suite 603,
					Toronto, ON M4P 2Y1
				</p>

			    {/* Time */}
				<p>
					<strong>Hours:</strong>
					<br />
					Monday - Friday:
					9:00 a.m. - 5:30 p.m.
				</p>

			</div>

		    {/* Second/Dollars Column */}
			<div className="col-md-2">

				{/* First */}
				<p>
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/impact/dollars-at-work/">Dollars at work</a></strong></span>
					<br />
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/impact/about-cancer/">Cancer In Canada</a></strong></span>
					<br />
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/impact/tour-pmcc/">Tour the Pmcc</a></strong></span>
				</p>

				{/* Second */}
				<p>
					<span className="heavy"><strong><a>Ride</a></strong></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/">About the ride</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/find-your-route/">Find Your Route</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/calendar-of-events/">Events Calendar</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/training-safety/">Training & Safety</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">How We Support You</a></span>
				</p>

				{/*Third*/}
	            <p>
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/about/partners/">Partners</a></strong></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/partners/">Our Partners</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/about/outfitters/">Outfitters</a></span>
				</p>
	        </div>

	       {/* Third/News Column*/}
	        <div className="col-md-2">
				
	        	{/* First */}
				<p>
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/about/media/">News</a></strong></span>
					<br />
					<span className="heavy"><strong><a href="http://www.pmcfphotos.ca/therideto">Photos</a></strong></span>
					<br />
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/videos/">Videos</a></strong></span>
				</p>

				{/* Second */}
				<p>
					<span className="heavy"><strong><a>Riders</a></strong></span>
					<br />
					<span><a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_fundraisers">Top Fundraisers</a></span>
					<br />
					<span><a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_ambassador">Ambassadors</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/polka-dot-jersey/">Polka Dot Jerseys</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/gold-platinum-helmets/">5 and 10 Year Riders</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/rider-stories/">Riders' Stories</a></span>
				</p>

				{/*Third*/}
	            <p>
					<span className="heavy"><strong><a>Teams</a></strong></span>
					<br />
					<span><a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_top_teams">Top Teams</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/ride-as-a-team/">Ride As A Team</a></span>
					<br />
					<span><a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_industry_challenge">Industry Challenge</a></span>
					<br />
					<span><a href="https://secure.conquercancer.ca/site/SPageNavigator/to20_community_challenge">Community Challenge</a></span>
				</p>
			</div>

			{/* Fourth/Crew Column*/}
	        <div className="col-md-2">
	            
	        	{/* First */}
	            <p>
					<span className="heavy"><strong><a>Crew & Volunteer</a></strong></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/">How You Can Help</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/important-info/">Important Info</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/join-as-a-group/">Join As A Group</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/crew-and-volunteer/our-support/">Our Support</a></span>
				</p>

				{/* Second */}
	            <p>
					<span className="heavy"><strong><a>Fundraising</a></strong></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/get-involved/fundraising/">Toolkit</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/fundraising/refer-and-raise/">Refer and Raise</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/fundraising/peloton-bike-giveaway/">Peloton Bike Giveaway</a></span>
					<br />
					<span><a href="https://ride.conquercancer.ca/toronto20/fundraising/ultimate-camp-happy-hour/">Ultimate Camp Happy Hour</a></span>
				</p>

				{/*Third*/}
				<p>
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/faqs/">Faqs</a></strong></span>
					<br />
					<span className="heavy"><strong><a href="https://ride.conquercancer.ca/toronto20/privacy-policy/">Privacy Policy</a></strong></span>
				</p>
	        </div>
	        
	    	{/* Fifth/Social Column */}
	        <div className="col-md-3">
	        	<div className="socials row">
	        		<div className="row">
	        			<a className="foot" href="#">
			            	<img src={facebook} className="facebook" alt="facebook" />
			        	</a>
			        	<a className="foot" href="#">
			            	<img src={linkedin} className="foot linkedin" alt="linkedin" />
			        	</a>
			        	<a className="foot" href="#">
			            	<img src={instagram} className="foot instagram" alt="instagram" />
			        	</a>
			        	<a className="foot" href="#">
			            	<img src={twitter} className="foot twitter" alt="twitter" />
			        	</a>
	        		</div>
	        		<div className="row">
		        		<a className="foot" href="#">
			            	<img src={youtube} className="foot youtube" alt="youtube" />
			        	</a>
	        		</div>
	        	</div>
	        	© 2019 CauseForce, LLC. The Ride to Conquer Cancer and Princess Margaret Cancer Centre names and logos are registered trademarks of The Princess Margaret Cancer Foundation, used under license. Enbridge is a registered trademark of Enbridge, Inc., used under license.
	        </div>
		</div>
	</div>

)

export default Footer;