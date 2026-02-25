import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Header';
import './login.css';


function Login() {
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
        try {
            event.preventDefault()
            console.log (formData)
            const response = await axios.post ("http://localhost:4000/user/login", formData)
            console.log (response.data)
            if (response.data.length === 0)
                return;
            else {
                localStorage.setItem ("isLoggedIn", true)
                navigate('/questions')
            }
            } catch (error) {
                console.log(error)
        }
    }

    return (
        <>
            <NavBar />
            <Form autoComplete="off" className='mx-auto mt-3 form-container'>
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

                <div className='button-box'>
                    <div>
                        <Button variant="primary" type="submit" onClick = {(event)=>handleSubmit (event)} >
                            Submit
                        </Button>
                    </div>

                    <div className='ms-3'>Not yet a registered user?</div>

                    <div>
                        <LinkContainer to="/register">
                            <Button className='ms-3' variant="primary" type="button" >Register</Button>
                        </LinkContainer>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default Login;
