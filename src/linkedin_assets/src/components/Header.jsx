import React from 'react'
import {Form, Container} from "react-bootstrap";
import {AiFillHome, AiFillMessage} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"
import Icons from './Icons';

function Header() {
  return (
    <Container style = {{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
        <Form style = {{marginLeft:"0", marginRight:"0"}}>
            <Form.Group >
                <Form.Control type="text" placeholder="Search" style = {{width:"300px"}}/>
            </Form.Group>
        </Form>
        <div style = {{display:"flex", width:"300px", justifyContent:"space-between"}}>
            <Icons icon = {<AiFillHome size={25} />} text = "Home" />
            <Icons icon = {<FaUserFriends size={25}/>} text = "My Network" />
            <Icons icon = {<AiFillMessage size={25}/>} text = "My Messages" />
        </div>
    </Container>
  )
}

export default Header
