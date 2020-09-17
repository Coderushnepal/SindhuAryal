import React, { Component, Fragment } from 'react';

import iziToast from 'izitoast';
import './Admin.css';

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

        const { email, password } = this.state.formData;
    
        if( !email || !password ){
            let fieldName;
            if (!email) {
                fieldName = "Email";
            } else {
                fieldName = "Password"
            }
    
            iziToast.error({
                title: 'Sorry!',
                message: `Can you please fill up the ${fieldName} field`,
            });
        } else {
            setTimeout(()=> {
                iziToast.success({
                    title: 'Logged in!',
                    message: `Redirecting to Dashboard.`,
                });
                this.props.history.push('/dashboard');
            }, 100);
        }  
    };

    render(){
        const { email, password } = this.state.formData;
        return(
            <Fragment>
                 <div className="login_wrapper">
                    <div className="container-login">
                        <div className="wrap-login">
                        <button>Sign Up</button>
                        <button>Login</button>
                            <form onSubmit={this.handleSubmit} className="login-form" >
                                <span className="login-form-title"> Admin Login </span>

                                <span className="txt"> Email </span>
                                <div className="wrap-input">
                                    <input onChange={this.handleChange} className="input" type="email" id="email" name="email"  value={email} required />
					            </div>

                                <span className="txt"> Password </span>
                                <div className="wrap-input">
                                    <span className="btn-show-pass">
                                        <i id="eyeIcon" className="fa fa-eye" 
                                            //  onClick="myFunction()"
                                        ></i>
                                    </span>
                                    <input onChange={this.handleChange} className="input" type="password" name="password" id="myInput" value={password}/>
					            </div>

                                <div className="container-login-form-btn">
                                        <button type="submit" className="login-form-btn"> 
                                            Login
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