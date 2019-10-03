import '../styles/Footer.css';

import React, { Component } from 'react';

const Footer = () => (
	<div class="footer">		
		<div class="container-fluid">
			<div class="col-md-3 first">
				
				<a href="#">
					<img class="logo" src="https://ride.conquercancer.ca/toronto19/wp-content/uploads/2018/06/rcto_eventlogo_enbupdate_rgb.png" />
				</a>

				<p>
					[877] 699-BIKE [2453]
					JUNE 13-14, 2020
				</p>

				<p>
					<strong>Address:</strong>
					<br />
					110 Eglinton Ave East,
					Suite 603,
					Toronto, ON M4P 2Y1
				</p>

				<p>
					<strong>Hours:</strong>
					<br />
					Monday - Friday:
					9:00 a.m. - 5:30 p.m.
				</p>

			</div>
			<div class="col-md-2">
				<p>
					<span><a href="#"><strong>Dollars At Work</strong></a></span>
					<br />
					<span><a href="#"><strong>Cancer In Canada</strong></a></span>
					<br />
					<span><a href="#"><strong>Tour the Pmcc</strong></a></span>
				</p>
				<p>
					<span><a href="#"><strong>Ride</strong></a></span>
					<br />
					<span><a href="#">About the ride</a></span>
					<br />
					<span><a href="#">Find Your Route</a></span>
					<br />
					<span><a href="#">Events Calendar</a></span>
					<br />
					<span><a href="#">Training & Safety</a></span>
					<br />
					<span><a href="#">How We Support You</a></span>
				</p>
	            <p>
					<span><a href="#"><strong>Partners</strong></a></span>
					<br />
					<span><a href="#">Our Partners</a></span>
					<br />
					<span><a href="#">Outfitters</a></span>
				</p>
	        </div>
	        <div class="col-md-2">
			
			</div>
	        <div class="col-md-2">
	            {/*<img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/06/livepatrol_940x400.png" />*/}
	        </div>
	        <div class="col-md-3">
	        
	        </div>
		</div>
	</div>

)

export default Footer;