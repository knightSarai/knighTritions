import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {SignUpStart} from '../../../redux/user/user.action';
import Input from '../Form-input';
import Button from '../Form-button';
import SignUp from './sign-up.styles';

class SignUpForm extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    
    handleSubmit = async evt => {
        evt.preventDefault();
        const {SignUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('password don\'t match');
            return
        }
        SignUpStart({email, password, displayName})  
    }

    handleChange =  evt => {
        const {name, value} = evt.target;
        this.setState({
            ...this.state,
            [name]: value 
        })
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUp>
                <h1>I do Not Have an account</h1>
                <span>Sign Up with your email & password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name= "displayName"
                        value={displayName}
                        label="Display Name"
                        onChange={this.handleChange}
                        required
                    />
                    <Input 
                        label="Email" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={this.handleChange}
                        required
                     />
                    <Input 
                        label="Password" 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={this.handleChange}
                        required
                        />
                        <Input 
                            label="Confirm Password" 
                            type="password" 
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={this.handleChange}
                            required
                        />

                    <div className="buttons">
                        <Button type="submit">Sign Up</Button>
                    </div>
                </form>
            </SignUp>
        )
    }
    
}

export default connect(null, {SignUpStart})(withRouter(SignUpForm));