import React from 'react'
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { Link } from 'react-router-dom';
import {v4} from 'uuid'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Login = () => {
  const userRef = useRef();
const errRef = useRef();
const [id,setid]=useState('');
const [user, setUser] = useState('');
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);

const [pwd, setPwd] = useState('');
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);


const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
    userRef.current.focus();
}, []);

useEffect(() => {
    setValidName(USER_REGEX.test(user));
}, [user]);

useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setid(v4())
}, [pwd]);

useEffect(() => {
    setErrMsg('');
}, [user, pwd]);

const handleLogin = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
        setErrMsg("");
        return;
    }
    let storedData = JSON.parse(localStorage.getItem('userData')) || [] ;
    const foundUserIndex = storedData.findIndex(
        (x) => x.userData.username.trim().toLowerCase() === user.trim().toLowerCase() && x.userData.password === pwd
      );
      if (foundUserIndex !== -1) {
          storedData[foundUserIndex].userData.isActive = 1;
            console.log(storedData[foundUserIndex].userData)
  
       
        localStorage.setItem('userData', JSON.stringify(storedData));
        window.location.href = '/shop';
    setSuccess(true);


      } else {
        // storedData[foundUserIndex].userData.isActive = 0;
alert('Please ,Register!!!')
setSuccess(false);
window.location.href = '/register';


      }
}
  return (
    <div className="all-register-page login">
   

            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
            <h1>Login</h1>
            <form onClick={handleLogin} className='login-form'>
                <label htmlFor="username">
                    Username:
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>


                <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>


                
                <button disabled={!validName || !validPwd }>Sign Up</button>
            </form>
            {/* <p>
                Already registered?<br />
                <span className="line">
                    <Link to="/register">Sign In</Link>
                </span>
            </p> */}
 
</div>
  )
}

export default Login