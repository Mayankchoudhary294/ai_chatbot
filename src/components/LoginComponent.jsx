import React, {useState} from "react";
import "../css/LoginComponent.css";
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginOnClick = () => {
        if (email === "user123" && password === "pass123") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            alert("Invalid username or password!");
        }
    };


    return (
        <div className="backgroundColor">
            <Navbar className="logo">
                <Navbar.Brand href="#home"><img className="logoImage" src={"/logo.jpg"} alt={"logo"}/> <span
                    className='logoName'>Aiworksquad</span></Navbar.Brand>
            </Navbar>
            <div className="login-box">
                <div className="card-body">
                    <h2 className="text-center login-heading">Welcome Back</h2>
                    <p className="text-center sign-in-text">Sign in to continue to Aiworksquad.</p>
                    <form>
                        <div className="form-group email-input-container">
                                <input
                                    type="email"
                                    className="form-control email-input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="form-group">
                            <div className="remember-me">
                                <label>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="remember-me"
                                    />
                                    Remember me</label>
                            </div>
                            <div className="forgot-password">
                                <Link to={"#"} >Forgot Password?</Link>
                            </div>
                        </div>
                        {(!loggedIn) ? (
                            <button type="button" className="btn btn-primary" onClick={handleLoginOnClick}>
                                Login
                            </button>
                        ) : (
                            <Link to="/chat">
                                <button type="button" className="btn btn-primary">
                                    Login
                                </button>
                            </Link>
                        )}
                    </form>
                </div>
            </div>
            <div className="footer-line">
                2023 Aiworksquad.
            </div>
        </div>
    );
};

export default LoginComponent;
