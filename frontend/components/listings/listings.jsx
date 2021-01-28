import React from "react";

function Listing(props) {
  return (
    <div className="listing">
      <img src={window.gibson} alt="Gibson" className="listing-img" />
      <div className='listing-content'>  
        <h3>Gibson les Paul</h3>
        <section>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </section>
        <p>$4,560</p>
      </div>
    </div>
  );
}

export default Listing;
