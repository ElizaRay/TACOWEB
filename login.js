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
    //clic1();
    console.log("Click en Registrar");

   //var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
      //location='menu.php';
    verificar();
    mostrar();
    console.log("Usuario Registrado...");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode);
    console.log(errorMessage);
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
     //location="menu.php";
     window.location.replace('MenuTacoWeb.html'); 
     //clic();
     console.log("El usuario inicio sesion");
     //mostrar();

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
     location='index.php';
     ///window.location.reload();
     console.log("Sesion Cerrada");
   }).catch((error) => {
     // An error happened.
     console.log(error);
   });
 }

 function mostrar(){
   var mostrar = document.getElementById('mostrar');
   mostrar.innerHTML = `
   <br/>
   
   <button class="btn btn-danger" onclick="location='index.php'"> <i class="fas fa-arrow-left"></i> Regresar</button>
        
   <button class="btn btn-warning" onclick="location='menu.php'">Ir a Menu <i class="fas fa-arrow-right"></i></button>`
 }
/* 
 function clic(){
  var clic = document.getElementById('clic');
  mostrar.innerHTML = `
  window.
  <a href='index.html'></a>`
}
*/
//<?php
 
/*include('config.php');
session_start();
 
if (isset($_POST['login'])) {
 
    $username = $_POST['username'];
    $password = $_POST['password'];
 
    $query = $connection->prepare("SELECT * FROM users WHERE USERNAME=:username");
    $query->bindParam("username", $username, PDO::PARAM_STR);
    $query->execute();
 
    $result = $query->fetch(PDO::FETCH_ASSOC);
 
    if (!$result) {
        echo '<p class="error">Username password combination is wrong!</p>';
    } else {
        if (password_verify($password, $result['PASSWORD'])) {
            $_SESSION['user_id'] = $result['ID'];
            echo '<p class="success">Congratulations, you are logged in!</p>';
        } else {
            echo '<p class="error">Username password combination is wrong!</p>';
        }
    }
}
 
?>
*/