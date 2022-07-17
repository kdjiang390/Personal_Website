import react from 'react';
import {NavLink} from 'react-router-dom';

class Contacts extends react.Component {
  render() {
    return (
        <div> 
            <div className="contacts_body">
                <div className = "contacts_introheader">
                    <div id ="nav">
                        <ul>
                            <li><NavLink to="/" exact="true">Home</NavLink></li>
                            <li><NavLink to="/aboutme">About Me</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/contacts">Contacts</NavLink></li>
                        </ul>
                    </div>
                    <section className="intro_paragraph">
                        <p style={{fontSize: '3em'}}>Content work in progress! Check back later :)</p>
                    </section>
                </div>
            </div>
            <footer>all work © Kenneth Jiang 2022 • all rights reserved</footer>  
        </div>
    );
  }
}

export default Contacts;