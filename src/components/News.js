// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
  const [articles,setarticles]=useState()
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)
  // document.title = `${capitalize(props.category)} - NewsMonky`;
  

  const capitalize = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };



  const updatenews = async ()=> {
    props.setprogress(10);
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${props.category}&apiKey=${props.apikey}&page=2&pageSize=${props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    setloading(true);
    let data = await fetch(url);
    props.setprogress(50);
    let parsdata = await data.json();
    // console.log(parsdata);
    setarticles(parsdata.articles)
    settotalResults(parsdata.totalResults)
    setloading(false)
    
    props.setprogress(100);
  }
  useEffect(()=>{
    updatenews();
  },[])


  const fetchMoreData = async () => {
    setpage(page+1)
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-04-28&to=2023-04-28&sortBy=popularity&category=${props.category}&apiKey=${props.apikey}&page=2&pageSize=${props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    // console.log(parsdata);
    setarticles(articles.concat(parsdata.articles));
    settotalResults(parsdata.totalResults)
    setloading(false)
    
  };

    return (
      <>
        <h1 style={{ margin: "40px 0px" }} className="text-center">
          NewsMonky - Top {capitalize(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles&&articles.map((element, i) => {
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
News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};

// News.PropTypes = {
//   country: PropTypes.string,
//   pagesize: PropTypes.number,
//   category: PropTypes.string,
// };

export default News;
