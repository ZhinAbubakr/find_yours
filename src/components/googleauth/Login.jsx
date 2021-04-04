import React, { useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import googleimg from '../../Assets/google.svg'
import './style.css'

// refresh token
import { refreshTokenSetup } from './refreshToken';
import { ProfileContext } from '../../profileContext' 

const clientId = '70561236797-7hgljouraeb3q8ivjh4rbekfps6m5o35.apps.googleusercontent.com'

function Login() {
  const [, setProfile] = useContext(ProfileContext)

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setProfile(res.profileObj)
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="gbutton">
      <img src={googleimg} alt="google login" className="gicon"></img>

      <span className="gbuttonText">Sign in with Google</span>
    </button>
  );
}

export default Login;
