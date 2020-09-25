import React, { Component, Fragment } from 'react';
import "./SinglePage.css";

import Header from '../../common/header';
import Footer from '../../common/footer';

import { fetchBlogsById } from '../../../services/blogService';

class SinglePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {
                title: "",
                desc: " ",
                image: "",
                createdAt: ""
            },
        };
    }

    fetchFullBlog = async()  => {        
        const id= this.props.match.params.id;
        console.log(id);
            
        const data = await fetchBlogsById(id);
        // console.log(data);
            
        this.setState({
            blog:data,
        });
    }

    componentDidMount() {
        this.fetchFullBlog();
    }    

    render() {   
        // console.log(this.state.blog);
        const{ title, image, desc } = this.state.blog;
        // console.log(desc);
        
        const token= localStorage.getItem('Token');

        return (
            <Fragment>
                <Header />

                <div className="blog_wrap polaroid">
                    <div className="container">
                        { token ?
                            <div className="buttons">
                                <button className="btn btn-info"> Update </button>
                                <button className="btn btn-danger"> Delete </button> 
                            </div>
                            :null 
                        }
                        <h1 className="blog_title"> {title} </h1>
            
                        <img src={image} 
                            alt =""
                            className="single-img" 
                            style={{ width: "100%" }}
                        />

                        <p className="blog_description con">
                            {desc}
                        </p>
                    </div>
                    
                    <div className="icons_wrapper clearfix">
                        <div className="icons_left">
                            <i class="fas fa-heart red ">  </i>
                            <i class="far fa-comment">  </i>
                            <i class="far fa-paper-plane"></i>
                        </div>
                        <div className= "icons_right">
                            <i class="far fa-bookmark"></i>
                        </div>

                        
                                {/* 2 Likes */}
                        
                    </div>
                </div>


                <Footer />
            </Fragment>
        );
    }
}

export default SinglePage;