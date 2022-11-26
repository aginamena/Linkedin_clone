import React, {useEffect, useState} from 'react'
import {linkedin} from "../../../declarations/linkedin";

function GetUserInfoOrLogin({loggedInUserPrincipal}) {

    useEffect(() => {
        //if the user stored in the users list in the database, login to the app component
        //otherwise the user has to create their name, profile, image, job title, and so on..
        async function getLoggedInUserInfo(){
            const userInfo = await linkedin.getUserInfo();
            console.log("info is ", userInfo);
        }
        getLoggedInUserInfo()
    }, [])
    return (
        
        <div>GetUserInfoOrLogin</div>
    )
}

export default GetUserInfoOrLogin