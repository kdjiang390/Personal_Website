import react from 'react';
import {NavLink} from 'react-router-dom';
import app1_mockup from '../assets/app1_mockup.png';
import app2_mockup from '../assets/app2_mockup.png';
import WIP from '../assets/WIP.jpg';


class Portfolio extends react.Component {
  render() {
    return (
        <body> 
            <div class="portfolio_bigwrapper">
                <div class = "portfolio_head_container">
                    <div id ="nav">
                        <ul>
                            <li><NavLink to="/" exact activeClassName = "active">Home</NavLink></li>
                            <li><NavLink to="/aboutme" activeClassName = "active">About Me</NavLink></li>
                            <li><NavLink to="/portfolio" activeClassName = "active">Portfolio</NavLink></li>
                            <li><NavLink to="/contacts" activeClassName = "active">Contacts</NavLink></li>
                        </ul>
                    </div>
                    <div class="portfolio_head_content">
                        <div class="portfolio_head_content_paragraph">
                            <h1>I like to build web application features that can keep visitors around </h1>
                            <br />
                            <p>How?</p> 
                            <br />
                            <p>By incorporating interactive elements that enhance user engagement and experiences</p>
                        </div>
                    </div>
                </div>
                <div class="portfolio_body_container">
                    <div class = "portfolio_body_grid">
                        <div class = "PBG1"><a href="https://app-1-streamlit.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h2>Project 1</h2>
                            <br />
                            <p>Random Generator</p>
                            <br />
                            <img id = "PBG1_image" src={app1_mockup} alt="Project 1" />
                        </a></div>
                        <div class = "PBG2">
                            <h2>Project 2</h2>
                            <br />
                            <p>Submission Form (W.I.P.)</p>
                            <br />
                            <img id = "PBG2_image" src={app2_mockup} alt="Project 2" />
                        </div>
                        <div class = "PBG3">
                            <h2>Project 3</h2>
                            <br />
                            <p>To Be Defined...</p>
                            <br />
                            <img id = "PBG3_image" src={WIP} alt="Project 3" />
                        </div>
                        <div class = "PBG4">
                            <h2>Project 4</h2>
                            <br />
                            <p>To Be Defined...</p>
                            <br />
                            <img id = "PBG4_image" src={WIP} alt="Project 4" />
                        </div>
                    </div>     
                </div>
            </div>
            <footer>all work © Kenneth Jiang 2022 • all rights reserved</footer>  
        </body>
    );
  }
}

export default Portfolio;