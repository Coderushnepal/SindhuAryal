import React, { Component } from 'react';
import { dummyBlogData } from "../../constants/dummyData";

import BlogCard from "./BlogCard";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

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

    //dummydata call
    fetchBlogs = async () => {
        setTimeout(() => {
            this.setState({
                blogs: dummyBlogData,
                isLoading: false,
            });
        }, 1000);
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    render() {
        // const { isLoading } = this.state;
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