import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import "./Blog.css";

class BlogCard extends Component {

    componentDidMount() {
        axios.get(`https://sindhu-final-project.herokuapp.com/blogs`)
        .then(res=> {
            console.log(res.data.data);
            const {blogs} = res.data.data;
            this.setState(blogs);
        });
    }

    render() {        
        const{ title, image, desc, id} = this.props.info;

        // const truncate = (desc) => desc.length > 200 ? `${desc.substring(0, 200)}...` : desc;

        return (
            <Fragment>
                <div className="card">
                    <div className="blog__image">
                        <img src={image} alt =""></img>
                    </div>

                    <div className="blog__title">
                        <h2>{title}</h2>
                    </div>

                    <div className="blog__description">
                        {desc.length > 250 ? 
                        `${desc.substring(0, 250)}...` : 
                        desc}
                    </div>
                
                    <Link to={`/blogs/${id}`}>
                        <button className="btn__readmore"> Read More </button>
                    </Link>

                </div>
            </Fragment>
        );
    }
}

export default BlogCard;