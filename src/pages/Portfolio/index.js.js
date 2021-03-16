import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";

function Portfolio () {
    return(
    <div className="Portfolio">

        <div class="background">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>

            <header>
                <Navbar/>
                <section class="header-content">
                    <h1>Portfolio</h1>

                    <div class="row" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="30">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 portfolio-piece" >
                            <div >
                                <div>
                                    <img src="./LMSS.png" class="img-fluid" alt="Responsive image"/>
                                </div>
                                <div class="image-overlay">
                                    <p class="image-description">
                                        This is a full front-end and back-end application that uses node.js, express, mysql, and handlebars
                                    </p>
                                </div>
                                <div>
                                    <a class="text-center" href="https://makeyourmadlib.herokuapp.com/"><button>LibMaker</button></a>
                                    <a class="font-weight-light" href="https://github.com/austynwhaley/make-your-madlibs"><button>Github Repo</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 portfolio-piece" >
                            <div>
                                <div>
                                    <img src="./moviejamzSS.png" class="img-fluid"  alt="Responsive image"/>
                                </div>
                                <div>
                                    <p class="image-description">
                                        This application uses a two 3rd party api's to find movies and their soundtracks and gives you links to listen to the tracks
                                    </p>
                                </div>
                                <div>
                                    <a class="text-center" href="https://austynwhaley.github.io/moviejamz/"><button>Moviejamz</button></a>
                                    <a class="font-weight-light" href="https://github.com/austynwhaley/moviejamz-1/tree/main"><button>Github Repo</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div class="row" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="30">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 portfolio-piece" >
                            <div>
                                <div>
                                    <img src="./ZBSS.png" class="img-fluid" alt="Responsive image"/>
                                </div>
                                <div>
                                    <p class="image-description">
                                        This application uses express-handlebars and ORM's to insert/update/delete user input into a MySql database and post the data
                                    </p>
                                </div>
                                <div>
                                    <a class="text-center" href="https://secret-forest-42388.herokuapp.com/"><button>Zombie Burger</button></a>
                                    <a class="font-weight-light" href="https://github.com/austynwhaley/burger"><button>Github Repo</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="30">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 portfolio-piece" >
                            <div>
                                <div>
                                    <img src="./nTSS.png" class="img-fluid" style={{}} alt="Responsive image"/>
                                </div>
                                <div>
                                    <p class="image-description">
                                        This is an application that saves, deletes and stores typed notes into a database which is then displayed on the interface. 
                                    </p>
                                </div>
                                <div>
                                    <a class="text-center" href="https://aqueous-basin-86788.herokuapp.com/"><button>NoteTaker</button></a>
                                    <a class="font-weight-light" href="https://github.com/austynwhaley/notetaker"><button>Github Repo</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                        
                </section>
        </header>
    </div>
    )
}

export default Portfolio;