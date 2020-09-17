import React, { Component, Fragment } from 'react';
// import { dummyBlogData } from "../../constants/dummyData";
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import "./Blog.css";


class BlogCard extends Component {

    render() {
        const { blogTitle, blogText, blogImage, blogAuth } = this.props.info;
        // console.log(blogImage);

        return (
            <Fragment>
                <div className="card">

                    <div class="blog__image">
                        <img src={blogImage} alt =""></img>
                    </div>

                    <div class="blog__title">
                        <h2>{blogTitle}</h2>
                        <p>{blogAuth}</p>
                    </div>

                    <div className="blog__description">
                        {blogText}
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