import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 9;
  APIkey = process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress
    })
  }
  
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="business"
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="health"
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="Sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News setprogress={this.setprogress} apikey={this.APIkey} 
                  key="technology"
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
