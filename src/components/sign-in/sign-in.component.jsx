import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>

                <FormInput
                 name="email"
                 type="email" 
                 value={this.state.email}
                 handleChange={this.handleChange}
                 label="email"
                 required
                 />
        
                <FormInput
                 name="password"
                 type="password" 
                 value={this.state.password}
                 handleChange={this.handleChange}
                 label="password"
                 required
                 />
                <div className='buttons'>
                <CustomButton type="sumbit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign In With Google
                </CustomButton>
                </div>
                </form>
            </div>    

        )
    }

};

export default SignIn;