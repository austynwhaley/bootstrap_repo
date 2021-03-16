import React from 'react';
import './style.css';
import Navbar from "../../components/Navbar";

function Contact () {
    return(
    <div className="contact">

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
            <section className="header-content">
                <h1>Contact</h1>

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card" style={{width: '30rem'}}>
                            <div className='card-body'>
                                <div className="form-group">
                                    <h2 class="text-center" style={{color:"#242424",padding: "10px"}}>Send Message</h2>
                                    <input class="input" type="text" placeholder="Name"/>
                                    <input class="input" type="text" placeholder="Email"/>
                                </div>

                                <div>
                                    <textarea name="message" id="message" cols="50" rows="7" placeholder="Message"></textarea>
                                </div>
                                <a href="#"><button>Submit</button></a>
                            </div>

                            <div class="personal-info" style={{color:"#242424"}}>
                                <h2 style={{color:"#242424"}}>Personal Info</h2>
                                <p style={{color:"#242424"}}>austyn_whaley@yahoo.com</p>
                                <p style={{color:"#242424"}}>(859)-905-7745</p>
                                <p >Cincinnati, OH 45212</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </header>
        

    </div>
    )
}

export default Contact;