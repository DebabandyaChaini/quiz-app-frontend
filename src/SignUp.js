import React from 'react'
import './App.css';
import axios from 'axios'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { Navigate } from "react-router-dom";
import Private from './Private ';
import { Login } from '@mui/icons-material';

function SignUp(props) {
    const [isLogin, setIsLogin] = useState(false)
    const [userDetails,setUserDetails]= useState({})
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handelCallbackResponse(response) {
        console.log('Encoded JWD ID tocken: ' + response.credential)
        setUserDetails(jwt_decode(response.credential))
        console.log(userDetails)
        setIsLogin(true)
    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '833609034550-v8ivkksvbbcc9up9g2tuagt8og20jgd5.apps.googleusercontent.com',
            callback: handelCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: 'large' }
        );
    }, []);
    const handleChange = (event) => {
        let InputName = event.target.name
        let InputValue = event.target.value
        setData({ ...data, [InputName]: InputValue })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3002/allUsers',
            data: data
        })
            .then(response => {
                console.log(response.status)
            })
    }

    // const login=()=>{
    //     if(isLogin){
    //         return(
    //             <Navigate to='/private' />
    //             )
    //     }
    // }

    console.log(props.firstName)
    console.log(isLogin)
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Paper elevation={24} sx={{ height: 'auto', width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Signup</h1>
                    <div sx={{ display: 'flex' }}>
                        <TextField id="standard-basic" name="firstName" label="First Name" variant="standard" type='text' sx={{ marginRight: 3 }} onChange={handleChange} />
                        <TextField id="standard-basic" name="lastName" label="Last Name" variant="standard" type='text' onChange={handleChange} />
                    </div>
                    <div sx={{ display: 'flex' }}>
                        <TextField id="standard-basic" name="email" label="Email" variant="standard" type='email' sx={{ marginRight: 3, marginTop: 4 }} onChange={handleChange} />
                        <TextField id="standard-basic" name="password" label="Password" variant="standard" type='password' sx={{ marginTop: 4 }} onChange={handleChange} />
                    </div>
                    <Button variant="text" sx={{ color: 'grey', fontWeight: 500, marginTop: 5, marginBottom: 4 }} type='submit'>Submit</Button>
                    <p className='or'><span>Or</span></p>
                    <div id='signInDiv'></div>
                    <p>Have an account already? <a href="http://localhost:3000/login">Login</a></p>
                </Paper>
                {/* {login} */}
                {/* {isLogin ? (
                    <Navigate to='/private' />
                ) : (
                    // <Navigate to='/signup'/> 
                    <div></div>
                )} */}
            </form>
            <Private userDetails={userDetails}/>
        </div>
    )
}

export default SignUp
