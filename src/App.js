import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Switch, useParams, Navigate } from "react-router-dom";
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import Account from './Account';
import Private from './Private ';
import NavBar from './NavBar';

function App() {
  const isLogedIn = true
  return (
    <div className="App" style={
      {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh"
      }
    }>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/private" element={<Private />} /> 
          <Route path="/user/:id" element={<Account />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
