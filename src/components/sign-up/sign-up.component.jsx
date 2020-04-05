import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {

        super();


        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('A jelszó nem egyezik');
            return;
        }

        try {
            const {user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className="sign-up">
                <h2 className="title">
                    Nincs még fiókom
                </h2>
                <span>Bejelentkezés emaillel és jelszóval</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type= 'text'
                        name= 'displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='név'
                        required
                    />
                    <FormInput
                        type= 'email'
                        name= 'email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type= 'password'
                        name= 'password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='jelszó'
                        required
                    />
                    <FormInput
                        type= 'password'
                        name= 'confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='jelszó megerősítése'
                        required
                    />
                    <CustomButton type='submit'>Regisztráció</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;