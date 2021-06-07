 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDv7OqQ4kRTWOhvRuKRDhoWfmg3njwipB4",
    authDomain: "tacoweb-a25a3.firebaseapp.com",
    projectId: "tacoweb-a25a3",
    storageBucket: "tacoweb-a25a3.appspot.com",
    messagingSenderId: "461824047006",
    appId: "1:461824047006:web:c990b7a4c3acc9d3dfc88f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  observador();

  function registrar(){
    console.log("Click en Registrar");

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
    verificar();
    //window.confirm('Usuario Registrado, Recibiras un correo de Verificacion');
    console.log("Usuario Registrado...");
    //location="registroUs.html";
    window.location.replace('registroUs.html'); 
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode);
    console.log(errorMessage);
   window.alert('Este correo ya esta registrado en otra cuenta');

  });
  }
  
  function verificar(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log("Email enviado....");
    }).catch(function(error) {
      // An error happened.
      console.log("Error al mandar Email...");
    });
  }

   function observador(){
     firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      console.log("Login de idUsuario: ",uid, ", email: ",email);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Usuario sin iniciar sesion");
    }
  });
}
 
 function ingresar(){
  console.log("Click en Ingresar");

  var email = document.getElementById('emailI').value;
  var password = document.getElementById('passwordI').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
    console.log("El usuario inicio sesion");
    //location="menu.html";
    window.location.replace('MenuTacoWeb.html'); 
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}
 
 function cerrar(){
   firebase.auth().signOut().then(() => {
     // Sign-out successful.
     location='index.html';
     ///window.location.reload();
     console.log("Sesion Cerrada");
   }).catch((error) => {
     // An error happened.
     console.log(error);
   });
 }

 function recuperar(){

  var user = firebase.auth().currentUser;
  var newPassword =getASecureRandomPassword();

  user.updatePassword(newPassword).then(function(){
    //Update succesful
  }).catch(function(error){
    //An error happened
  })

}

function enviarCorr(){
  var auth = firebase.auth();
  var user = firebase.auth().currentUser;
  var emai = user.email;

  auth.sendPasswordResentEmail(emai).then(function(){
    //Email sent
  }).catch(function(error){
    //An error happend
  })
}
