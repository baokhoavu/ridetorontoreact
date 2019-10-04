import '../styles/Leaderboard.css';
import '../styles/Home.css';
import React, { Component } from 'react';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      // Leaderboard Accordion Tabs
      team: true,
      indi: false,
      comm: false,
      corp: false,
      
      // Leaderboard Arrays
      teams: [],
      indis: [],
      comms: [],
      corps: []
    }

    // Bind to This
    this.onChangeA = this.onChangeA.bind(this)
    this.onChangeB = this.onChangeB.bind(this)
    this.onChangeC = this.onChangeC.bind(this)
    this.onChangeD = this.onChangeD.bind(this)

  }

  // Events for Leaderboard Accordion Tabs
  onChangeA(e) {
    e.preventDefault();
    this.setState({ team: true });
    this.setState({ indi: false });
    this.setState({ comm: false });
    this.setState({ corp: false });
  }
  onChangeB(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: true });
    this.setState({ comm: false });
    this.setState({ corp: false });
  }
  onChangeC(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: false });
    this.setState({ comm: true });
    this.setState({ corp: false });
  }
  onChangeD(e) {
    e.preventDefault();
    this.setState({ team: false });
    this.setState({ indi: false });
    this.setState({ comm: false });
    this.setState({ corp: true });
  }

  componentDidMount() {

    // URL for Team
    var url = 'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json';

    // URL for Individual
    var urlb = 'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTopParticipantsData&api_key=cfrca&v=1.0&fr_id=1761&response_format=json';

    // // Team
    // fetch(url)
    //   .then( res => {
    //     return res.json();
    //   })
    //   .then( data => {

    //     // Update state of teams with array of teams
    //     this.setState({ teams: data.getTeamSearchByInfoResponse.team });
        

    //     // console.log(this.state.teams)

    //     // Sors by Most Raised and then picks top 100
    //     this.state.teams.sort((a,b) => {
    //       return b.amountRaised - a.amountRaised;
    //     }).slice(0, 100)

    //     // Empty Array for Community
    //     const comms = [];

    //     // Loop to Update Array with Community
    //     this.state.teams.map((index, value) => {
    //       if ( index.divisionName === 'Community' ) {
    //         comms.push(index)
    //       }
    //     })

    //     // Update state of comms with array of Community
    //     this.setState({ comms: comms })

    //     // Empty Array for Corporate
    //     const corps = [];

    //     // Loop to Update Array with eveyrthing not Community
    //     this.state.teams.map((index, value) => {
    //       if ( index.divisionName !== 'Community' ) {
    //         corps.push(index)
    //       }
    //     })

    //     // Update state of corps with array of Corporate
    //     this.setState({ corps: corps })
        
    //   })

    // // Individual
    // fetch(urlb)
    //   .then( res => {
    //     return res.json();
    //   })
    //   .then( data => {

    //     // Update Array with Array of Top Individuals
    //     this.setState({ indis: data.getTopParticipantsDataResponse.teamraiserData });
        
    //     // Sort by Most Raised
    //     this.state.indis.sort((a,b) => {
    //       return b.amountRaised - a.amountRaised;
    //     }).slice(0, 100)

    //     // console.log(this.state.indis)
    //   })

  }

  render() {

    return (
      <div className="c leaderboard">        
        <div className="c">

          <div>
            <h2>Fundraising Leaderboards</h2>
            <h2>Presented By RBC</h2>
          </div>

          <div>
            <div className="container-fluid leader">
              <div className={this.state.team ? 'col-md-3 active': 'col-md-3'}>
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

          <div>
            <div className="container-fluid board">

              {/* Top Teams 1 - 5 */}
              <div className={this.state.team ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.teams.map((team, index) => {
                      if ( index <= 4 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{team.name}</a>
                          <p>Members: <strong>{team.numMembers}</strong></p>
                          <p><strong>$ {parseInt(team.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              {/* Top Teams 6 - 10 */}
              <div className={this.state.team ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.teams.map((team, index) => {
                      if ( index > 4 && index < 10 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{team.name}</a>
                          <p>Members: <strong>{team.numMembers}</strong></p>
                          <p><strong>$ {parseInt(team.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              <div className={this.state.team ? 'col-md-12 active button': 'col-md-12 hidden button'}>
                  {/*<div className="padding a"></div>*/}
                  <a href="#">
                      View Full List
                  </a>
              </div>

              {/* Top Individuals 1 - 5 */}
              <div className={this.state.indi ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.indis.map((indi, index) => {
                      if ( index <= 4 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{indi.name}</a>
                          <p><strong>{indi.total}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              {/* Top Individuals 6 - 10 */}
              <div className={this.state.indi ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.indis.map((indi, index) => {
                      if ( index > 4 && index < 10 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{indi.name}</a>
                          <p><strong>{indi.total}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              <div className={this.state.indi ? 'col-md-12 active button': 'col-md-12 hidden button'}>
                  {/*<div className="padding a"></div>*/}
                  <a href="#">
                      View Full List
                  </a>
              </div>

              {/* Top Community 1 - 5 */}
              <div className={this.state.comm ? 'col-md-6 active comm': 'col-md-6 comm'}>
                  <ul>
                    {
                      this.state.comms.map((comm, index) => {
                        if ( index <= 4 ) {
                          return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{comm.name}</a>
                          <p><strong>$ {parseInt(comm.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                        }
                      })
                    }
                  </ul>
              </div>

              {/* Top Community 6 - 10 */}
              <div className={this.state.comm ? 'col-md-6 active comm': 'col-md-6 comm'}>
                  <ul>
                    {this.state.comms.map((comm, index) => {
                      if ( index > 4 && index < 10 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{comm.name}</a>
                          <p><strong>$ {parseInt(comm.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              <div className={this.state.comm ? 'col-md-12 active button': 'col-md-12 hidden button'}>
                  {/*<div className="padding a"></div>*/}
                  <a href="#">
                      View Full List
                  </a>
              </div>

            {/* Top Corporate 1 - 5 */}
              <div className={this.state.corp ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.corps.map((corp, index) => {
                      if ( index <= 4 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{corp.name}</a>
                          <p><strong>$ {parseInt(corp.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              {/* Top Corporate 6 - 10 */}
              <div className={this.state.corp ? 'col-md-6 active': 'col-md-6'}>
                  <ul>
                    {this.state.corps.map((corp, index) => {
                      if ( index > 4 && index < 10 ) {
                        return <li key={index}>
                          <span>{index}</span>
                          <a href="#">{corp.name}</a>
                          <p><strong>$ {parseInt(corp.amountRaised).toLocaleString('en')}</strong></p>
                          </li>
                      }
                    })}
                  </ul>
              </div>

              <div className={this.state.corp ? 'col-md-12 active button': 'col-md-12 hidden button'}>
                  {/*<div className="padding a"></div>*/}
                  <a href="#">
                      View Full List
                  </a>
              </div>

            </div>
          </div>

        </div>
      </div>

    );
  }
}