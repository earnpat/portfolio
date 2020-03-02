import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export class PageHome extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <About />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default PageHome
