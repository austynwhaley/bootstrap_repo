import React from 'react';
import './style.css';
import profilePic from '../../assets/profilepicC-B.png'
import Navbar from "../../components/Navbar";

function Homepage () {
    return(
    <div className="home-page">

        <div className="background">
            <div className="word"><p style={{color: '#242424'}}>HTML</p></div>
            <div className="word"><p style={{color: '#242424'}}>CSS</p></div>
            <div className="word"><p style={{color: '#242424'}}>Javascript</p></div>
            <div className="word"><p style={{color: '#242424'}}>jQuery</p></div>
            <div className="word"><p style={{color: '#242424'}}>Bootstrap</p></div>
            <div className="word"><p style={{color: '#242424'}}>Bulma</p></div>
            <div className="word"><p style={{color: '#242424'}}>Node.js</p></div>
            <div className="word"><p style={{color: '#242424'}}>MySql</p></div>
            <div className="word"><p style={{color: '#242424'}}>MongoDB</p></div>
            <div className="word"><p style={{color: '#242424'}}>Handlebars.JS</p></div>
            <div className="word"><p style={{color: '#242424'}}>Sequelize</p></div>
            <div className="word"><p style={{color: '#242424'}}>Github</p></div>
            <div className="word"><p style={{color: '#242424'}}>Git Bash</p></div>
            <div className="word"><p style={{color: '#242424'}}>npm</p></div>
            <div className="word"><p style={{color: '#242424'}}>Postman</p></div>
            <div className="word"><p style={{color: '#242424'}}>Express</p></div>
            <div className="word"><p style={{color: '#242424'}}>React.js</p></div>
        </div>

        <header>

            <Navbar/> 

            <section className="index-header-content">
            <h1>Austyn Whaley</h1>
            <img src={profilePic} alt="" height="250px" width="250px"/>
            <h2>Full Stack Web Developer</h2>
            
            </section>
            
        </header>

    </div>
    )
}

export default Homepage;