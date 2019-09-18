import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
	<div>		
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Route exact path="/" component={Home} />
			
			<Route path="/about" component={About} />
		</Router>
	</div>

)

export default Header;