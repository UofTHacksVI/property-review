import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCyhqqTWxHKARkplMhWWNJeirEm0XeGBIU',
  authDomain: 'trueexprience.firebaseapp.com',
  databaseURL: 'https://trueexprience.firebaseio.com',
  projectId: 'trueexprience',
  storageBucket: 'trueexprience.appspot.com',
  messagingSenderId: '835985657872'
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

class AuthPage extends React.Component {
  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default AuthPage;
