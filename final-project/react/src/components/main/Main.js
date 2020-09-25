import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Header from "../common/header";
import Footer from "../common/footer";
import '../../assests/css/style.css';


const Main = () => (
    <div>
        <Header />

        {/* Hero-section */}
        <section className="site-hero">
            <div className="container clearfix">
                <div className="row">
                    <div className="site-text">
                        <h1 className="site-heading">Howdy, I'm <strong>Sindhu Aryal</strong></h1>
                        <p className="site-subheading">A Web Developer by Passion. A passionately curious youth who values the necessity of creating and taking opportunities when they arrive. </p>
                        <Link to={routes.WHOAMI} className="btn btn-primary"> More On Me </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* What-I-DO Section */}
        <section className="services">
            <div className="section-overlay-layer">
                <div className="container">
                    <div className="section-header">
                        <h2 className="dark-text"> What I Do ? </h2>
                        <div className="colored-line"></div>
                        <div className="sub-heading">
                            root@TheSindhu:~#
                    </div>
                    </div>

                    <div className="services-wrap">
                        <div className="service_row col_first">
                            <div className="service-box">
                                <div className="single-service border-bottom-hover">
                                    <div className="service-icon">
                                        <a href="https://github.com/Iamsindhu">
                                            <i className="fas fa-code colored-text"></i>
                                        </a>
                                    </div>
                                    <h3>
                                        <a href="https://github.com/Iamsindhu" className="colored-text"> Web Development </a>
                                    </h3>
                                    <p> HTML5, CSS3, JavaScript, React </p>
                                </div>
                            </div>
                        </div>
                        <div className="service_row col_second">
                            <div className="service-box">
                                <div className="single-service border-bottom-hover">
                                    <div className="service-icon">
                                        <a href="https://www.facebook.com/ButwalCoderGirls/">
                                            <i className="fas fa-users colored-text"></i>
                                        </a>
                                    </div>
                                    <h3>
                                        <a href="https://www.facebook.com/ButwalCoderGirls/" className="colored-text"> Team Lead </a>
                                    </h3>
                                    <p> Empowering Girls in Tech</p>
                                </div>
                            </div>
                        </div>
                        <div className="service_row col_third">
                            <div className="service-box">
                                <div className="single-service border-bottom-hover">
                                    <div className="service-icon">
                                        <a href="https://github.com/Iamsindhu">
                                            <i className="fab fa-uikit colored-text"></i>
                                        </a>
                                    </div>
                                    <h3 className="colored-text">
                                        <a href="https://github.com/Iamsindhu" className="colored-text"> Design </a>
                                    </h3>
                                    <p> Figma, Photoshop, Illustrator, Indesign </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact-section */}
        <div className="contact-info" id="contact_section">
            <div className="section-overlay-layer">
                <div className="container">
                    <div className="row contact-links">
                        <div className="col-sm-4 contact-link-box col-xs-12">
                            <div className="icon-container">
                                <i className="far fa-envelope colored-text"></i>
                            </div>
                            <a href="https://facebook.com/" className="strong colored-text">csitan.sindhu@gmail.com</a>
                        </div>
                        <div className="col-sm-4 contact-link-box col-xs-12">
                            <div className="icon-container">
                                <i className="fas fa-map-marker-alt colored-text"></i>
                            </div>
                            <a href="https://facebook.com/" className="strong colored-text"> Butwal, Nepal </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>

)

export default Main;