import react from 'react';
import {NavLink} from 'react-router-dom';
import RESUME from '../downloads/Resume.pdf';
import LINKEDIN from '../assets/icons8-linkedin-50.svg';
import GITHUB from '../assets/icons8-github-50.svg';
import INSTAGRAM from '../assets/icons8-instagram-50.svg';


class Home extends react.Component {
  render() {
    return (
        <div>   
            <div className = "index_introheader">
                <div id ="nav">
                    <ul>
                        <li><NavLink to="/" exact="true">Home</NavLink></li>
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                </div>
                <div id="intro_liners">
                    <h2>Hello,</h2>
                    <h1>I'm Kenneth Jiang</h1>
                    <h3>MBA student, hobby web developer, amateur photographer.</h3>
                    <h3>Based in Maryland, USA. </h3>
                    <ul>
                        <li><a id="btn_connect" href="https://www.linkedin.com/in/kdj390/" target="_blank" rel='noreferrer'>Let's Connect</a></li>
                        <li><a id="btn_resume" href={RESUME} download="KJ-Resume.pdf">View Resume</a></li>
                    </ul>
                </div>
                <div id="socialmedia">
                    <ul>
                        <li><a id="linkedin" href="https://www.linkedin.com/in/kdj390/" target="_blank" rel='noreferrer'><img src={LINKEDIN} alt="linkedin" width="50" height="50"></img></a></li>
                        <li><a id="github" href="https://github.com/kdjiang390" target="_blank" rel='noreferrer'><img src={GITHUB} alt="github" width="50" height="50"></img></a></li>
                        <li><a id="instagram" href="https://www.instagram.com/kenjazn3/" target="_blank" rel='noreferrer'><img src={INSTAGRAM} alt="instagram" width="50" height="50"></img></a></li>
                    </ul>
                </div>
            </div>
            <footer>All work © Kenneth Jiang 2022 • all rights reserved</footer>
        </div>
    );
  }
}

export default Home;