import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
    const [state, dispatch] = useStateValue();
    

    const signIn = () => {
        //sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
           
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message)); 

    };
    return (
        <div className="login" >
            <div className="lohin__logo">
                <img
                  src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/xfxlo3xqlib9h2dv5rfr"
                  alt=""
                />
                <img
                   src="https://collegeconnect.ie/wp-content/themes/html5blank-stable/img/logo.png"
                   alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
