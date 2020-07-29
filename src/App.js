import React, { Component } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'

var ReactDOM = require('react-dom')
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 512 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  handleScrollToElement = (type) => {
    const intro = ReactDOM.findDOMNode(this.refs.intro)
    const about = ReactDOM.findDOMNode(this.refs.about)
    const timeline = ReactDOM.findDOMNode(this.refs.timeline)
    const project = ReactDOM.findDOMNode(this.refs.project)

    if (type === 'intro') {
      window.scrollTo(0, intro.offsetTop)
    } else if (type === 'about') {
      window.scrollTo(0, about.offsetTop + this.state.height)
    } else if (type === 'timeline') {
      window.scrollTo(0, timeline.offsetTop)
    } else if (type === 'project') {
      window.scrollTo(0, project.offsetTop)
    }
  }
  render() {
    return (
      <div id='colorlib-page'>
        <div id='container-wrap'>
          <Sidebar />
          <div id='colorlib-main'>
            <Introduction scrollTo={this.handleScrollToElement} ref={'intro'} />
            <About scrollTo={this.handleScrollToElement} ref={'about'} />
            <Timeline scrollTo={this.handleScrollToElement} ref={'timeline'} />
            <Projects scrollTo={this.handleScrollToElement} ref={'project'} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
