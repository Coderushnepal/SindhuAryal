import React, { Component } from "react";
import { Link } from 'react-router-dom';

import * as routes from "../../../constants/routes";

import "./Header.css";

class Header extends Component {

    render() {
        return (
                <header className="header">
                    <div className="container header-container clearfix">
                        <ul className="header-container-left left">
                            <li>
                                <Link to={routes.HOME} title="home" className="logo"> Sindhu | Official</Link>
                            </li>
                        </ul>
                        <ul className="header-container-right right ">
                            <li>
                                <Link to={routes.HOME} title="home"> HOME </Link>
                            </li>
                            <li>
                                <Link to={routes.WHOAMI} title="whoamI"> WHOAMI </Link>
                            </li>
                            <li>
                                <Link to={routes.SKILLS} title="SKILLS"> SKILLS </Link>
                            </li>
                            <li>
                                <Link to={routes.BLOG} title="BLOG"> BLOG </Link>
                            </li>
                            <li>
                                <Link to={routes.CONTACT} title="CONTACT"> CONTACT </Link>
                            </li>
                        </ul>
                    </div>
                </header>
        )
    }
}

export default Header;