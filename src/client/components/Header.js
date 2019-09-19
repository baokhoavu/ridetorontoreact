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
						<Link to="/q1e2/">Home</Link>
					</li>
					<li>
						<Link to="/q1e2/about">About</Link>
					</li>
				</ul>
			</nav>
			<Route exact path="/q1e2/" component={Home} />
			{/*<Route exact path="/" component={Home} />*/}
			
			<Route path="/q1e2/about" component={About} />
		</Router>
	</div>

)

export default Header;