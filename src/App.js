import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pagesize = 9;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
        
          <Routes>
            <Route path="/"element={<News key="general" pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route path="/business" element={<News key="business" pagesize={this.pagesize} country="in" category="business" />}></Route>
            <Route path="/entertainment"element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />}></Route>
            <Route path="/general"element={<News key="general" pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route path="/health"element={<News key="health" pagesize={this.pagesize} country="in" category="health" />}></Route>
            <Route path="/science"element={<News key="science" pagesize={this.pagesize} country="in" category="science" />}></Route>
            <Route path="/Sports"element={<News key="Sports" pagesize={this.pagesize} country="in" category="Sports" />}></Route>
            <Route path="/technology"element={<News key="technology" pagesize={this.pagesize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
