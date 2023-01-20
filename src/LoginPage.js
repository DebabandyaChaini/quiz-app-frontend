import React from 'react'
import './App.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import axios from 'axios'

function LoginPage(props) {
  const [allUsersData, setAllUsersData] = useState([])
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    let InputName = event.target.name
    let InputValue = event.target.value
    setLoginData({ ...loginData, [InputName]: InputValue })
    console.log(loginData)
    console.log(loginData['email'])
  }

  // useEffect(() => {
  //   axios.get('http://localhost:3002/allUsers')
  //     .then(response => {
  //       setAllUsersData(response.data)
  //     })
  // }, [])
  // console.log(allUsersData)


  // const isLogin = ()=>{
  //   db.mysignupcollections.find({email:loginData['email']})
  // }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
      <form >
        <Paper elevation={24} sx={{ height: 'auto', width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Login</h1>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }} >
            <TextField id="standard-basic" name="email" label="Email" variant="standard" type='email' sx={{ marginRight: 3, marginTop: 4 }} onChange={handleChange} />
            <TextField id="standard-basic" name="password" label="Password" variant="standard" type='password' sx={{ marginTop: 4, width: 200 }} onChange={handleChange} />
          </div>
          <Button variant="text" sx={{ color: 'grey', fontWeight: 500, marginTop: 5, marginBottom: 4 }} type='submit'>Login</Button>
          <p>Don't have an account? <a href="http://localhost:3000/signup">Signup</a></p>
        </Paper>
      </form>
    </div>
  )
}

export default LoginPage
