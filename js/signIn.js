//Have you visited the landing page before? Check using cookie
document.cookie = "landingPage=visited; expires=Fri, 31 Dec 9999 23:59:59 GMT";

const signIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    
    //Sign-In sending location
    if(!document.cookie.includes('landingPage')) {
    window.location.href = 'info.html';
  } else {
    window.location.href = 'home.html'; 
  }
    
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    const err = {
      errorCode,
      errorMessage,
      email,
      credential
    };
    console.log(err);
  });
}
