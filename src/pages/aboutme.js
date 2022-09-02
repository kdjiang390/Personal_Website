import react from 'react';
import {NavLink} from 'react-router-dom';
import TESLA from '../assets/Tesla.jpg';
import UMD from '../assets/umd.jpg';
import LIBERTY from '../assets/liberty.jpg';
import PSU from '../assets/psu.jpg';
import CABS from '../assets/cabs.png';

class Aboutme extends react.Component {
  render() {
    return (
        <div>
            <div className="aboutme_body"> 
                <div className = "aboutme_introheader">
                    <div id ="nav">
                        <ul>
                            <li><NavLink to="/" exact="true">Home</NavLink></li>
                            <li><NavLink to="/aboutme">About Me</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/contacts">Contacts</NavLink></li>
                        </ul>
                    </div>
                    <div className="intro_paragraph">
                        <div className="intro_content">
                            <h1>Learn from <span style={{color: 'white'}}>the past</span></h1>
                            <h1>Live in <span style={{color: 'white'}}>the present</span></h1>
                            <h1> Plan for <span style={{color: 'white'}}>the future</span></h1>
                            <br />
                            <p>2014 - Present</p>
                        </div>
                    </div>
                </div>
                <div className="journey_background">
                    <div className="journey_container">
                        <div className="journey_content">
                            <h1>- My Journey -</h1>
                            <div className="journey_grid">
                                <img id= "tesla_image" src={TESLA} alt="" />
                                <div id="tesla_content">
                                    <h2 id="company">Tesla</h2>
                                    <h3 id="title">Intern, 2021 - Present</h3>
                                    <h3 id="location">Austin, TX</h3>
                                    <p>Landing a summer internship at Tesla was a dream come true for sure. 
                                        To me, it was the perfect opportunity to experience a new industry, work culture, and meet like-minded people. What could possibly be cooler than
                                        working for one of the pioneering company in the space and taking parts in the mission of revolutionize technology and energy development beyond imagination?  
                                        <br />
                                        <br />
                                        I was placed in an external-facing role, where I was able to build many new relationships, interact with and learn from true experts in their field. The works were challenging, but never boring. 
                                        <br />
                                        <br />                                
                                        Thanks to the nature of the role, I was able to rapidly accumulate industrial knowledge and grow my skillsets, and in return, deliver solid and measurable performances in a short span of time.
                                        <br />
                                        <br />
                                        This was truly an exciting and memorable experience, and I am incredibly grateful for all of the support that I've received from the amazing folks around me. 
                                    </p>
                                </div>
                                <img id="umd_image" src={UMD} alt="" />
                                <div id="umd_content">
                                    <h2 id="company">University of Maryland</h2>
                                    <h3 id="title">MBA Student, 2021 - Present</h3>
                                    <h3 id="location">College Park, MD</h3>
                                    <p> Following my departure from Liberty Hardware, I decided to continue my academic career at the Smith School of Business, University of Maryland (UMD)
                                        and enrolled in the two-year, Master of Business Administration (MBA) program.  
                                        <br />
                                        <br />
                                        Here at Smith, I'm surrounded by incredibly talented classNamemates and helpful faculties who are always willing
                                        to support my growth, both personally and professionally. I am thankful for having them by my side on this journey.
                                        <br />
                                        <br />
                                        One of the highlights of my first year at Smith was participating in the
                                        <u><a id = "ICF" href="https://www.rhsmith.umd.edu/centers/social-value-creation/programs/impact-consulting-fellowship" target="_blank" rel='noreferrer' > Impact Consulting Fellowship</a></u>, 
                                        a Smith-exclusive, 3-month program that encourages student to put classNameroom knowledge into 
                                        practice and to build real-world applications for social value creations. I was selected to lead a team of 6 students to take on a consulting project in partnerships 
                                        with a UMD alumni-found technology startup company named <u><a id= "hopehydration" href= "https://hopehydrate.com/" target="_blank" rel='noreferrer' > Hope Hydration</a></u>.
                                        <br />
                                        <br />
                                        By the end of the program in the Fall, We have helped build a sustainable business model focusing on scalability for the company's initial stage of growth, implemented performance 
                                        metrics and playbooks for measuring growth successes, and helped the company establish a connection with the city mayor with the hope that it can grow into a competitive infrastructure solution provider.
                                    </p>
                                </div>
                                <img id="liberty_image" src={LIBERTY} alt="" />
                                <div id="liberty_content">
                                    <h2 id="company">Liberty Hardware</h2>
                                    <h3 id="title">Product Portfolio Manager, 2020 - 2021</h3>
                                    <h3 id="location">Winston-Salem, NC</h3>
                                    <p>At the beginning of 2020, I was presented with the opportunity to take on a role in another business unit within Masco. 
                                        The role operates in the Marketing domain with a heavy focus on product management. Being the adventurous type of person I am,
                                        I accepted the role and moved to North Carolina. Next thing you know, I am the new Product Portfolio Manager for our eCommerce Channel team.
                                        <br />
                                        <br />
                                        2020 was an unusual year. The COVID-19 pandemic took over the world by surprise and I was forced to adopt a completely virtual lifestyle not long after the outbreak. 
                                        But because of the nature of our work, my team was the first to fully adapt to the changes and was able to turn it into our advantages; We were able to capture large amounts of
                                        market shares from the influx of eCommerce demands and had grown our product lines with over 1000 new items. By the end of the year, we were able to grow our channel sales by over 15% YOY.
                                        <br />
                                        <br />
                                        During my time at Liberty Hardware, the pandemic made me realize how much I had missed my home and my family, and that none of these successes would matter without them by  
                                        my side. At the end of 2020, I left the company to reunite with my family.
                                    </p>
                                </div>
                                <img id="cab_image" src={CABS} alt="" />
                                <div id="cab_content">
                                    <h2 id="company">Masco Cabinetry</h2>
                                    <h3 id="title">Supply Chain Analyst, 2018 - 2020</h3>
                                    <h3 id="location">Ann Arbor, MI</h3>
                                    <p>After graduation, I joined Masco Corporation, one of the largest home improvement product manufacturers
                                        in the world. It was clear to me at the time that I'm ready to step foot into the corporate world and begin a new chapter in my book.
                                        <br />
                                        <br />
                                        I started my role as a Supply Chain Analyst joining the Direct Material Purchasing team to provide support on day-to-day operations and projects.
                                        <br />
                                        <br />
                                        We were responsible for keeping the company's manufacturing lines up and running smoothly with abundant raw materials while continuously 
                                        exploring cost-saving opportunities. By the end of 2019, We've generated over $10M in cost savings and have also expanded our sourcing operations to multiple 
                                        global locations like Thailand and Vietnam.
                                        <br />
                                        <br /> 
                                        I would not trade my tenure at Masco Cabinetry for anything. I was incredibly fortunate to meet some of the brightest minds in the industry
                                        and made many lifelong friends along the way.
                                    </p>
                                </div>
                                <img id= "psu_image" src={PSU} alt="" />
                                <div id="psu_content">
                                    <h2 id="company">Penn State University</h2>
                                    <h3 id="title">Undergraduate Student, 2014 - 2018</h3>
                                    <h3 id="location">University Park, PA</h3>
                                    <p>This is the beginning. This is the place where I learned that there's a much bigger world out there than my hometown in Virginia. 
                                        <br />
                                        <br />
                                        At Penn State, not only was I offered the freedom to choose my path, but I was also given the opportunity to explore my own unique perspective of things.
                                        <br />
                                        <br />
                                        But first, I had to meet people.
                                        <br />
                                        <br />
                                        Luckily, Penn State has one of the largest student populations and alumni networks in the country. The people and the communities were so welcoming that I was able to blend right in.
                                        We danced all night at <u><a id = "thon" href="https://thon.org/" target="_blank" rel='noreferrer' >THON</a></u>, learned about the history behind our lengendary football coach Joe Paterno, chanted "We Are!" at the 'White' Out games,
                                        and, of course, took graduation photos at the Lion Shrine.
                                        <br />
                                        <br />
                                        Like many others, I was able to find an academic subject that interests me and graduate successfully at the end of my fourth year.
                                        <br />
                                        <br />
                                        I am incredibly grateful for all the people that had made my stay at Penn State one of the most
                                        memorable experiences in my life. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="community_background">
                    <div className = "community_container">
                        <div id="community_text">
                            <h1>- My Communities -</h1>
                            <p>The people in my life are everything to me. Here are a few communities in which I am most active:</p>
                        </div>
                        <div className="community_grid">
                            <div className="fza_wrapper">
                                <div id="fza_text"><a href="https://www.fuzhouamerica.com/" target="_blank" rel='noreferrer' >
                                    <h2>Fuzhou, America (FZA) 👫🏻🧑🏻‍🤝‍🧑🏻</h2>
                                    <p>A community connecting Fuzhou Americans to socialize, network, and celebrate heritage.</p>
                                    <br />
                                    <p>#Identity</p>
                                    <p>#AsianAmerican</p>
                                </a></div>
                            </div>
                            <div className="stackoverflow_wrapper">
                                <div id="stackoverflow_text"><a href="https://stackoverflow.com/" target="_blank" rel='noreferrer' >
                                    <h2>Stack Overflow 👨‍💻</h2>
                                    <p>A community-based space to find and contribute answers to technical challenges in the software development domain.</p>
                                    <br />
                                    <p>#Learning</p>
                                    <p>#Productivity</p>
                                </a></div>
                            </div>
                            <div className="medium_wrapper">
                                <div id="medium_text"><a href="https://medium.com/" target="_blank" rel='noreferrer' >
                                    <h2>Medium.com 📰</h2>
                                    <p>A tech. space-focused open writing platform where bloggers can write, share, publish their stories to the public audience.</p>
                                    <br />
                                    <p>#Storytelling</p>
                                    <p>#Learning</p>
                                </a></div>
                            </div>
                            <div className="dribbble_wrapper">
                                <div id="dribble_text"><a href="https://dribbble.com/" target="_blank" rel='noreferrer' >
                                    <h2>Dribbble 🎨</h2>
                                    <p>One of the world’s leading spaces for freelance content creators to share, grow, and connect.</p>
                                    <br />
                                    <p>#Creativity</p>
                                    <p>#Hobby</p>
                                </a></div>
                            </div>
                            <div className="behance_wrapper">
                                <div id="behance_text"><a href="https://www.behance.net/" target="_blank" rel='noreferrer' >
                                    <h2>Behance 🎭</h2>
                                    <p> World's largest creative network for showcasing and discovering creative work.</p>
                                    <br />
                                    <p> #UI/UX</p>
                                    <p>#Design</p>
                                </a></div>
                            </div>
                            <div className="fishbowl_wrapper">
                                <div id="fishbowl_text"><a href="https://www.fishbowlapp.com/" target="_blank" rel='noreferrer' >
                                    <h2>FishBowl 🐟</h2>
                                    <p>Fishbowl is where professionals go to connect and talk in a new era of remote work.</p>
                                    <br />
                                    <p>#SocialMedia</p>
                                    <p>#Networking</p>
                                </a></div>
                            </div>
                            <div className="lifeat_wrapper">
                                <div id="lifeat_text"><a href="https://www.lifeat.io/" target="_blank" rel='noreferrer' >
                                    <h2>Lifeat.io ⛱️</h2>
                                    <p>An open-source web app providing virtual study and work spaces from around the world.</p>
                                    <br />
                                    <p>#Studyspace</p>
                                    <p>#Productivity</p>
                                </a></div>
                            </div>
                            <div className="athleanx_wrapper">
                                <div id="athleanx_text"><a href="https://www.reddit.com/r/Athleanx/" target="_blank" rel='noreferrer' >
                                    <h2>Athlean-X 💪</h2>
                                    <p>A fitness program dedicated to providing science-based bodybuilding lessons & tips.</p>
                                    <br />
                                    <p>#Health</p>
                                    <p>#Fitness</p>
                                </a></div>
                            </div>
                            <div className="atlassian_wrapper">
                                <div id="atlassian_text"><a href="https://community.atlassian.com/" target="_blank" rel='noreferrer' >
                                    <h2>Atlassian 👨‍💼</h2>
                                    <p>A community dedicated to connecting and provide learning opportunities to aspiring developers and project managers.</p>
                                    <br />
                                    <p>#Growth</p>
                                    <p>#Networking</p>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <footer>all work © Kenneth Jiang 2022 • all rights reserved</footer>  
        </div>
    );
  }
}

export default Aboutme;