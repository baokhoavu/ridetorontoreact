// Imported Styles
import '../styles/Home.css';

// Imported Components
import React, { Component } from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Partners from '../components/Partners';
import Leaderboard from '../components/Leaderboard';
import Search from '../components/Search';

const Home = () => (
    <div className="body">
        
        {/* Hero Component */}
        <Hero />

        {/* Story Component */}
        <Story />

        {/* First 50/50 Row */}
        <div className="b">
            <div className="container-fluid half">
                <div className="col-md-6">
                    <img width="550" height="230" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/09/homepage_13epicyears-r1.jpg" />
                </div>
                <div className="col-md-6">
                    <h2>Now in our 13<sup>th</sup> epic year</h2>
                    <p>The Enbridge® Ride to Conquer Cancer® benefiting Princess Margaret Cancer Centre is an epic Ride with an epic impact.</p>
                    <p>When we ride together, cancer is no match for us!</p>
                    <a target="_blank" href="https://secure.conquercancer.ca/site/TRR/Ride/Toronto2020/?pg=utype&fr_id=1761">Register Now</a>
                </div>
            </div>
        </div>

        {/* Leaderboard Component */}
        <Leaderboard />

        {/* Search Component */}
        <Search />

        {/* Second 50/50 Row */}
        <div className="e">
            <div className="container-fluid half">
                <div className="col-md-6">
                    <h2>Together, Here's what we've accomplished</h2>
                    <ul>
                        <li>We have raised over $213.2 million</li>
                        <li>Over 12 years strong</li>
                        <li>Canada's largest cycling fundraiser</li>
                        <li>Supported Personalized Cancer Medicine, including research, treatment advances, education, and new standards of care</li>
                        <li>The Princess Margaret is one of the Top Five Cancer Research Centres in the World</li>
                    </ul>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-md-6">
                    <img width="644" height="355" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/homepage_what_weve_accomplished.jpg" />
                </div>
            </div>
        </div>

        {/* Sponsors */}
        <Partners />
        
    </div>
)

export default Home;