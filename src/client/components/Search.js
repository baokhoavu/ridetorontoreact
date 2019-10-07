// Imported Styles and Middleware
import '../styles/Search.css';
import React, { Component } from 'react';

// Class based Component
export default class Home extends Component {
  constructor(props) {
    super(props);

    // State Variable
    this.state = {
        a: [],
        b: [],
        tlist: [],
        plist: [],
        keys: 0,
        searchVal: '',
    }

    // Bind Event
    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  // Save Input Value
  handleKeyUp(e) {

    // Bind to State Variable
    this.setState({ searchVal: e.target.value });

    setTimeout( () => {

      // Array for JSON
      const peopleList = [];
      const teamList = [];

      // Search Input at least 3 characters
      if (this.state.searchVal.length > 2) {

        // Map through All Participants
        this.state.a.map((v, i) => {
          if (v.name.last.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1) {
             peopleList.push(v)
          } else if (v.name.first.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1) {
             peopleList.push(v)
          }
        })

        // Map through All Teams
        this.state.b.map((v, i) => {
          if ( v.name.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1 ) {
            teamList.push(v)
            console.log(v)
          }
        })
        
        // Change state to array filtered from API
        this.setState({ tlist: teamList })
        this.setState({ plist: peopleList })
        
      }
    },1000)
  }

  componentDidMount() {
	 
    // Participants API
    const urlp = 
      'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getParticipants&api_key=cfrca&v=1.0&fr_id=1761&full_search=TRUE&first_name=%25%25%25&last_name=%25%25%25&response_format=json&list_page_size=500&list_page_offset=';
    
    // Team API
    const urlt = 
      'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json';

    // Array for People
	  const people = [];
	
    // Data to map array from JSON into local Array
    const add = (data => {
      const a = data.getParticipantsResponse.participant;
      a.map((val, index) => {
        people.push(val)
      })
      this.setState({
        a: people
      })
    })

    // Loop through JSON for available data and then map to push into local Array
  	for (var i = 1; i < 7; i++) {
  		fetch(urlp + i)
			.then(res => {
      	return res.json().then(data => {
			    add(data)
        })
    	})
  	}

    // Fetch Data for Team API
    fetch(urlt)
    .then(res => {
      return res.json().then(data => {
        this.setState({
          b: data.getTeamSearchByInfoResponse.team
        })
      })
    })
  }

  render() {

    return (
      <div className="d search">
      	<div className="container-fluid">
	        <div className="col-md-9">

            {/* When Value Changes */}
	          <input placeholder="Enter a team or Rider here" onChange={this.handleKeyUp} type="text" />
	        </div>
	        <div className="col-md-3">
	          <button>Search</button>
	        </div>
        </div>
        <div className="container-fluid search">

        	<div>
              	<ul className="a">

                    {/* Loop through Participant List from Search Val and render */}
                    {this.state.plist.map((val, index) => {
                        return <li key={index}>
                          <div>
                            <div className="col-md-4">
                              <span><strong>{val.name.first} </strong></span>
                              <span className="last"><strong>{val.name.last}</strong></span>
                            </div>
                            <div className="col-md-4">
                              <span>Team: <strong>{val.teamName}</strong></span>
                            </div>
                            <div className="col-md-2">
                              <span><strong>$ {parseInt(val.amountRaised).toLocaleString()}</strong></span>
                            </div>
                            <div className="col-md-2">
                              <strong><a href={val.personalPageUrl}>Donate</a></strong>
                            </div>
                          </div>
                        </li>
                    })}
              	</ul>
                <ul className="b">

                    {/* Loop through Team List from Search Val and render */}
                    {this.state.tlist.map((val, index) => {
                        return <li key={index}>
                          <div>
                            <div className="col-md-4">
                              <span><strong>{val.name}</strong></span>
                            </div>
                            <div className="col-md-4">
                              <span><strong>Captain:</strong> {val.captainFirstName} {val.captainLastName}</span>
                              <span className="b"><strong>Members: {val.numMembers}</strong></span>
                            </div>
                            <div className="col-md-2">
                              <span><strong>${parseInt(val.amountRaised).toLocaleString()}</strong></span>
                            </div>
                            <div className="col-md-2">
                              <strong><a href={val.teamPageURL}>Donate</a></strong>
                            </div>
                          </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
      </div>

    );
  }
}
