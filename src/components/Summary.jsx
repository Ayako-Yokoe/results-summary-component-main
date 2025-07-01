import React from 'react'
import './Summary.css';
import data from '../data.json';

const colors = [  
  '--color-light-red', 
  '--color-orangey-yellow',
  '--color-green-teal',
  '--color-cobalt-blue'
];

function Summary() {
  return (
    <div className='summary-container'>
      <h2 className='summary--title'>Summary</h2>

      <div className='summary-results'>
      {data.map((d, index) => (
        <div className='summary-result' key={index}  style={{ backgroundColor: `hsla( var(${colors[index % colors.length]}), 0.07)`}}>
          <div className='summary-result--title'>
            <img src={d.icon} alt={`${d.category}`} />
            <p className='summary-result--category' style={{ color: `hsl( var(${colors[index % colors.length]}))`}}>{d.category}</p>
          </div>
          <p className='summary-result--score'>{d.score} <span className='summary-result--score-base'>/ 100</span></p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Summary
