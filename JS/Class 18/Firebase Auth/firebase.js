var firebaseConfig = {
    apiKey: "AIzaSyDEgIqZ18tOnWzRBUjU4YTpO3Abk3M9t6o",
    authDomain: "authapp-43361.firebaseapp.com",
    projectId: "authapp-43361",
    storageBucket: "authapp-43361.firebasestorage.app",
    messagingSenderId: "872229553621",
    appId: "1:872229553621:web:75d78f3288535a31ec295c"
  };


var app = firebase.initializeApp(firebaseConfig);


function signup(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
  });
    
  }


  function login(){
    var email = document.getElementById('Loginemail');
    var password = document.getElementById('Loginpassword');


    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
     console.log(user);
     window.location.href = './Home.html'
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
    });

  }