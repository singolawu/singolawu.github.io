import React, { Component } from 'react'

export default class Introduction extends Component {
  render () {
    return (
      <div>
        <section id='colorlib-hero' className='js-fullheight' data-section='home'>
          <div className='flexslider js-fullheight'>
            <ul className='slides'>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner js-fullheight'>
                        <div className='desc'>
                          <h1>Hi! <br />I'm Puji Andrianto</h1>
                          <p><a className='btn btn-primary btn-learn' href='https://drive.google.com/file/d/1yRyaI-ScfpxAf97q-V0_TR6AxYA0cNWn/view' target='_blank'>View CV<i className='icon-download4' /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h1>If you like to know <br />What we do... </h1>
                          <p className='btn btn-primary btn-learn' onClick={() => this.props.scrollTo('about')}>See what we do! <i className='icon-book' /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h1>We love building<br /> THINGS !!</h1>
                          <p className='btn btn-primary btn-learn' onClick={() => this.props.scrollTo('project')}>View Projects <i className='icon-briefcase3' /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
