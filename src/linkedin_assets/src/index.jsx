import React from "react"
import {createRoot} from "react-dom/client";
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthClient } from "../../../node_modules/@dfinity/auth-client/lib/cjs/index";
import Login from "./components/Login";

const init = async() => {
    const container = document.getElementById("root");
    const root = createRoot(container);
    const authClient = await AuthClient.create();
    if(await authClient.isAuthenticated()){
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toString();
        root.render(<App loggedInUserPrincipal = {principal}/>)
    }else{
        root.render(<Login />)
    }
}
init();
