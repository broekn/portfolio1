import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logo from './logo.svg';
import mugshot from './assets/me.jpg';
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
  const [theme, setTheme] = useState('light');
  const [iosSwitchState, setIosSwitchState] = useState('on');
  const [copiedText, setCopiedText] = useState('');
  let e1 = 'broekn';
  let e2 = '@gmail.com';

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
          <h3>Key Tech + Apps</h3>
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
            <a target='_blank' href='www.linkedin.com/in/nicolaasvdbroek'>
              <span>linkedin.com/in/nicolaasvdbroek</span>
            </a>
          </div>
          <div className='profile info-portfolio'>
            <h3>Portfolio</h3>
            <a target='_blank' href='https://www.behance.net/humanclarity'>
              <span>behance.net/humanclarity</span>
            </a>
          </div>
          <div className='profile info-email'>
            <h3>Email</h3>
            <p>{`${e1 + e2}`}</p>
            <CopyToClipboard text={`${e1 + e2}`}>
              <button class='button-small'>Copy</button>
            </CopyToClipboard>
          </div>
          <div className='profile info-status'>
            <h3>Rates (AUD, inc GST)</h3>
            <p>
              0-40hrs: $90/hr, <br />
              40hrs+: $70/hr
            </p>
          </div>
          <a
            target='_blank'
            class='button button-primary'
            href='https://www.behance.net/humanclarity'
          >
            <span>Portfolio</span>
            <img src={icnexternal} alt='icon external' />
          </a>
        </aside>
        <main>
          <h1>
            <span>I Design &amp; Build</span>
            <span>_Great Digital </span>
            <span>Experiences.</span>
          </h1>
          <h2>
            Creating good looking, easy-to-use and truly usefull SaaS
            applications, mobile apps, websites and brands by utilising at
            minimum current/2020 best-practice solutions or creating novel
            solutions to unique problems. I have been creating products that
            provide value for the user and in turn the business and it's
            stakeholders for over 12 years.
          </h2>
          <div className='page-content'>
            <section>
              <h3>Key Skills:</h3>
              <div className='skills-wrap'>
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
              </div>
            </section>
            <section class='work-history'>
              <h3>Work History:</h3>
              <ul class='company-list'>
                <li>
                  <h4>Product Owner</h4>
                  <div class='description'>
                    <a>VitaminTracker</a>
                    <span> • Startup • Founder • 2019 - (Spare-time)</span>
                  </div>
                  <p>Tech: React Native</p>
                </li>
                <li>
                  <h4>Senior Visual and UI Designer + Developer</h4>
                  <div class='description'>
                    <a href='//:findex.com.au'>Findex </a>
                    <span>
                      • Finance/Fintech Company • 2500 Employees • 2015 -
                      current
                    </span>
                  </div>
                  <p>
                    Working as part of agile product teams—most closely with
                    developers and product managers—to create and iteratively
                    improve in-house enterprise software applications.
                  </p>
                  <ul>
                    <li>Tasking/Workflow product — Senior UI + Angular</li>
                    <li>Scoping/Budgeting tool — Senior UI</li>
                    <li>Designed and developed an in-house design system</li>
                    <li>New Logo Design (Custom type)</li>
                    <li>Tutoring other designers</li>
                    <li>
                      Range of other design projects including marketing
                      campaigns, print design material and brand signage design
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Designer + Front end Developer</h4>
                  <div class='description'>
                    <a href='//aptituredigital.com'>AptitureDigital</a>
                    <span> • Digital Agency • 30 Employees • 2013 - 15</span>
                  </div>
                  <p>
                    Creating WebApps, Web sites + Branding for mostly large
                    insurance and finance clients.
                  </p>
                  <ul>
                    <li>Quoting WebApp - Senior UI + Angular + SASS</li>
                    <li>Websites - Development in Wordpress, PHP, Jquery</li>
                  </ul>
                </li>
                <li>
                  <h4>Visual and UI Designer</h4>
                  <div class='description'>
                    <a>WebDynamic</a>
                    <span> • Digital Agency • 30 Employees • 2010 - 13</span>
                  </div>
                  <p>
                    Creating WebApps, Web sites + Branding for small and med
                    companies.
                  </p>
                  <ul>
                    <li>Website Designer + Builder</li>
                    <li>Logo + Branding</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
