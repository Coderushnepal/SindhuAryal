import axios from 'axios';
import React, { Component } from 'react';

import BlogCard from "./BlogCard";
import Header from '../../common/header';
import Footer from "../../common/footer";
import Spinner from '../../common/Spinner';

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
        axios.get(`https://sindhu-final-project.herokuapp.com/blogs`)
        .then(res=> {
            // console.log(res.data.data);
            const blogs = res.data.data;
            this.setState({ blogs , isLoading:false   });
        });
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div>
                 <Header />
                    {isLoading ? (
                        <Spinner />
                    ) : (

                        <main>
                            <div className="container"
                                ref={(r) => (this.scrollPartnerRef = r)}>
                                {this.state.blogs.map(blog => (
                                    <BlogCard key={blog.id} info={blog} id={blog.id} />
                            )   )}
                            </div>
                        </main>
                    )
                    }
                <Footer />
            </div>
        );
    }
}

export default BlogGrid;