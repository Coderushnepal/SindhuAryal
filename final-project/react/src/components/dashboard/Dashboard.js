import React, { Component } from 'react';
import iziToast from 'izitoast';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                title: "",
                desc: ""
            }
        };
    }

    handleLogOut = () => {
        localStorage.removeItem("Token");
        this.props.history.replace("/admin");
      };

    fetchData = () => {
        axios({
            method: "POST",
            url: "http://localhost:1234/blogs",
            data: {
                title: this.state.formData.title,
                desc: this.state.formData.desc,
            },
        })
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }

    handleChange = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value,
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, desc } = this.state.formData;

        if (!title || !desc) {
            let fieldName;
            if (!title) {
                fieldName = "Title";
            } else {
                fieldName = "Description";
            }

            iziToast.error({
                title: 'Oh no!',
                message: `Can you please fill up the ${fieldName} field`
            });
        } else {
            setTimeout(() => {
                iziToast.success({
                    title: 'Blog created successfully.',
                    message: `Redirecting to blogs`,
                });
                this.props.history.push('/blogs');
            }, 100);
        }
    }
    
    render() {
        const { title, desc } = this.state.formData;

        const token= localStorage.getItem('Token');

        return (
            <div className="login_wrapper">
                { token ? 
                <button className="button" onClick={this.handleLogOut}>logout </button>
                :null
                }
                <div className="container-login">
                    <div className="wrap-login">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            {/* <h1 className="center"> BLOGS CRUD </h1> */}
                            <span className="login-form-title"> Post a blog </span>

                            <span className="txt">Title</span>
                            <div className="wrap-input">
                                <input
                                    onChange={this.handleChange}
                                    className="input-value"
                                    type="text"
                                    name="title"
                                    value={title}
                                    required
                                />
                            </div>

                            <span className="txt"> Description </span>
                            <div className="wrap-input">
                                <textarea
                                    className="input-txtarea"
                                    onChange={this.handleChange}
                                    name="desc"
                                    value={desc}
                                    required>
                                </textarea>
                            </div>

                            <div className="container-login-form-btn">
                                <button
                                    onClick={this.fetchData}
                                    type="submit"
                                    className="login-form-btn"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;