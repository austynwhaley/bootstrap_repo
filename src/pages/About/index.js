import React from 'react';
import './style.css';
import Navbar from "../../components/Navbar";

function About () {
    return(
    <div className="about-me">

        

        <div className="background">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
        </div>

        <header>

            <Navbar/>

            <section className='header-content'>
            <h1>About Me</h1>

                <div className="info">
                    <p style={{fontSize: '1.4rem'}}>My Name is Austyn Whaley, I am 26 Years old and I was born in Cincinnati Ohio.</p> 
                    <p style={{fontSize: '1.4rem'}}>I grew up all around different areas in Northern Kentucky and went to a few different schools before I ended up in Belleuve,KY; and there is where I graduated from Bellevue High School in 2012.</p>
                    <p style={{fontSize: '1.4rem'}}>I've had a lot of jobs growing up, but currently I work at 'Tri-County Furniture Restoration' where I've worked for the past 5 years doing woodwork and restoring antique furniture.</p>
                    <p style={{fontSize: '1.4rem'}}> I've recently enrolled in a Coding Bootcamp where I plan to learn new skills and take on a new career in Web Development.</p>
                </div>

                <a href="https://github.com/austynwhaley"><img height="100px" width="100px"  src={`${process.env.PUBLIC_URL}/github-logo-icon-24.png`} alt="github"/></a> 
                <a href="https://www.linkedin.com/in/austyn-whaley-a820421b5/"><img height="100px" width="100px"  src={`${process.env.PUBLIC_URL}/linkedinicon.png`} alt="linkedin"/></a>
                <a href="/pdf"><img height="100px" width="100px"  src={`${process.env.PUBLIC_URL}/resumeicon.png`} alt="resumeicon"/></a>

            </section>  
        </header>
    </div>
    )
}

export default About;