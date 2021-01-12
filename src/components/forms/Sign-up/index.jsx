import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignUpStart } from '../../../redux/user/user.action';
import Input from '../Form-input';
import Button from '../Form-button';
import SignUp from './sign-up.styles';

const SignUpForm = ({ SignUpStart }) => {
    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [signupData, setSignUpData] = useState(initialState);
    const { displayName, email, password, confirmPassword } = signupData;

    const handleSubmit = async evt => {
        evt.preventDefault();
        if (password !== confirmPassword) {
            alert('password don\'t match');
            return
        }
        SignUpStart({ email, password, displayName })
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setSignUpData({
            ...signupData,
            [name]: value
        })
    }

    return (
        <SignUp>
            <h1>I do Not Have an account</h1>
            <span>Sign Up with your email & password</span>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <div className="buttons">
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </SignUp>
    )

}

export default connect(null, { SignUpStart })(withRouter(SignUpForm));