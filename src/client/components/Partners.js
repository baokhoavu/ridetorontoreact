// Partners

// Imported Styles from Global CSS
import '../styles/Home.css';

// Imported Middleware
import React from 'react';

// Function Based Component declared as Partners
const Partners = () => (
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

        {/* Second Row*/}
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
          </div>
          <div className="col-md-3">
          </div>
        </div>

      </div>
    </div>

)

export default Partners;