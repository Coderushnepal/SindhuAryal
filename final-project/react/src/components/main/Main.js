import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import Header from "../common/header";
import Footer from "../common/footer";


const Main = () => (
    <div>
        <Header />
       
        <section className="site-hero">
            <div className="container clearfix">
                <div className="row">
                    <div className="site-text">
                        <h1 className="site-heading">Howdy, I'm <strong>Sindhu Aryal</strong></h1>
                        <p className="site-subheading">A Web Developer by Passion.Live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <Link to={routes.WHOAMI} className="btn btn-primary"> More On Me </Link>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />
    </div>

)

export default Main;