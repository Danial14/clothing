import React from 'react';
import ForMInput from '../forM_input.coMponent/forM_input.coMponent';
import './style/signin_style.scss';
import CustoMButton from '../custoM_button.coMponent/custoM_button.coMponent';
import { signInWithGoogle } from '../../firebase/firebase.util';


class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState((prevState, prevProps) => (
            {[name]: value}
        ))
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prevState, prevProps)=>{
            return {email: "", 
            password: ""}
        })
    }
    render(){
        return(
            <div className="signin">
                <h2 className="title">I already have an account</h2>
                <span className="subTitle">Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <ForMInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="Email"/>
                    <ForMInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="Password"/>
                    <div className="buttons">
                        <CustoMButton type="submit">Signin</CustoMButton>
                        <CustoMButton onClick={signInWithGoogle} isGoogleSignIn>Signin with Google</CustoMButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signin;