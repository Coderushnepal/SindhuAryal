import React, { Component, Fragment } from 'react';
import "./Blog.css";


class BlogCard extends Component {

    render() {
        const { blogTitle, blogDescription, blogImage, blogAuth,postedOn } = this.props.info;
        // console.log(blogImage);

        return (
            <Fragment>
                <div className="container">
                    <div class="blog__image">
                        <img src={blogImage} alt =""></img>
                    </div>
                    <div class="blog__title">
                        <h2>{blogTitle}</h2>
                        <p>{blogAuth}</p>
                        <p>{postedOn}</p>
                    </div>

                    <div className="blog__description">
                        {blogDescription}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BlogCard;