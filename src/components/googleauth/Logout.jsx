import React, { useContext } from 'react';
import { useGoogleLogout } from 'react-google-login';
import googleimg from '../../Assets/google.svg'
import { ProfileContext } from '../../profileContext' 
import { useStyles } from "./styles.js";

const clientId = '70561236797-7hgljouraeb3q8ivjh4rbekfps6m5o35.apps.googleusercontent.com'

function Logout() {
  const classes = useStyles();
  const [, setProfile] = useContext(ProfileContext)
  const onLogoutSuccess = () => {
    setProfile([])
  };

  const onFailure = () => {
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className={classes.gbutton}>
      <img src={googleimg} alt="google login" className={classes.gicon}></img>

      <span className={classes.gbuttonText}>Sign out</span>
    </button>
  );
}

export default Logout;