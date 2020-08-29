import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import * as routes from '../../../constants/routes';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">

            <div className='container'>
                <div className="social-icons">
                    <div className='social-box'>
                        <a href="https://www.facebook.com/linktosindhu"> 
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
    
                    <div className='social-box'>
                        <a href="https://www.instagram.com/iamudhnis/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
    
                    <div className='social-box'>
                        <a href="https://www.youtube.com/channel/UCHFqNdH8Snse9oEVJG1V50Q/">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
    
                    <div className='social-box'>
                        <a href="https://github.com/Iamsindu">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
    
                    <div className='social-box'>
                        <a href="https://www.linkedin.com/in/sindhu-aryal/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright-text"> Copyright &copy; 2020. All rights reserved.  </p>
                    <p>
                        <a href="https://twitter.com/linktosindhu"> Sindhu Aryal | Official </a>
                    </p>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;