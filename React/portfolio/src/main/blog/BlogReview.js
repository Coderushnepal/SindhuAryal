import React, { Component } from 'react';

import iziToast from 'izitoast';
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

class BlogReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: "",
                comment : ""
            },
        }
    }

    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]:event.target.value,
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, comment } = this.state.formData;

        if(!email || !comment){
            let fieldName;
            if (!email) {
                fieldName = "Email";
            }  else {
                fieldName = "Comment"
            }

            iziToast.error({
                title: 'Sorry!',
                comment: `Can you please fill up the ${fieldName} field`,
            });
        } else {
            setTimeout(()=> {
                iziToast.success({
                    title: 'Really appreciate your reviews'
                });
                this.props.history.push('/');
            }, 1000)
        }  
    }



    render() {
        const { email, comment } = this.state.formData;
        return (
            <div>
                <Header />
                <section>

                <div className="contact-section">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            
                            <label>Email</label><br />
                            <input onChange={this.handleChange} type="email" id="email" name="email" value={email} required /><br />
                        
                            <label>Comment</label><br />
                            <textarea onChange={this.handleChange} type="text"  id="comment" name="comment" rows="10" cols="50"  value={comment} required />
                            
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                </section>

                <Footer />
            </div>
        )
    }



}
export default BlogReview;