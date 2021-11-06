import React, { Component } from 'react'

export default class Sidebar extends Component {
  render () {
    return (
      <div>
        <div>
          <a href='#' className='js-colorlib-nav-toggle colorlib-nav-toggle' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'><i /></a>
          <aside id='colorlib-aside' role='complementary' className='border js-fullheight'>
            <div className='text-center'>
              <div className='author-img' style={{ backgroundImage: 'url(images/about_me.jpg)' }} />
              <h1 id='colorlib-logo'><a href='index.html'>Puji Andrianto</a></h1>
              <span className='email'><i className='icon-mail' /> Pujiandrianto.95@gmail.com</span>
              <span className='number'><i className='icon-phone' /> +62 851-5743-9445</span>
            </div>
            <nav id='colorlib-main-menu' role='navigation' className='navbar'>
              <div id='navbar' className='collapse'>
                <ul>
                  <li className='active'><a href='#' data-nav-section='home'>Introduction</a></li>
                  <li><a href='#' data-nav-section='about'>About</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href='#' data-nav-section='timeline'>Timeline</a></li>
                  <li><a href='#' data-nav-section='projects'>Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id='colorlib-main-menu'>
              <ul>
                <li><a href='https://www.facebook.com/Pujiks.DT' target='_blank'><i className='icon-facebook2' /> pujiandrianto</a></li>
                {/* <li><a href='https://twitter.com/ddbarochiya' target='_blank'><i className='icon-twitter2' /></a></li> */}
                <li><a href='https://www.instagram.com/pujiandrianto/' target='_blank'><i className='icon-instagram' /> Pujiandrianto</a></li>
                <li><a href='https://www.linkedin.com/in/pujiandrianto/' target='_blank'><i className='icon-linkedin2' /> Pujiandrianto</a></li>
                {/* <li><a href='https://github.com/Dhruv34788' target='_blank'><i className='icon-github' /></a></li>
                <li><a href='https://medium.com/@dhruv.barochia34788' target='_blank'><i className='icon-blogger2' /></a></li> */}
              </ul>
            </nav>
            <div className='colorlib-footer'>
              <p><small>
                  Made with <i className='icon-heart' aria-hidden='true' /> and <i className='icon-coffee' aria-hidden='true' />
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
