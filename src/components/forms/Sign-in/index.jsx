import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../../redux/user/user.action';
import Input from '../Form-input'
import SignIn from './sign-in.styles';
import Button from '../Form-button';

const SignInForm = ({ googleSignInStart, emailSignInStart }) => {
    const initialState = {
        email: '',
        password: ''
    }

    const [userCredentials, setUserCredentials] = useState(initialState);
    const { email, password } = userCredentials;
    const handleChange = evt => {
        const { name, value } = evt.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        const { email, password } = userCredentials;
        emailSignInStart({ email, password });

    }


    return (
        <SignIn >
            <h1>I Already Have An Account</h1>
            <span>Sign in with your email & password</span>
            <form onSubmit={handleSubmit}>
                <Input label="Email" type="email" name="email" value={email} required handleChange={handleChange} />
                <Input label="Password" type="password" name="password" value={password} required onChange={handleChange} />
                <div className="buttons">
                    <Button type="submit">Sign in</Button>
                    <Button
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign in with Google
                        </Button>
                </div>
            </form>
        </SignIn>
    )
}

export default connect(null, { googleSignInStart, emailSignInStart })(withRouter(SignInForm));