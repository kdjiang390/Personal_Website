import react from 'react';
import {NavLink} from 'react-router-dom';

class Contacts extends react.Component {
  render() {
    return (
        <body> 
            <div class="contacts_body">
                <div class = "contacts_introheader">
                    <div id ="nav">
                        <ul>
                            <li><NavLink to="/" exact activeClassName = "active">Home</NavLink></li>
                            <li><NavLink to="/aboutme" activeClassName = "active">About Me</NavLink></li>
                            <li><NavLink to="/portfolio" activeClassName = "active">Portfolio</NavLink></li>
                            <li><NavLink to="/contacts" activeClassName = "active">Contacts</NavLink></li>
                        </ul>
                    </div>
                    <section class="intro_paragraph">
                        <p style={{fontSize: '3em'}}>Content work in progress! Check back later :)</p>
                    </section>
                </div>
            </div>
            <footer>all work © Kenneth Jiang 2022 • all rights reserved</footer>  
        </body>
    );
  }
}

export default Contacts;