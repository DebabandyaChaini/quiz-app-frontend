import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

function Account() {
    const [userData, setUserData] = useState([])

    let id = useParams()
    let userID = id.id
    useEffect(() => {
        axios.get(`http://localhost:3002/user/${userID}`)
            .then(response => {
                setUserData(response.data)
            })
    }, [])

    return (
        <div className="App">
            <h1>{userData['firstName']}</h1>
        </div>
    );
}

export default Account;