import React, { Component, Fragment } from 'react';
import iziToast from 'izitoast';

import './Admin.css';
import { login } from '../../services/loginService';

class Admin extends Component { 
    constructor(props){
        super(props);
        
        this.state = {
            formData: {
                email: "",
                password: ""
            }
        };
    }

    fetchData = async() => {
        try{
            const loginCredentials = await login(this.state.formData.email, this.state.formData.password);
            console.log(loginCredentials);
            localStorage.setItem('Token', loginCredentials.token);
            this.props.history.push('/dashboard');
        } catch (err) {
            iziToast.error({
                title:"login failed",
                message: "Invalid Credentials."
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]: event.target.value,
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault(); 
    };


    render(){
        const { email, password } = this.state.formData;

        return(
            <Fragment>
                 <div className="login_wrapper">
                    <div className="container-login">
                        <div className="wrap-login">
                            <form onSubmit={this.handleSubmit} className="login-form" >
                                <span className="login-form-title"> Admin Login </span>

                                <span className="txt"> Email </span>
                                <div className="wrap-input">
                                    <input 
                                        onChange={this.handleChange} 
                                        className="input-value" 
                                        type="email" 
                                        id="email" 
                                        name="email"  
                                        value={email} 
                                        required 
                                    />
					            </div>

                                <span className="txt"> Password </span>
                                <div className="wrap-input">
                                    <input 
                                        onChange={this.handleChange} 
                                        className="input-value" 
                                        type="password" 
                                        name="password" 
                                        id="myInput" 
                                        value={password}
                                    />
					            </div>

                                <div className="container-login-form-btn">
                                        <button type="submit" 
                                            className="login-form-btn"
                                            onClick={this.fetchData}
                                        > 
                                            LOG IN
                                        </button>
                                </div>
				            </form>
                        </div>
		            </div>
                </div>
            </Fragment>
        );
    }
}
export default Admin;