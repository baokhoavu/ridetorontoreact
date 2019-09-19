import React, { Component } from 'react';
import Header from './components/Header';
// import './app.css';
import ReactImage from './react.png';
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
        <Header />        

      </div>
    );
  }
}

