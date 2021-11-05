import React, { Component } from 'react'

export default class Projects extends Component {
  render () {
    return (
      <div>
        <section className='colorlib-work' data-section='projects'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box' data-animate-effect='fadeInLeft'>
                <span className='heading-meta'>My Work</span>
                <h2 className='colorlib-heading animate-box'>Recent Projects</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 animate-box' data-animate-effect='fadeInLeft'>
                <div className='project' style={{ backgroundImage: 'url(images/jaknot.png)' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>Jakartanotebook.com Mobile App</a></h3>
                      <span>One of the leading marketplaces in Indonesia, dedicated to provide the cheapest, most unique and most complete product to customers</span><br />
                      <a href='https://play.google.com/store/apps/details?id=com.jaknot'><span>https://play.google.com/store/apps/details?id=com.jaknot</span></a>
                      <a href='https://apps.apple.com/id/app/jakarta-notebook/id1436251412?l=id'><span>https://apps.apple.com/id/app/jakarta-notebook/id1436251412?l=id</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-box' data-animate-effect='fadeInRight'>
                <div className='project' style={{ backgroundImage: 'url(images/99usahaku.png)' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>99% Usahaku Telkomsel</a></h3>
                      <span>Platform or application launched by Telkomsel to help Small and Medium Enterprises (SMEs) to be more efficient, advanced, and develop through digital solutions offered by Telkomsel and Telkomsel partners registered in the application.</span><br />
                      <a href='https://play.google.com/store/apps/details?id=com.telkomsel.usahaku'><span>https://play.google.com/store/apps/details?id=com.telkomsel.usahaku</span></a>
                      <a href='https://apps.apple.com/id/app/99-usahaku/id1508260012?l=id'><span>https://apps.apple.com/id/app/99-usahaku/id1508260012?l=id</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-box' data-animate-effect='fadeInTop'>
                <div className='project' style={{ backgroundImage: 'url(images/tkon.png)', borderWidth: 1, borderColor: '000000' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>tkon.id</a></h3>
                      <span>tkon.id is a solution from a digital platform which provides a place where you can get opinion or suggestions from experts for every problem you have.</span><br />
                      <a href='https://play.google.com/store/apps/details?id=tkon.id'><span>https://play.google.com/store/apps/details?id=tkon.id</span></a>
                      <a href='https://apps.apple.com/us/app/tkon-id/id1544381431'><span>https://apps.apple.com/us/app/tkon-id/id1544381431</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-box' data-animate-effect='fadeInBottom'>
                <div className='project' style={{ backgroundImage: 'url(images/soundfren.png)' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>Soundfren by. Digital Amoeba</a></h3>
                      <span>Ever thought about getting serious in the Indonesian music industry? Clueless which to contact, or short in talents? Soundfren does more than helping you stay connected with other musicians and music communities</span><br />
                      <a href='https://play.google.com/store/apps/details?id=com.amoeba.soundfren'><span>https://play.google.com/store/apps/details?id=com.amoeba.soundfren</span></a>
                      <a href='https://apps.apple.com/id/app/soundfren/id1470982086'><span>https://apps.apple.com/id/app/soundfren/id1470982086</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-box' data-animate-effect='fadeInLeft'>
                <div className='project' style={{ backgroundImage: 'url(images/pejuang.png)' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>Pejuang: Aplikasi Agen Super</a></h3>
                      <span>Memulai bisnis keagenan dengan mudah!</span><br />
                      <a href='https://play.google.com/store/apps/details?id=com.bdn.pejuang'><span>https://play.google.com/store/apps/details?id=com.bdn.pejuang</span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='col-md-4 animate-box' data-animate-effect='fadeInRight'>
                <div className='project' style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
                  <div className='desc'>
                    <div className='con'>
                      <h3><a href='work.html'>Work 06</a></h3>
                      <span>Web Design</span>
                      <p className='icon'>
                        <span><a href='#'><i className='icon-share3' /></a></span>
                        <span><a href='#'><i className='icon-eye' /> 100</a></span>
                        <span><a href='#'><i className='icon-heart' /> 49</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className='row'>
              <div className='col-md-12 animate-box'>
                <p><a href='#' className='btn btn-primary btn-lg btn-load-more'>Load more <i className='icon-reload' /></a></p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    )
  }
}
