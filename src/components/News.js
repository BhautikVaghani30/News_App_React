// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {


  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonky - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp"/>
            </div>
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp"/>
            </div>
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp"/>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News