import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../src/images/loginImg/loginBG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const history = useHistory();
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: ''
  })

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      sessionStorage.setItem('user', JSON.stringify(signedInUser))
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const handleFacebookSignIn = () => {
    const FBProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(FBProvider).then((result) => {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      sessionStorage.setItem('user', JSON.stringify(signedInUser))
      storeAuthToken();
    })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        console.log(error.errorMessage)
      });
  }


  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNum = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNum;
    }
    if (isFieldValid) {
      const newUserInfo = { ...loggedInUser }
      newUserInfo[event.target.name] = event.target.value;
      setLoggedInUser(newUserInfo)
    }
    else if (!isFieldValid) {
      const newUserInfo = { ...loggedInUser }
      newUserInfo.error = 'check your email & password'
      setLoggedInUser(newUserInfo)
    }
  }



  const handleSubmit = (event) => {
    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((userCredential) => {
          const newUserInfo = { ...loggedInUser }
          newUserInfo.error = '';
          newUserInfo.success = 'user created successfully';
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
          sessionStorage.setItem('user', JSON.stringify(newUserInfo))
          storeAuthToken();
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser }
          newUserInfo.error = error.message;
          newUserInfo.success = '';
          setLoggedInUser(newUserInfo)
        });
    }

    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          const newUserInfo = { ...loggedInUser }
          newUserInfo.error = '';
          newUserInfo.success = 'user login successfully';
          setLoggedInUser(newUserInfo);
          sessionStorage.setItem('user', JSON.stringify(newUserInfo))
          storeAuthToken();
          console.log('sign in user info', res.user);
        })
        .catch(error => {
          const newUserInfo = { ...loggedInUser }
          newUserInfo.error = error.message;
          newUserInfo.success = '';
          setLoggedInUser(newUserInfo)
        });
    }
    event.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('user name updated successfully');
    }).catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "85vh" }}>
        <div className="col-md-6 shadow p-5">
          <div>
            <form onSubmit={handleSubmit} action="">
              {
                newUser && <input className='form-control' type="text" onBlur={handleBlur} name="name" placeholder='Your Name' />
              }
              <br />
              <input className='form-control' type="text" onBlur={handleBlur} name="email" placeholder='Your Email' required /><br />
              <input className='form-control' type="password" onBlur={handleBlur} name="password" placeholder='Your Password' required />
              <br />
              <div className='d-flex justify-content-center'><input type="submit" className='btn btn-primary' value={newUser ? 'Sign up' : 'Sign in'} /></div>
            </form>
            <p style={{ color: 'red' }}>{loggedInUser.error}</p>
            <p style={{ color: 'green' }}>{loggedInUser.success}</p>
              {
                !newUser ? <small>Don't have an account ? <strong style={{fontSize:'1rem', cursor:'pointer'}} onClick={()=>setNewUser(!newUser)}>Create an account</strong> </small> : <small>Already has an account ? <strong style={{fontSize:'1rem', cursor:'pointer'}} onClick={()=>setNewUser(!newUser)}>Login</strong> </small>
              }
          </div>
          <div className="from-group mt-5 d-flex justify-content-between flex-wrap">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} />
              &nbsp;&nbsp;Sign in</button>
            <button className="btn btn-primary" onClick={handleFacebookSignIn}>
            <FontAwesomeIcon icon={faFacebook} />
              &nbsp;&nbsp;Sign in</button>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;