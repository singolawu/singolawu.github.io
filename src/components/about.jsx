import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row row-bottom-padded-sm animate-box' data-animate-effect='fadeInLeft'>
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Me</span>
                      <h2 className='colorlib-heading'>Personal Profile</h2>
                      <p>Hello, I am Puji Andrianto, a specialized Mobile Developer with more than three years of experience and has published more than 5 Apps. As a mobile application developer, my career began in 2018 when I got a project for E-commerce. My mission is to improve user experience and work quickly based on the client's need to make a new app. I also will continuously develop an app that must always be easier to use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box' data-animate-effect='fadeInLeft'>
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>Here are some of our expertise</h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>Mobile Development </h3>
                    <p>I have more than 3 years experience building Mobile App (Android & iOS) using React Native and Flutter.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-bulb' />
                  </span>
                  <div className='desc'>
                    <h3>Website & Mobile-Web</h3>
                    <p>As coming from the Javascript background, I can build a website or mobile website with ReactJs.</p>
                  </div>
                </div>
              </div>
              {/* <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Data Structures & Algorithms</h3>
                    <p>Since I have background of IT for long time. I have good grasp over fundamental concepts of Data Structures & Algorithms</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div> */}
              {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div> */}

            </div>
          </div>
        </section>
      </div>
    )
  }
}
