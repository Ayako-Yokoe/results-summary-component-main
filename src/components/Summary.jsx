import React from 'react'
import './Summary.css';
import data from '../data.json';

const colorClasses = [  
  'summary-result-light-red', 
  'summary-result-orangey-yellow',
  'summary-result-green-teal',
  'summary-result-cobalt-blue'
];

function Summary() {
  return (
    <div className='summary-container'>
      <h2 className='summary--title'>Summary</h2>

      <div className='summary-results'>
      {data.map((d, index) => {
        const colorClass = colorClasses[index % colorClasses.length];

        return (
          <div className={`summary-result ${colorClass}`} key={index} >
            <div className='summary-result--title'>
              <img src={d.icon} alt={`${d.category}`} />
              <p className='summary-result--category'>{d.category}</p>
            </div>
            <p className='summary-result--score'>{d.score} <span className='summary-result--score-base'>/ 100</span></p>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default Summary
