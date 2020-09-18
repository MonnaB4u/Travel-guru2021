import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createLoginFreamwork, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailPassword, signInWithEmailPassword } from './UserLoginMethod';
import './UserLogin.css'
import googelIcon from '../../images/Icon/google.png'
import fbIcon from '../../images/Icon/fb.png'
import { useForm } from "react-hook-form";

const UserLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        photo: "",
        email: "",
    })
    createLoginFreamwork();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // sign in with google 
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    // sign Out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    }
    // sign in with facebook
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    // submit handler
    const handleSubmitted = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailPassword(user.firstName, user.lastName, user.email, user.password)
                .then(res => {
                    handleResponse(res, false)
                    console.log(res.error)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailPassword(user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from);
                })
        }
        e.preventDefault();
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from)
        }
    }
    // handle change input
    let isformValid = true;

    const handleInput = (event) => {
        if (event.target.name === "email") {
            isformValid = (/\S+@\S+\.\S+/).test(event.target.value);
        }
        if (event.target.name === "password") {
            const passLength = event.target.value.length > 8;
            const passWord = /\d{1}/.test(event.target.value);
            isformValid = passLength && passWord;
        }
        if (isformValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }

    }
  
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5 user-account m-3">
                        <div className="user-form">
                            <h3 className="mb-4">
                                {
                                    !newUser && "Login"
                                }
                                {
                                    newUser && "Create an account"
                                }
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    newUser && <div>
                                        
                                        <input className="input-field" type="text" onBlur={handleInput} name="firstName" className="input-field" id="" placeholder="First Name" />
                                        <input className="input-field" type="text" onBlur={handleInput} name="lastName" id="" placeholder="Last Name" />
                                        <input className="input-field" type="email" onBlur={handleInput} name="email" id="" placeholder="Email" required />
                                        <input className="input-field" type="password" onBlur={handleInput} name="password" id="" placeholder="Password" required />
                                        <input className="input-field" type="password" onBlur={handleInput} name="confirmPassword" id="" placeholder="Confirm Password" required />
                                    </div>

                                }
                                {
                                    !newUser && <div>
                                        <input className="input-field" type="email" onBlur={handleInput} name="email" id="" placeholder="Email" required />
                                      
                                        <input className="input-field" type="password" onBlur={handleInput} name="password" id="" placeholder="Password" required />
                                        <div className="d-flex justify-content-between">
                                            <div className="check">
                                                <input type="checkbox" name="checkBox" id="" />
                                                <label for="check">Remember Me</label>
                                            </div>
                                            <div className="forgat-password">
                                                <p>Forgat Password</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <input type="submit" className="input-field submit-btn" onClick={handleSubmitted} value={newUser ? 'Sign up' : 'Login'} />
                                {
                                    newUser && <p>Already have an account ? <span onClick={() => setNewUser(!newUser)}> Login </span> </p>
                                }
                                {
                                    !newUser && <p>Don't have an account ? <span onClick={() => setNewUser(!newUser)}> Create an account</span> </p>
                                }
                            </form>
                            {/* <p>{user.error}</p>
                            <p> {user.name}</p> */}
                            {
                                user.success && <p>{newUser ? "Registration" : "loged in"} successfully</p>
                            }
                        </div>
                        <div className="other-signIn-method">
                            <div className="facebook">
                                <img src={fbIcon} className="float-left" alt="" />
                                <div className="btn text-center">
                                    <button onClick={fbSignIn}>Continue with facebook</button>
                                </div>
                            </div>
                            <div className="google">
                                <img className="float-left" src={googelIcon} alt="" />
                                <div className="btn text-center">
                                    <button onClick={googleSignIn}> Continue with google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserLogin;