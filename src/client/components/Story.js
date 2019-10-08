// Story

// Imported Styles
import '../styles/Home.css';

// Imported Components
import React, { Component } from 'react';

// Function Component declared as Story
const Story = () => (
	<div className="a">
		<div className="container-fluid story">
	        <div className="col-md-3">
				<img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-1.png" />
				<h6>Why We Ride</h6>
				<p>Learn more about The Ride and how to make this epic experience your own.</p>
				<a target="_blank" href="https://ride.conquercancer.ca/toronto20/about/">Learn More</a>
	        </div>
	        <div className="col-md-3">
				<img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-2.png" />
				<h6>How We Support You</h6>
				<p>We’re here to help all year. Need help training, fundraising, or learning about the amenities on event?</p>
				<a target="_blank" href="https://ride.conquercancer.ca/toronto20/about/how-we-support-you/">Learn More</a>
	        </div>
	        <div className="col-md-3">
				<img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-3.png" />
				<h6>Routes For All Abilities</h6>
				<p>The Ride is a community of like-minded people who ride at their own pace, on routes that suit their ability.</p>
				<a target="_blank" href="https://ride.conquercancer.ca/toronto20/about/find-your-route">Learn More</a>
	        </div>
	        <div className="col-md-3">
				<img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-4.png" />
				<h6>Fundraising Resources</h6>
				<p>New to The Ride or Peer-to-Peer Fundraising? We can help.</p>
				<a target="_blank" href="https://ride.conquercancer.ca/toronto20/get-involved/fundraising/">Learn More</a>
	        </div>
		</div>
	</div>
)


export default Story;