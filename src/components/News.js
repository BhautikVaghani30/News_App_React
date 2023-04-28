// import PropTypes from 'prop-types'
import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=2&pageSize=20"
    let data = await fetch(url);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({ articles: parsdata.articles });
  }

  next = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page + 1}&pageSize=20`;
        let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=2&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}


previous = async () => {
  console.log("Previous");
  // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page - 1}&pageSize=20`;
  let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=20"
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
  })
}
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonky - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  disc={element.description ? element.description : ""}
                  img={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previous}
          >
           
            &larr; Previous
          </button>
          <button 
              type="button" 
              className="btn btn-dark" 
              onClick={this.next}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
