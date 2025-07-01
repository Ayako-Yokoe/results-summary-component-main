import React from 'react'
import "./Result.css";

function Result() {
  return (
    <div className='result-container'>
      <h1 className='result--title'>Your Result</h1>
      <p className='result'>
        <span className='result--score'>76</span>
        <span className='result--base'>of 100</span>
      </p>
      <div className='evaluation'>
        <p className='evaluation--result'>Great</p>
        <p className='evaluation--detail'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}

export default Result
