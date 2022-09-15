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
                    <h1>Get in touch</h1>
                    <section class="contact_form">
                        <form action="https://send.pageclip.co/TLqlWMpLSQsMhEKi399N8vcILRHuTzzL/ContactForm" class="pageclip-form" method="post">
                            <p>Any questions, comments, or ideas for improvements? Just write me a message!</p>
                            <input type="text" name="subject" placeholder="Enter Name" required/>
                            <input type="text" name="email" placeholder="Enter Email" required/>
                            <textarea type="text" name="message" placeholder="Enter Message" required></textarea>

                            <button type="submit" class="pageclip-form__submit">
                                <span>Submit</span>
                            </button>
                        </form>
                    </section>
                </div>    
            <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
            </div> 
            <footer>all work © Kenneth Jiang 2022 • all rights reserved</footer>
        </div>
    );
  }
}

export default Contacts;