import React from 'react'
import {Container, Button} from "react-bootstrap";
import { AuthClient } from '../../../../node_modules/@dfinity/auth-client/lib/cjs/index';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import {Link} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    async function login(){
        const authClient = await AuthClient.create();
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toString();
        authClient.login({
            identityProvider:"https://identity.ic0.app/",
            onSuccess: () => {navigate("/home")},
            onerror:() => {alert("Invalid credentials")}
        })
    }

    return (
        <Container id = "login">
            <div>
                <div>Welcome to Decentralized Linkedin</div>
                <div id = "condition">
                    <div>
                        <small>Already created a profile with us? </small>
                    </div>

                    <Button variant = "success" onClick = {login}>Login</Button>
                </div>
                <div>
                    <div>
                        <small>New to Decentralized Linkedin?</small>
                    </div>

                    <Link to = "/create-profile">
                        <Button>Create profile</Button>
                    </Link>
                   
                </div>
            </div>
                
        </Container>

    )
}

export default Login