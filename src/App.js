import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logo from './logo.svg';
import './css/app.scss';
import './css/variables.scss';
//import IosSwitch from './components/IosSwitch.js';
import useDarkMode from './components/useDarkMode.js';
import ProgressBar from './components/ProgressBar.js';
import skillData from './data/skillData.js';
import {
  mugshot2,
  icnexternal,
  icncss,
  icnfigma,
  icngit,
  icnhtml5,
  icnillu,
  icninvision,
  icnjs,
  icnnpm,
  icnreact,
  icnsketch,
  icnvscode,
} from './assets/img/index.js';

const App = () => {
  const [darkTheme, handleClick] = useDarkMode();
  const [copiedText, setCopiedText] = useState('');
  let e1 = 'broekn';
  let e2 = '@gmail.com';

  return (
    <div className={`app ${darkTheme === 'saas' ? 'saas' : 'light'}`}>
      <ReactTooltip />
      <div className='preheader'>
        <div className='logo'>
          <img alt='logo' src={logo} width='30' height='30'></img>
        </div>
      </div>
      <header>
        <h2>Nicolaas Van den Broek</h2>
        <h3>UI/UX Designer + Developer</h3>
        <div className='theme-selector'>
          <span className=''>Theme</span>
          {/* <IosSwitch /> */}
          <div
            onClick={handleClick}
            className={`ios-switch ios-switch-${
              darkTheme === 'saas' ? 'on' : 'off'
            }`}
          >
            <div className='ios-switch-text'>
              <span>{darkTheme === 'saas' ? 'saas' : 'light'}</span>
            </div>
            <div className='ios-switch-knob'></div>
          </div>
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
            <img src={mugshot2} alt='mugshot' width='100' height='100' />
          </div>
          <h3>Key Tech + Apps</h3>
          <div className='tech-apps'>
            <img
              src={icnreact}
              alt='icon-react'
              data-tip='React 16+'
              width='25'
              height='25'
            />
            <img
              src={icnhtml5}
              alt='icon-html5'
              data-tip='HTML5'
              width='23'
              height='32'
            />
            <img
              src={icncss}
              alt='icon-css'
              data-tip='CSS3'
              width='23'
              height='32'
            />
            <img
              src={icnjs}
              alt='icon-js'
              data-tip='Javascript/ES6+'
              width='25'
              height='25'
            />
            <img
              src={icnnpm}
              alt='icon-npm'
              data-tip='NPM'
              width='28'
              height='11'
            />
            <img
              src={icngit}
              alt='icon-git'
              data-tip='Git'
              width='25'
              height='24'
            />
            <img
              src={icnvscode}
              alt='icon-vscode'
              data-tip='VSCode'
              width='25'
              height='24'
            />
            <img
              src={icnfigma}
              alt='icon-figma'
              data-tip='Figma'
              width='17'
              height='25'
            />
            <img
              src={icnillu}
              alt='icon-illu'
              data-tip='Illustator'
              width='25'
              height='25'
            />
            <img
              src={icnsketch}
              alt='icon-sketch'
              data-tip='Sketch'
              width='26'
              height='24'
            />
            <img
              src={icninvision}
              alt='icon-invision'
              data-tip='InVision'
              width='25'
              height='25'
            />
          </div>
          <div className='profile info-cv'>
            <h3>CV / Experience</h3>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/nicolaasvdbroek'
            >
              <span>linkedin.com/in/nicolaasvdbroek</span>
            </a>
          </div>
          <div className='profile info-portfolio'>
            <h3>Portfolio</h3>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.behance.net/humanclarity'
            >
              <span>behance.net/humanclarity</span>
            </a>
          </div>
          <div className='profile info-email'>
            <h3>Email</h3>
            <p>{`${e1 + e2}`}</p>
            <CopyToClipboard text={`${e1 + e2}`}>
              <button className='button-small'>Copy</button>
            </CopyToClipboard>
          </div>
          {/* <div className='profile info-status'>
            <h3>Rates (AUD, inc GST)</h3>
            <p>
              0-40hrs: $90/hr, <br />
              40hrs+: $70/hr
            </p>
          </div> */}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='button button-primary'
            href='https://www.behance.net/humanclarity'
          >
            <span>Recent work</span>
            <img src={icnexternal} alt='icon external' width='14' height='14' />
          </a>
        </aside>
        <main>
          <h1>
            <span>I Design &amp; Build</span>
            <span>Great Digital </span>
            <span>Experiences.</span>
          </h1>
          {/* <h2>
            Good looking, easy-to-use and truly usefull SaaS applications,
            mobile apps, websites and brands by utilising at minimum current
            best-practice solutions or creating novel solutions to unique
            problems. I have been creating products that provide value for the
            user and in turn the business and its stakeholders for over a
            decade.
          </h2> */}
          <h2>
            I design user interfaces which are intuitive to use and look
            great. Utilising current best practice userflow/interaction patterns – or solving novel problems with creative solutions. 
            <br />
            <br />
            Whether it is an enterprise SaaS application, mobile/webapp or website, I can bring your ideas to life (or improve current product) and create lowest cognitive-load and enjoyable digital experiences.
            <br />
            <br />
            I am also expert in CSS/Interaction Design, allowing me to understand possibilities and limitations of implementation.
            <br />
            <br />
            Check out my folio for examples of my recent work and get in touch
            if you want a hand with super charging your UX/UI.
          </h2>
          <div className='page-content'>
            <section>
              <h3>Key Skills:</h3>
              <div className='skills-wrap'>
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
              </div>
            </section>
            <section className='work-history'>
              <h3>Work History:</h3>
              <ul className='company-list'>
                <li>
                  <h4>UX/UI Designer</h4>
                  <div className='description'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='http://alintaenergy.com.au'
                    >AlintaEnergy </a>
                    <span>
                       • Energy Company • Apr 2021 - current
                    </span>
                    <ul>
                      <li>'MyAccount' WebApp - Senior UX/UI Designer. User Testing, translating to UI</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <h4>UI/Visual Designer</h4>
                  <div className='description'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://fanhubmedia.com'
                    >Fanhubmedia </a>
                    <span>
                       • Sports Fan Engagement Products • Mar 2021 -
                      April 2021
                    </span>
                    <ul>
                      <li>
                        'The Sun' Euro 2020 Football Sweepstakes WebApp - UI/Visual
                        designer.
                      </li>
                      <li>
                        Tokyo Olympics 2020 Website - Prizes section - Visual
                        designer.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h4>Product Owner</h4>
                  <div className='description'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.behance.net/gallery/98751675/Vitamin_Tracker'
                    >
                      VitaminTracker
                    </a>
                    <span> • Startup • Founder • Nov 2020 - current </span>
                  </div>
                  <ul>
                    <li>Tech: React Native</li>
                  </ul>
                </li>
                <li>
                  <h4>Senior Visual and UI Designer + Developer</h4>
                  <div className='description'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='//findex.com.au'
                    >
                      Findex
                    </a>
                    <span>
                      &nbsp;• Finance/Fintech Company • 2500 Employees • 2015 -
                      Nov 2020
                    </span>
                  </div>
                  <p>
                    Working as part of agile product teams—most closely with
                    developers and product managers—to create and iteratively
                    improve in-house enterprise software applications.
                  </p>
                  <ul>
                    <li>
                      Tasking/Workflow WebApp ('TeamFlow') — Senior UI Designer
                      + Development: Angular 4+, Material UI, SCSS{' '}
                      {/* <a href='https://www.behance.net/gallery/99166183/TeamFlow_V2_LandingPage'>
                        TeamFlow
                      </a> */}
                    </li>
                    <li>
                      Financial Management WebApp ('Ascend') — UX/UI Design +
                      Consulting
                    </li>
                    <li>Scoping/Budgeting WebApp — Senior UX/UI</li>
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
                  <div className='description'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='//aptituredigital.com'
                    >
                      AptitureDigital
                    </a>
                    <span> • Digital Agency • 30 Employees • 2013 - 15</span>
                  </div>
                  <p>
                    Creating WebApps, Web sites + Branding for mostly large
                    insurance and finance clients.
                  </p>
                  <ul>
                    <li>Quoting WebApp - Senior UI + Angular + SASS</li>
                    <li>Websites - Development in Wordpress, PHP, JQuery</li>
                  </ul>
                </li>
                <li>
                  <h4>Visual and UI Designer</h4>
                  <div className='description'>
                    <span>
                      WebDynamic • Digital Agency • 30 Employees • 2010 - 13
                    </span>
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
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='button button-primary'
              href='https://www.behance.net/humanclarity'
            >
              <span>Recent work</span>
              <img
                src={icnexternal}
                alt='icon external'
                width='14'
                height='14'
              />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

(() => {
  window.console.log(
    '\n\n\n\n\n                      ++++++++++                         \n                +MMMMMMMMMMMMMMMMMMM+               \n            +MMMMMMMMMMMMMMMMMMMMMMMMMMM+           \n         +MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+        \n        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+      \n      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM     \n     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    \n    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdhMMMMMMMMM   \n   MMMMMMMMMMm-sdMMMMMMMMMMMMMMMMMmo. +MMMMMMMMMMM  \n  +MMMMMMMMMMd   .+hNMMMMMMMMMMMd-    +MMMMMMMMMMM+  \n  MMMMMMMMMMMd      `:smMMMMMMMMy     +MMMMMMMMMMMM \n +MMMMMMMMMMMd          -odMMMMMh.    +MMMMMMMMMMMM+ \n MMMMMMMMMMMMMdo-          `/yNMMMdo- +MMMMMMMMMMMM+ \n MMMMMMMMMMMMMMMMms:`          -sdMMMmdMMMMMMMMMMMM+ \n MMMMMMMMMMMMd.+hMMMNh+.          .+hNMMMMMMMMMMMMM+ \n MMMMMMMMMMMMd   `/hMMMMmo-          `sMMMMMMMMMMMM+ \n +MMMMMMMMMMMd     -MMMMMMMNy/`       +MMMMMMMMMMMM \n  MMMMMMMMMMMd     -MMMMMMMMMMMdo-    +MMMMMMMMMMM+  \n  +MMMMMMMMMMd  `/hNMMMMMMMMMMMMMMms:`+MMMMMMMMMMM  \n   MMMMMMMMMMm/hNMMMMMMMMMMMMMMMMMMMMNmMMMMMMMMMM   \n    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    \n     +MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+     \n       +MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+      \n         +MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM         \n            +MMMMMMMMMMMMMMMMMMMMMMMMMMM+           \n               +MMMMMMMMMMMMMMMMMMMMM+              \n                     +++++++++++                        \n \n \n \n \n'
  );
})();
