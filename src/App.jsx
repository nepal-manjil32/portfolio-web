import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import Projects from './components/Projects/Projects'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="Projects" title="My Latest Projects!"/>
        <Projects />
        <Title subTitle="Blog" title="My Latest Blogs!"/>
        <Blog />
        <Title subTitle="Contact Me" title="Let's Connect!"/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
