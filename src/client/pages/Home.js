// import '../../app.css'
import '../styles/Home.css';
import '../styles/Hero.css';
import React, { Component } from 'react';
import Hero from '../components/Hero'
import Leaderboard from '../components/Leaderboard';
import Search from '../components/Search';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        a: true,
        b: false,
        c: false,

        t: null,
        s: ['a','b','c']
    }

    this.togglea = this.togglea.bind(this);
    this.toggleb = this.toggleb.bind(this);
    this.togglec = this.togglec.bind(this);

  }

  togglea() {
    this.setState({ a: true })
    this.setState({ b: false })
    this.setState({ c: false })
  }

  toggleb() {
    this.setState({ a: false })
    this.setState({ b: true })
    this.setState({ c: false })
  }

  togglec() {
    this.setState({ a: false })
    this.setState({ b: false })
    this.setState({ c: true })
  }

  componentDidMount() {
    this.state.t = setTimeout( () => {

    }, 3000);
  }

  render() {

    return (
      <div class="body">
        
        {/*<Hero />*/}
        <div class="hero">
          <div class="container-fluid">
            <div class="col-md-3 float fade"></div>
            <div class="col-md-3 float">
              <div>
                <p className={this.state.a ? 's' : 'h'}>Help Conquer Cancer</p>
                <p className={this.state.b ? 's' : 'h'}>2020 Ride Launch October 2</p>
                <p className={this.state.c ? 's n' : 'h'}>We Raised over $213.2 Million in 12 Years.</p>
                <div class="box">
                  <a className={this.state.a ? 's' : 'h'} href="#">Register Now</a>
                  <a className={this.state.b ? 's' : 'h'} href="#">RSVP Today</a>
                  <a className={this.state.c ? 's' : 'h'} href="#">Learn More</a>
                </div>
              </div>
              <div class="buttons">
                <button className={this.state.a ? 'active' : 'not'} onClick={this.togglea}></button>
                <button className={this.state.b ? 'active' : 'not'} onClick={this.toggleb}></button>
                <button className={this.state.c ? 'active' : 'not'} onClick={this.togglec}></button>
              </div>
            </div>
            <div class="col-md-12">
              <div class="img">
                <img className={this.state.a ? 'active a' : 'not'} />
                <img className={this.state.b ? 'active b' : 'not'} />
                <img className={this.state.c ? 'active c' : 'not'} />
              </div>
            </div>
          </div>
        </div>

        <div class="a">
          <div class="container-fluid story">
            <div class="col-md-3">
              <img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-1.png" />
              <h6>Why We Ride</h6>
              <p>Learn more about The Ride and how to make this epic experience your own.</p>
              <a href="#">Learn More</a>
            </div>
            <div class="col-md-3">
              <img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-1.png" />
              <h6>Why We Ride</h6>
              <p>Learn more about The Ride and how to make this epic experience your own.</p>
              <a href="#">Learn More</a>
            </div>
            <div class="col-md-3">
              <img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-1.png" />
              <h6>Why We Ride</h6>
              <p>Learn more about The Ride and how to make this epic experience your own.</p>
              <a href="#">Learn More</a>
            </div>
            <div class="col-md-3">
              <img height="142" width="142" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/icon-1.png" />
              <h6>Why We Ride</h6>
              <p>Learn more about The Ride and how to make this epic experience your own.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>

        <div class="b">
          <div class="container-fluid half">
            <div class="col-md-6">
              <img width="550" height="230" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/09/homepage_13epicyears-r1.jpg" />
            </div>
            <div class="col-md-6">
              <h2>Now in our 13<sup>th</sup> epic year</h2>
              <p>The Enbridge® Ride to Conquer Cancer® benefiting Princess Margaret Cancer Centre is an epic Ride with an epic impact.</p>
              <p>When we ride together, cancer is no match for us!</p>
              <a href="#">Register Now</a>
            </div>
          </div>
        </div>

        <Leaderboard />
        <Search />

        <div class="e">
          <div class="container-fluid half">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <img width="644" height="355" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/08/homepage_what_weve_accomplished.jpg" />
            </div>
          </div>
        </div>

        <div class="f">
          <div class="container-fluid partner">
            <div class="col-md-12">
              <h2>Partners</h2>
            </div>

            {/* First Row*/}
            <div class="col-md-12">
              <div class="col-md-3">
                <p>Title Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />
              </div>
              <div class="col-md-3">
                <p>Breakaway Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/06/rbc1-1.png" />
              </div>
              <div class="col-md-3">
                <p>Peloton Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />
              </div>
              <div class="col-md-3">
                <p>Official Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/04/niagaraparks_940x400.png" />
              </div>
            </div>

            {/* First Row*/}
            <div class="col-md-12">
              <div class="col-md-3">
                <p>Title Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/06/livepatrol_940x400.png" />
              </div>
              <div class="col-md-3">
                <p>Breakaway Partner</p>
                <img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/10/garneau.png" />
              </div>
              <div class="col-md-3">
                {/*<p>Peloton Partner</p>*/}
                {/*<img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />*/}
              </div>
              <div class="col-md-3">
                {/*<p>Official Partner</p>*/}
                {/*<img class="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/04/niagaraparks_940x400.png" />*/}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}