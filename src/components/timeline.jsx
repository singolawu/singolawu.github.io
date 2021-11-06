import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-skyshi">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Work at PT. Skyshi Digital Indonesia</a> <span>2018 - Present</span></h2>
                        <p>
                        Start my carrier as Mobile Developer with React Native, lately expand to flutter too.<br/>
                        My jobdesk on Skyshi are:<br/>
                        • Create Application from scratch or continue previous existing source code.<br/>
                        • Make sure the Application align based on Business Process & Design<br/>
                        • Build & Distributed App into Playstore & AppStore<br/>
                        • Create functional and technical application documents<br/>
                        • Daily Meet with Other team member
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Graduated from Muhammadiyah Surakarta University</a> <span>2014-2018</span></h2>
                        <p>
                        I have finished my college majoring in informatics.<br/>
                        some information i can share:<br/>
                        • GPA: 3.64<br/>
                        • experienced as chairman of HIMATIF (Himpunan Mahasiswa Teknik Informatika) in 2015 - 2016<br/>
                        • Internship at PKU Muhammadiyah Hospital Surakarta by creating an online-based patient queuing system<br/>
                        • Complete the final task with a voice input-based health companion application
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Work at Colombus Cash & Credit Madiun</a> <span>2013-2014</span></h2>
                        <p>Working as senior marketing staff at Colombus Electronics & Furnitures showroom located on Madiun City.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
