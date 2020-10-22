import React, { useState, useRef } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

const ProgressBar = ({ skill, progress }) => {
  const nodeRef = React.useRef(null);
  return (
    <div className='skill'>
      <h5>{skill}</h5>
      <div className='progress-bar-bg'>
        <div className='progress-bar-wrap' style={{ width: `${progress}%` }}>
          <CSSTransition
            className='progress-bar'
            in={true}
            timeout={300}
            appear={true}
          >
            <div ref={nodeRef}></div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
