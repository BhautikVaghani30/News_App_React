import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonky`;
  }

  async updatenews() {
    this.props.setprogress(10);
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=2&pageSize=${this.props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setprogress(50);
    let parsdata = await data.json();
    // console.log(parsdata);
    
    this.setState({
      articles: parsdata.articles,
      totalResults: parsdata.totalResults,
      loading: false,
    });
    this.props.setprogress(100);
  }
  
  async componentDidMount() {
    this.updatenews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=2&pageSize=${this.props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();
    // console.log(parsdata);
    this.setState({
      articles: this.state.articles.concat(parsdata.articles),
      totalResults: parsdata.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h1 style={{ margin: "40px 0px" }} className="text-center">
          NewsMonky - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles &&
                this.state.articles.map((element, i) => {
                  return (
                    <div key={i} className="col-md-4 ">
                      <NewsItems
                        title={element.title ? element.title : ""}
                        disc={element.description ? element.description : ""}
                        img={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
