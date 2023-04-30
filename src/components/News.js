import PropTypes from 'prop-types'
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";


export class News extends Component {
   
  static defaultProps={
    country : 'in',
    pagesize:8,
    category:'gene',
  }


   PropTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }

  capitalize = (String)=>{
    return String.charAt(0).toUpperCase()+String.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1    
    }
    document.title = `${this.capitalize(this.props.category)} - NewsMonky`;
  }

  async updatenews(){
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=2&pageSize=${this.props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page }&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({ articles: parsdata.articles,totalResults:parsdata.totalResults,loading:false });
  }
  async componentDidMount() {
    // // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=2&pageSize=${this.props.pagesize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page }&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsdata = await data.json();
    // // console.log(parsdata);
    // this.setState({ articles: parsdata.articles,totalResults:parsdata.totalResults,loading:false });
    this.updatenews();
  }

  

  next = async () => {
    // // console.log("Next");
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pagesize)
    // ) {
    // } 
    // else {
    //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page + 1}&pageSize=20`;
    //   // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pagesize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   });
    // }
    this.setState({page:this.state.page +1});
    this.updatenews();
  };

  previous = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page - 1}&pageSize=20`;
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346f6368416547f394f795632801e89a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
    this.setState({page:this.state.page - 1});
    this.updatenews();
  };


  render() {

    return (

      <div className="container my-3">

        <h1 style={{margin:'40px 0px'}} className="text-center">NewsMonky - Top {this.capitalize(this.props.category)} Headlines</h1>

        {this.state.loading && <Spinner/>}

        <div className="row">

          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {

            return (

              <div className="col-md-4 " key={element.url}>

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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
