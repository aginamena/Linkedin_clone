import React from 'react'
import {Container, Button} from "react-bootstrap";
import ReactDOM from "react-dom"
import { AuthClient } from '../../../../node_modules/@dfinity/auth-client/lib/cjs/index';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import {createRoot} from "react-dom/client";
import App from './App';
import GetUserInfoOrLogin from './GetUserInfoOrLogin';

function Login() {

    async function login(){
        const authClient = await AuthClient.create();
        const container = document.getElementById("root");
        const root = createRoot(container);
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toString();
        // const userPrincipal = identity._principal.toString();
        authClient.login({
            identityProvider:"https://identity.ic0.app/",
            // maxTimeToLive: BigInt(1000 * 1000 * 1000 * 15), // approximately 3 minutes
            //render the app component
            onSuccess: () => {root.render(<GetUserInfoOrLogin loggedInUserPrincipal = {principal}/>)},
            onerror:() => {alert("Invalid credentials")}
        })
    }

    return (
        <Container id = "login">
            <div>
                <div>Login to Decentralized Linkedin</div>
                <div id = "condition">
                    <small>Login using your internet identity and not username and password!</small>
                </div>
                <Button variant = "success" onClick = {login}>Login</Button>
            </div>
                
        </Container>

    )
}

export default Login