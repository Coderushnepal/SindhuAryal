import React, { Component } from 'react';

import iziToast from 'izitoast';
import './Contact.css';
import Header from "../components/common/header";
import Footer from "../components/common/footer";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: "",
                email: "",
                address: "",
                phonenumber: "",
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
        const { name, email, address, phonenumber, message } = this.state.formData;

        if(!name || !email || !address || !phonenumber || !message){
            let fieldName;
            if (!name) {
                fieldName = "Name";
            } else if (!email) {
                fieldName = "Email";
            } else if (!address) {
                fieldName = "Address";
            } else if (!phonenumber) {
                fieldName = "Phonenumber";
            }  else {
                fieldName = "Message"
            }

            iziToast.error({
                title: 'Sorry!',
                message: `Can you please fill up the ${fieldName} field`,
            });
        } else {
            setTimeout(()=> {
                iziToast.success({
                    title: 'Thank you for reaching me out!',
                    message: `I will get back to you soon asap.`,
                });
                this.props.history.push('/');
            }, 1000)
        }  
    }



    render() {
        const { name, email, address, phonenumber, message } = this.state.formData;
        return (
            <div>
                <Header />
                <section>

                <div className="contact-section">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <label>Full Name</label><br />
                            <input onChange={this.handleChange} type="text" id="name" name="name" value={name} required/><br />
                            
                            <label>Email</label><br />
                            <input onChange={this.handleChange} type="email" id="email" name="email" value={email} required /><br />
                            
                            <label>Address</label><br />
                            <input onChange={this.handleChange} type="text" id="address" name="address" value={address} /><br />
                            
                            <label>Phone Number</label><br />
                            <input onChange={this.handleChange} type="text" id="phonenumber" name="phonenumber" value={phonenumber} /><br />
                            
                            <label>Message</label><br />
                            <textarea onChange={this.handleChange} type="text"  id="message" name="message" rows="10" cols="50"  value={message} required />
                            
                            <button className="btn submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                </section>

                <Footer />
            </div>
        )
    }



}
export default Contact;