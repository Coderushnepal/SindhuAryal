import React, { Component } from 'react';
import { dummyBlogData } from "../../constants/dummyData";

// import Spinner from '../../components/common/Spinner';

import BlogCard from "./BlogCard";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import * as toast from  '../../utils/toast';

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
        try {
                this.setState({
                    blogs: dummyBlogData,
                    isLoading: false,
                });

            toast.success({
                title: "yaa!!",
                message:"Blogs successfully retreived."
            })
        } catch (error){
            console.log(error);
            const errorMsg = error.response.data.message;
            toast.error({
                title: "Oh Snap!!",  message:errorMsg
              }); 
        }
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>
                 <Header />
                 {/* {isLoading ? (
                     <Spinner />
                 ) : ( */}
                     <main>
                        <div className="container"
                            ref={(r) => (this.scrollPartnerRef = r)}>
                            {this.state.blogs.map(blog => (
                                <BlogCard key={blog.id} info={blog} />
                            ))}
                        </div>
                    </main>
                 {/* )} */}
                <Footer />
            </div>
        );
    }
}

export default BlogGrid;