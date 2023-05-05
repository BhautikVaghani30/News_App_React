import NavBar from "./components/NavBar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const pagesize = 9;
  const APIkey = process.env.REACT_APP_NEWS_API
  
  const [progress,setprogress] = useState(0)
 
  
  return(
   
      <div>
        <Router>
          <NavBar />

          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="general"
                  pagesize={pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="business"
                  pagesize={pagesize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="entertainment"
                  pagesize={pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="general"
                  pagesize={pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="health"
                  pagesize={pagesize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="science"
                  pagesize={pagesize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="Sports"
                  pagesize={pagesize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News setprogress={setprogress} apikey={APIkey} 
                  key="technology"
                  pagesize={pagesize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    
  )
}
export default App;