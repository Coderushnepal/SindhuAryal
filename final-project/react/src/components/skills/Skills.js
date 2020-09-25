import React from 'react';
import Header from "../common/header";
import Footer from "../common/footer";
import './Skills.css'

const Skills = () => (
    <div>
        <Header />
        <div className="skills-section">
            <div className="container">
                <div className="skills-wrap clearfix">
                    <p className="skills-left">HTML</p>
                    <div className="skills-right">
                        <div className="skills html">90%</div>
                    </div>
                </div>

                <div className="skills-wrap clearfix">
                    <p className="skills-left">CSS</p>
                    <div className="skills-right">
                        <div className="skills css">80%</div>
                    </div>
                </div>

                <div className="skills-wrap clearfix">
                    <p className="skills-left">JavaScript</p>
                    <div className="skills-right">
                        <div className="skills js">65%</div>
                    </div>
                </div>

                <div className="skills-wrap clearfix">
                    <p className="skills-left">PHP</p>
                    <div className="skills-right">
                        <div className="skills php">65%</div>
                    </div>
                </div>

                <div className="skills-wrap clearfix">
                    <p className="skills-left">React</p>
                    <div className="skills-right">
                        <div className="skills react">45%</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Skills;