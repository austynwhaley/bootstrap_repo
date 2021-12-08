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
                    <p style={{fontSize: '1.4rem'}}>My Name is Austyn Whaley, I am 27 Years old and I was born in Cincinnati Ohio.</p> 
                    <p style={{fontSize: '1.4rem'}}>I grew up all around different areas in Northern Kentucky and went to a few different schools before I ended up in Belleuve,KY; and there is where I graduated from Bellevue High School in 2012.</p>
                    <p style={{fontSize: '1.4rem'}}>I currently I work at 'LiveShopper Sassie' on the IT team as a Support Developer.</p>
                    <p style={{fontSize: '1.4rem'}}> I've also recently learned blockchain and Web3 developemnt learing smart contracts on Etheruem</p>
                    <p style={{fontSize: '1.4rem'}}> I'm hard working and a dedicated developer constantly looking for new projects, new ideas and opportunities</p>
                    <p style={{fontSize: '1.4rem'}}> Thanks for reading and intrest!</p>
                </div>

                <a href="https://github.com/austynwhaley"><img height="100px" width="100px" src="./github-logo-icon-24.png" alt="github"/></a> 
                <a href="https://www.linkedin.com/in/austyn-whaley-a820421b5/"><img height="100px" width="100px" src="./linkedinicon.png" alt="linkedin"/></a>
                <a href="/pdf"><img height="100px" width="100px" src="./resumeicon.png" alt="resumeicon"/></a>

            </section>  
        </header>
    </div>
    )
}

export default About;