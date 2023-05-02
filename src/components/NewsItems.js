// import PropTypes from "prop-types";
import React from "react";

const NewsItems = (props)=>{
    let { title, disc, img, newsurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span
              className=" badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={
              !img
                ? "https://images.hindustantimes.com/tech/img/2023/04/27/1600x900/tarantula_nebula_1682576878974_1682576885007.png"
                : img
            }
            className="card-img-top"
            height="200px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{disc}</p>
            <p className="card-text">
              <small className="text-muted">By <u>{!author ? "Unknown" : author}</u> on{" "}<u>{new Date(date).toGMTString()}</u></small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blanck"
              className="btn btn-sm btn-dark"
            >
              Read More &#10141;
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
