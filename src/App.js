import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import logo from './logo.svg';
import mugshot from './assets/nic.jpg';
import icnexternal from './assets/icn-arrow-ext.svg';
import icncss from './assets/icn-css.svg';
import icnfigma from './assets/icn-figma.svg';
import icngit from './assets/icn-git.svg';
import icnhtml5 from './assets/icn-html5.svg';
import icnillu from './assets/icn-illu.svg';
import icninvision from './assets/icn-invision.svg';
import icnjs from './assets/icn-js.svg';
import icnnpm from './assets/icn-npm.svg';
import icnreact from './assets/icn-react.svg';
import icnsketch from './assets/icn-sketch.svg';
import icnvscode from './assets/icn-vscode.svg';
import './App.scss';
//import './bootstrap.css';
import IosSwitch from './IosSwitch.js';
import ProgressBar from './ProgressBar.js';
import skillData from './skillData.js';
import {
  TransitionGroup,
  Transition,
  CSSTransition,
} from 'react-transition-group';

function App() {
  const [theme, setTheme] = useState('dark');
  const [iosSwitchState, setIosSwitchState] = useState('on');

  function handleClick() {
    if (theme === 'dark') {
      setTheme('light');
      setIosSwitchState('off');
    } else if (theme === 'light') {
      setTheme('dark');
      setIosSwitchState('on');
    }
  }

  return (
    <div className={`app ${theme}`}>
      <ReactTooltip />
      <div className='preheader'>
        <div className='logo'>
          <img alt='logo' src={logo}></img>
        </div>
      </div>
      <header>
        <h2>Nicolaas Van den Broek</h2>
        <h3>UI/UX Designer + Developer</h3>
        <div className='theme-selector'>
          <h5 className=''>UI Theme</h5>
          <IosSwitch handleClick={handleClick} value={iosSwitchState} />
          <br />
        </div>
      </header>
      <div className='wrapper'>
        <div className='topics'>
          <div>UX</div>
          <div>UI</div>
          <div>Design</div>
          <div>Typography</div>
          <div>React</div>
        </div>
        <aside>
          <div className='mugshot'>
            <img src={mugshot} />
          </div>
          <h3>Tech + Apps</h3>
          <div className='tech-apps'>
            <img src={icnreact} alt='icon-react' data-tip='React 16+' />
            <img src={icnhtml5} alt='icon-html5' data-tip='HTML5' />
            <img src={icncss} alt='icon-css' data-tip='CSS3' />
            <img src={icnjs} alt='icon-js' data-tip='Javascript/ES6+' />
            <img src={icnnpm} alt='icon-npm' data-tip='NPM' />
            <img src={icngit} alt='icon-git' data-tip='Git' />
            <img src={icnvscode} alt='icon-vscode' data-tip='VSCode' />
            <img src={icnfigma} alt='icon-figma' data-tip='Figma' />
            <img src={icnillu} alt='icon-illu' data-tip='Illustator' />
            <img src={icnsketch} alt='icon-sketch' data-tip='Sketch' />
            <img src={icninvision} alt='icon-invision' data-tip='InVision' />
          </div>
          <div className='profile info-cv'>
            <h3>CV / Experience</h3>
            <a href='https://www.google.com'>www.linkedin.com/nvdbroek</a>
          </div>
          <div className='profile info-portfolio'>
            <h3>Portfolio</h3>
            <a href='https://www.google.com'>behance.com/humanclarity</a>
          </div>
          <div className='profile info-email'>
            <h3>Email</h3>
            <a href='https://www.google.com'>broekn@gmail.com</a>
          </div>
          <div className='profile info-status'>
            <h3>Rates (AUD, inc GST)</h3>
            <p>
              1-4 Days: $100/hr, 1-4 Weeks: $70/hr, 4 Weeks+: Please contact
            </p>
            {/* <a href='https://www.google.com'>
              Currently looking for work-form-home projects
            </a> */}
          </div>
          <button>
            View Portfolio
            <img src={icnexternal} alt='icon external' />
          </button>
        </aside>
        <main>
          <h1>
            <span>I Design &amp; Build</span>
            <span>_Great Digital </span>
            <span>Experiences.</span>
          </h1>
          <div className='page-content'>
            <h2>
              Creating good looking and truly usefull interfaces for
              goal-orientated digital products or captivating ones for
              entertainment products — for Web, iOS and Android. Utilising at
              minimum current best-practice solutions or creating novel
              solutions to unique problems. I have been creating quality
              products that provide value for the user and in turn the business
              and it's stakeholders for over 14 years.
            </h2>
            <h3>Key Skills:</h3>
            <section className='skills-wrap'>
              <div className='skills skills-dev'>
                <h4>Development</h4>
                {skillData.develop.map((item, index) => (
                  <ProgressBar
                    skill={item.skill}
                    progress={item.progress}
                    key={index}
                  />
                ))}
              </div>
              <div className='skills skills-des'>
                <h4>Design</h4>
                {skillData.design.map((item, index) => (
                  <ProgressBar
                    skill={item.skill}
                    progress={item.progress}
                    key={index}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
