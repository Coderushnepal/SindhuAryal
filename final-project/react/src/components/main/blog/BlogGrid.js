import axios from 'axios';
import React, { Component } from 'react';

import BlogCard from "./BlogCard";
import Header from "../../common/header";
import Footer from "../../common/footer";

class BlogGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            //array ma data rakhne
            blogs: [],
        };
    }

    scrollPartnerRef = null;

    componentDidMount() {
        axios.get(`http://localhost:1234/blogs`)
        .then(res=> {
            // console.log(res.data.data);
            const blogs = res.data.data;
            this.setState({ blogs });
        });
    }

    render() {
        return (
            <div>
                 <Header />
                     <main>
                        <div className="container"
                            ref={(r) => (this.scrollPartnerRef = r)}>
                            {this.state.blogs.map(blog => (
                                <BlogCard key={blog.id} info={blog} />
                            ))}
                        </div>
                    </main>
                <Footer />
            </div>
        );
    }
}

export default BlogGrid;