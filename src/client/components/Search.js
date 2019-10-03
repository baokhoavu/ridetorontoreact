import '../styles/Search.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        a: [],
        b: [],
        tlist: [],
        plist: [],
        keys: 0,
        searchVal: '',
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  handleKeyUp(e) {
    this.setState({ searchVal: e.target.value });

    const timerID = setTimeout( () => {

      const peopleList = [];
      const teamList = [];

      if (this.state.searchVal.length > 2) {


        this.state.a.map((v, i) => {
          if (v.name.last.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1) {
             peopleList.push(v)
             console.log(v)
          } else if (v.name.first.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1) {
             peopleList.push(v)
             console.log(v)
          }
        })

        this.state.b.map((v, i) => {
          if ( v.name.toUpperCase().indexOf(this.state.searchVal.toUpperCase()) > -1 ) {
            teamList.push(v)
            console.log(v)
          }
        })
        
        this.setState({ tlist: teamList })
        this.setState({ plist: peopleList })
        
      }
    },1000)
  }

  componentDidMount() {
	  const urlp = 
      'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getParticipants&api_key=cfrca&v=1.0&fr_id=1761&full_search=TRUE&first_name=%25%25%25&last_name=%25%25%25&response_format=json&list_page_size=500&list_page_offset=';
    const urlt = 
      'https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json';

	  const people = [];
	
    const add = (data => {
      const a = data.getParticipantsResponse.participant;
      a.map((val, index) => {
        people.push(val)
      })
      this.setState({
        a: people
      })
    })

  	for (var i = 1; i < 7; i++) {
  		fetch(urlp + i)
			.then(res => {
      	return res.json().then(data => {
			    add(data)
        })
    	})
  	}

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
      <div class="d search">
      	<div class="container-fluid">
	        <div class="col-md-9">
	          <input placeholder="Enter a team or Rider here" onChange={this.handleKeyUp} onKeyDown={this.test} type="text" />
	        </div>
	        <div class="col-md-3">
	          <button>Search</button>
	        </div>
        </div>
        <div class="container-fluid search">

        	<div>
              	<ul class="a">
                    {this.state.plist.map((val, index) => {
                        return <li key={index}>
                          <div>
                            <div class="col-md-4">
                              <span><strong>{val.name.first} </strong></span>
                              <span class="last"><strong>{val.name.last}</strong></span>
                            </div>
                            <div class="col-md-4">
                              <span>Team: <strong>{val.teamName}</strong></span>
                            </div>
                            <div class="col-md-2">
                              <span><strong>$ {parseInt(val.amountRaised).toLocaleString()}</strong></span>
                            </div>
                            <div class="col-md-2">
                              <strong><a href={val.personalPageUrl}>Donate</a></strong>
                            </div>
                          </div>
                        </li>
                    })}
              	</ul>
                <ul class="b">
                    {this.state.tlist.map((val, index) => {
                        return <li key={index}>
                          <div>
                            <div class="col-md-4">
                              <span><strong>{val.name}</strong></span>
                            </div>
                            <div class="col-md-4">
                              <span><strong>Captain:</strong> {val.captainFirstName} {val.captainLastName}</span>
                              <span class="b"><strong>Members: {val.numMembers}</strong></span>
                            </div>
                            <div class="col-md-2">
                              <span><strong>${parseInt(val.amountRaised).toLocaleString()}</strong></span>
                            </div>
                            <div class="col-md-2">
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
