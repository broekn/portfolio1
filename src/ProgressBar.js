import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

const ProgressBar = ({ skill, progress }) => {
  return (
    <>
      <div className='skill'>
        <h5>{skill}</h5>

        {/* <div class='newbar'></div>
        <svg
          width='300'
          height='30'
          viewBox='0 0 300 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            clip-path='url(#svgPath)'
            x='0.591064'
            y='0.801025'
            width='300'
            height='30'
            rx='0'
            fill='red'
          />
          <defs>
            <clipPath id='svgPath'>
              <rect x='1' width='2' height='9' rx='5' />
              <rect x='6' width='2' height='9' rx='5' />
              <rect x='11' width='2' height='9' rx='5' />
              <rect x='16' width='2' height='9' rx='5' />
            </clipPath>
          </defs>
        </svg>

        <svg height='100' width='10'>
          <defs>
            <clipPath id='svgPath'></clipPath>
          </defs>
        </svg> */}

        <div className='progress-bar-bg'>
          <CSSTransition
            in={true}
            timeout={2000}
            appear={true}
            className='progress-bar'
            style={{ width: `${progress}%` }}
          >
            <div></div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
