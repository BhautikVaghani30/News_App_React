// import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItems extends Component {
    constructor(){
        super();
        console.log("hello")
    }


  render() {
    let {title,disc,img, newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={img } className="card-img-top" height="200px" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
            {disc}...
            </p>
            <a href={newsurl} target="_blanck" className="btn btn-sm btn-primary">
              Read More &#10141;
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
