// Imported Styles
import '../styles/Home.css';
import '../styles/Hero.css';

// Imported Components
import React, { Component } from 'react';
import Hero from '../components/Hero'
import Leaderboard from '../components/Leaderboard';
import Search from '../components/Search';

// Class Components
export default class Home extends Component {
  constructor(props) {
    super(props);

    // Variables
    this.state = {
        a: true,
        b: false,
        c: false,
        d: 0,

        t: null,
        s: ['a','b','c'],

        timer: null
    }

    // Bind This
    this.togglea = this.togglea.bind(this);
    this.toggleb = this.toggleb.bind(this);
    this.togglec = this.togglec.bind(this);

  }

  // Toggle Slide A
  togglea() {
    clearTimeout(this.state.timer)
    this.setState({ a: true })
    this.setState({ b: false })
    this.setState({ c: false })
  }

  // Toggle Slide B
  toggleb() {
    clearTimeout(this.state.timer)

    this.setState({ a: false })
    this.setState({ b: true })
    this.setState({ c: false })
  }

  // Toggle Slide C
  togglec() {
    clearTimeout(this.state.timer)
    this.setState({ a: false })
    this.setState({ b: false })
    this.setState({ c: true })
  }

  // Auto Change Slide
  changeSlide() {

    setTimeout( () => {
      
      // If Slide A
      if ( this.state.a === true ) {
        this.setState({
          a: false,
          b: true
        })

        // Auto Every 3 Repeat
        this.state.timer = setTimeout( () => {
          this.changeSlide()
        }, 3000)

      // If Slide B
      } else if ( this.state.b === true ) {
        this.setState({
          b: false,
          c: true
        })

        // Auto Every 3 Repeat
        this.timer = setTimeout( () => {
          this.changeSlide()
        }, 3000)

      // If Slide C
      } else if ( this.state.c === true ) {
        this.setState({
          c: false,
          a: true
        })

        // Auto Every 3 Repeat
        this.timer = setTimeout( () => {
          this.changeSlide()
        }, 3000)
      }

    }, 3000)


    
  }

  componentDidMount() {

    // First Slide Change after 3 seconds per code
    this.changeSlide()

  }

  render() {

    return (
      <div className="body">
        
        {/*<Hero />*/}
        <div className="hero">
          <div className="container-fluid">
            <div className="col-md-5 float fade"></div>
            <div className="col-md-5 float">
              <div>
                <p className={this.state.a ? 's' : 'h'}>Help Conquer Cancer</p>
                <p className={this.state.b ? 's' : 'h'}>2020 Ride Launch October 2</p>
                <p className={this.state.c ? 's n' : 'h'}>We Raised over $213.2 Million in 12 Years.</p>
                <div className="box">
                  <a className={this.state.a ? 's' : 'h'} href="https://secure.conquercancer.ca/site/TRR/Ride/Toronto2020/?pg=utype&amp;fr_id=1761">
                    Register Now
                  </a>
                  <a className={this.state.b ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/team-up-challenge/">
                    RSVP Today
                  </a>
                  <a className={this.state.c ? 's' : 'h'} href="https://ride.conquercancer.ca/toronto20/about/media/">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="buttons">
                <button className={this.state.a ? 'active' : 'not'} onClick={this.togglea}></button>
                <button className={this.state.b ? 'active' : 'not'} onClick={this.toggleb}></button>
                <button className={this.state.c ? 'active' : 'not'} onClick={this.togglec}></button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="img">
                <img className={this.state.a ? 'active a' : 'not'} />
                <img className={this.state.b ? 'active b' : 'not'} />
                <img className={this.state.c ? 'active c' : 'not'} />
              </div>
            </div>
          </div>
        </div>

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

        <Leaderboard />
        <Search />

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

        <div className="f">
          <div className="container-fluid partner">
            <div className="col-md-12">
              <h2>Partners</h2>
            </div>

            {/* First Row*/}
            <div className="col-md-12">
              <div className="col-md-3">
                <p>Title Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />
              </div>
              <div className="col-md-3">
                <p>Breakaway Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/06/rbc1-1.png" />
              </div>
              <div className="col-md-3">
                <p>Peloton Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />
              </div>
              <div className="col-md-3">
                <p>Official Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/04/niagaraparks_940x400.png" />
              </div>
            </div>

            {/* First Row*/}
            <div className="col-md-12">
              <div className="col-md-3">
                <p>Title Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/06/livepatrol_940x400.png" />
              </div>
              <div className="col-md-3">
                <p>Breakaway Partner</p>
                <img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/10/garneau.png" />
              </div>
              <div className="col-md-3">
                {/*<p>Peloton Partner</p>*/}
                {/*<img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2018/04/logos.png" />*/}
              </div>
              <div className="col-md-3">
                {/*<p>Official Partner</p>*/}
                {/*<img className="partners" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/04/niagaraparks_940x400.png" />*/}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}