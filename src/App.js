import React, { Component } from 'react';
import Header from './components/header'
import Home from './components/home'
import Resume from './components/resume'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Home></Home>
          <About></About>
          <Resume></Resume>
          <Skills></Skills>
          <Project></Project>
          <Blog></Blog>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
