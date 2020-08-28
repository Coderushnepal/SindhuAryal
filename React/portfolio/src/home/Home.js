import React, { Fragment } from 'react';

import * as routes from "../constants/routes";
import Header from "../components/common/header";
import "../components/common/header/Header.css"

const HOME = () => (
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
    </div>

)

export default HOME;