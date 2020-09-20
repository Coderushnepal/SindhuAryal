import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import "./Blog.css";
import * as routes from '../../../constants/routes';


class BlogCard extends Component {

    render() {        
        const{ title, image, desc, created_at } = this.props.info;
        return (
            <Fragment>
                <div className="card">

                    <div class="blog__image">
                        <img src={image} alt =""></img>
                    </div>

                    <div class="blog__title">
                        <h2>{title}</h2>
                        <p>{created_at}</p>
                    </div>

                    <div className="blog__description">
                        {desc}
                        <button className="btn__readmore"> 
                        <Link to={routes.BLOGREVIEW} className="rm"> Read More </Link>
                        </button>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default BlogCard;