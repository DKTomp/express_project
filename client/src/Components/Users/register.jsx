import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Header';
import axios from 'axios';

function Register() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState ({
        userName: "",
        password: ""
    })

  function handleChange (event) {
        let inputName = event.target.name
        let inputValue = event.target.value
        setFormData ({...formData, [inputName]: inputValue})
    }

  async function handleSubmit (event) {
        event.preventDefault()
        console.log (formData)
        const response = await axios.post ("http://localhost:4000/user/register", formData)
        console.log (response.data)
        if (response.data.length === 0)
            return;
        navigate('/')
    }

    return (
        <>
            <NavBar />
            <Form autoComplete="off" className='mx-auto' style= {{ maxWidth: '500px' }}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="userName" 
                        placeholder="Enter Username" 
                        onChange={(event)=>handleChange(event)} 
                    />     
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={(event)=>handleChange(event)} 
                    />    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email" 
                        onChange={(event)=>handleChange(event)} 
                    />    
                </Form.Group>
          
                <Button variant="primary" type="submit" onClick = {(event)=>handleSubmit (event)} >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Register