import React, { Component } from 'react';
import Header from './client/components/Header';
import Promo from './client/components/Promo';
import Sponsors from './client/components/Sponsors';
import Footer from './client/components/Footer';
import './client/styles/App.css';
import ReactImage from './client/react.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (
      <div>
         
        {/*<h2>{username}</h2>     */}
        <Promo />
        <Header />
        <Sponsors />
        <Footer />

      </div>
    );
  }
}

