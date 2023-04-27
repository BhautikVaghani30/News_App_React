// import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItems extends Component {
    constructor(){
        super();
        console.log("hello")
    }


  render() {
    let {title,disc} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {disc}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
