import React from 'react';
import Header from "../common/header";
import Footer from "../common/footer";
import './WhoamI.css';

const WhoamI = () => (
    <div>
        <Header />

        {/* Who-am-I section */}
        <div class="content-wrap" style = {{ "background-color": "white" }}>
            <div class="container">
                <div class="primary col-md-12">
                    <main class="site-main">
                        <article>
                            <header class="entry-header">
                                <h1 class="entry-title single-title ta-left">
                                    whoami
                                </h1>
                                <div class="colored-line-left"></div>
                                <div class="clearfix"></div>
                            </header>

                            <div class="entry-content content-page">
                                <p class="ta-center">
                                    <strong>
                                        Sindhu Aryal |
                                    <a href="https://facebook.com/" className="color-text"> @CodedBrain </a>
                                    </strong>
                                    <br />
                                Date of Birth: 1998-May-19
                                <br />
                                sindhuaryal@gmail.com
                            </p>

                                <p class="text-decor ta-left">
                                    <strong>PROFILE</strong>
                                </p>
                                <p class="text-justify">
                                    Sindhu Aryal is a final year undergraduate student of Information Technology. She is a maniac as she loves reading and writing like a crazy person. Too much, too passionately. She is also strongly enthusiastic about  public speaking.
                            </p>
                                <p class="text-justify">
                                    When it comes to empowering girls in tech, she is always in. Due to which you can find her working at Butwal Coder Girls for 3 years from now. Currently,she is serving as a President of Butwal Coder Girls. She is an active member of WordPress Butwal Community. She has also worked with Rotaract Club of Tinau City and CSITAN-Rupandehi under different executive roles.
                            </p>
                                <p class="text-justify">
                                    Having a strong penchant for making punny jokes, she loves making people laugh. She strongly believes in giving back to the community that has helped us a lot. Which is why she always tries to contribute as much as she can.Besides this, she also loves solo travelling, exploring new places and experiencing new cultures.
                            </p>
                                <br />
                                <p class="ta-left">
                                    <span class="text-decor" >
                                        <strong>WORK & EXPERIENCE</strong>
                                    </span>
                                </p>
                                <ol className="ta-left">
                                    <li>
                                        President, 
                                    <strong>
                                            <a href="facebook.com/butwalcodergirls" className="color-text"> Butwal Coder Girls </a>
                                        (Jun 2020-Present)
                                    </strong>
                                    </li>
                                    <li>
                                        Regional Representative,
                                    <strong>
                                            <a href="https://nepal.girlsintech.org/" className="color-text"> Girls In Tech - Nepal </a>
                                        (Jun 2020-Present)
                                    </strong>
                                    </li>
                                    <li>
                                        General Member,
                                    <strong>
                                            <a href="http://ractinaucity.org/" className="color-text"> Rotaract Club of Tinau City </a>
                                        (2018- 2020)
                                    </strong>
                                    </li>
                                    <li>
                                        Host/ Publicity Wrangler
                                    <strong>
                                            <a href="https://butwal.wordcamp.org/2020/organizers/" className="color-text"> WordCamp Butwal 2020 </a>
                                        </strong>
                                    </li>
                                    <li>
                                        Core Team Member At
                                    <strong>
                                            <a href="https://facebook.com/" className="color-text"> WordPress Butwal Community </a>
                                        </strong>
                                    </li>

                                    <li>
                                        Executive Member,
                                    <strong>
                                            <a href="https://facebook.com/" className="color-text"> CSITAN-Rupandehi </a>
                                        (2018- 2019)
                                    </strong>
                                    </li>
                                    <li>
                                        Council Member,
                                    <strong>
                                            <a href="https://facebook.com/" className="color-text"> CSIT Association of BMC </a>
                                        (2017-2018)
                                    </strong>
                                    </li>

                                </ol>

                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>

        <Footer />
    </div>
)


export default WhoamI;