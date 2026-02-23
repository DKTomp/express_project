import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Header';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

function Register() {
    const navigate = useNavigate()
    let sendData = false

    const [formData, setFormData] = useState ({
        userName: "",
        password: ""
    })

    const [checkPassword, setCheckPassword] = useState({
        valpassword: ""
    })

    const [usernameError, setUsernameError] = useState(false)
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const [passwordValidateError, setPasswordValidateError] = useState(false)

    function handleChange (event) {
            let inputName = event.target.name
            let inputValue = event.target.value
            setFormData ({...formData, [inputName]: inputValue})
    }

    function reenterPassword (event) {
        let inputvalname = event.target.name
        let inputValPassword = event.target.value
        setCheckPassword ({...checkPassword, [inputvalname]: inputValPassword})
    }

    async function handleSubmit (event) {
            event.preventDefault()
            console.log (formData)
            resetValidation()
            validateusername()
            validatePassword()
            matchPassword()
            console.log(sendData)
            if (sendData === true) {
                const response = await axios.post ("http://localhost:4000/user/register", formData)
                console.log (response.data)
                navigate('/')
            }
            return;
    }

    async function validateusername() {
        const response = await axios.post ("http://localhost:4000/user/validateusername", formData)
        console.log(response.data)
        if (response.data.length > 0) {
            setUsernameError(true)
            sendData = false
        }  
    }

    function matchPassword() {
        if (formData.password !== checkPassword.valpassword) {
            setPasswordMatchError(true)
            sendData = false
        }
    }

    function validatePassword() {
        const hasNumber = /\d/.test(formData.password)
        if (formData.password.length < 8 || hasNumber === false) {
            setPasswordValidateError(true)
            sendData = false
        }
    }

    function resetValidation() {
        sendData = true
        setUsernameError(false)
        setPasswordMatchError(false)
        setPasswordValidateError(false)
    }

    return (
        <>
            <NavBar />
            <div className='body-container'>
                <Form autoComplete="off" className='form1-container'>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <div className='input-container'>
                            <Form.Control
                                className='input'
                                type="text" 
                                name="userName" 
                                placeholder="Enter Username" 
                                onChange={(event)=>handleChange(event)} 
                            />
                            <p className='error-text'>{usernameError ? "User name already exists" : ""}</p>
                        </div>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div className='input-container'>
                            <Form.Control
                                className='input'
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={(event)=>handleChange(event)} 
                            />
                            <p className='error-text'>{passwordValidateError ? "Password must contain at least 8 characters and at least one number" : ""}</p>
                        </div> 
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formValidatePassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <div className='input-container'>
                            <Form.Control
                                className='input'
                                type="password" 
                                name="valpassword" 
                                placeholder="Password" 
                                onChange={(event)=>reenterPassword(event)} 
                            />
                            <p className='error-text'>{passwordMatchError ? "Passwords do not match" : ""}</p>
                        </div>   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            className='input'
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
            </div>
        </>
    )
}

export default Register