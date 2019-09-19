import '../styles/Home.css';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: true,
      indi: false,
      comm: false,
      corp: false,
      teams: []
    }

    this.onChangeA = this.onChangeA.bind(this)
    this.onChangeB = this.onChangeB.bind(this)
    this.onChangeC = this.onChangeC.bind(this)
    this.onChangeD = this.onChangeD.bind(this)

  }

  onChangeA(e) {
    e.preventDefault();
    this.setState({ team: !this.state.team });
    this.setState({ indi: false });
    this.setState({ comm: false });
    this.setState({ corp: false });
  }
  onChangeB(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: !this.state.indi });
    this.setState({ comm: false });
    this.setState({ corp: false });
  }
  onChangeC(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: false });
    this.setState({ comm: !this.state.comm });
    this.setState({ corp: false });
  }
  onChangeD(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: false });
    this.setState({ comm: false });
    this.setState({ corp: !this.state.corp });
  }

  componentDidMount() {
    var url = 'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json';
    fetch(url)
      .then( res => {
        return res.json();
      })
      .then( data => {
        this.setState({ teams: data });
        console.log(this.state.teams);
      })
      // .then(res => res.json())
      // .then(res => console.log(res))
    //   .then(user => this.setState({ username: user.username }));
    // (user) => this.setState({ username: user.username })
    
    // this.getTeams();

  }

  getTeams() {
    jQuery.get('https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json', function(data) {
      const team = JSON.parse(data);

      const teams = team.getTeamSearchByInfoResponse.team;

      teams.sort(function (a, b) {
        return b.amountRaised - a.amountRaised;
      }).slice(0, 100)

      // console.log(teams[0])
      // console.log(teams[1])

    })        
  }


  render() {

    return (
      <div class="body">
        
        <div class="hero">
          <img />
        </div>

        <div class="row">
          <div class="container story">
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

        <div class="row">
          <div class="container half">
            <div class="col-md-6">
              <img width="550" height="230" src="https://ride.conquercancer.ca/toronto20/wp-content/uploads/2019/09/homepage_13epicyears-r1.jpg" />
            </div>
            <div class="col-md-6">
              <h2>Now in our 13th epic year</h2>
              <p>The Enbridge® Ride to Conquer Cancer® benefiting Princess Margaret Cancer Centre is an epic Ride with an epic impact.</p>
              <p>When we ride together, cancer is no match for us!</p>
              <a href="#">Register Now</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="row">
            <h2>Fundraising Leaderboards</h2>
            <h2>Presented By RBC</h2>
          </div>
          <div class="row">
            <div class="container leader">
              <div className={this.state.team ? 'col-md-3 active': 'col-md-3'}>
                <div class="col-md-6">
                  <ul>
                    
                    {/*{this.state.teams.map((team, index) => {
                      const count = 0;
                      if ( count <= 5 ) {
                        count++
                        return <li>{team.name} {team.amountRaised}</li>
                      }
                    })}*/}

                      {/*{
                        this.state.teams.map(((team, index) => 
                          <li>{`{${team.name} ${team.amountRaised}}`}</li>))
                      }*/}

                  </ul>
                </div>
                <div class="col-md-6">
                  <ul>
                    {/*<li>{this.state.teams}</li>*/}
                    <li>{this.state.teams[0]}</li>
                  </ul>
                </div>
                <a onClick={this.onChangeA} href="#">Top Teams</a>
              </div>
              <div className={this.state.indi ? 'col-md-3 active': 'col-md-3'}>
                <a onClick={this.onChangeB} href="#">Top Individuals</a>
              </div>
              <div className={this.state.comm ? 'col-md-3 active': 'col-md-3'}>
                <a onClick={this.onChangeC} href="#">Top Corporate</a>
              </div>
              <div className={this.state.corp ? 'col-md-3 active': 'col-md-3'}>
                <a onClick={this.onChangeD} href="#">Top Community</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}