<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>

    <!--BOOSTSTRAP-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!---<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="bootstrap/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>-->
    <script src="bootstrap/js/jquery.min2.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min2.js"></script>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>  


    <!--FIREBASE-->
    <!-- The core Firebase JS SDK is always required and must be listed first-->
    <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>
    <!--<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-auth.js"></script>
     <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />-->
    
    <!--CSS-->
    <style>@import 'login.css';</style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
   
    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
     <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-auth.js"></script>
     <!---<script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>-->
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />  

    
</head>
<body style="background-color:black;">
<nav class="navbar navbar-expand-sm " style="background-color:DodgerBlue">
    <!-- Brand/logo -->
    <a class="navbar-brand" href="#">
        <img src="LOGO.png" alt="logo" style="width:50px;">
    </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <h1 class="text-white" href="#">Bienvenidos a Taco Web</h1> 
         </li> 
         <!--<button1 class="btn btn-danger btn-lg" onclick="cerrar()">Cerrar Sesion <i class="fas fa-remove" ></i></button>-->
      </ul>
    </nav>

     <!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>-->

<div class="row">
    <div class="col-sm-7">
        <img src="vector-mexican-chef-holding-plate-with-tacos.jpg" alt="Inicio" width="450" height="450" class="rounded">
        </br></br>
        <b style="color: magenta;">¿No tienes una cuenta?</b>
            <a onclick='href="registro.php"'><button class="btn btn-primary ">Registrate <i class="fas fa-arrow-right" style="color: blue;"></i></button></a>
         <!--<a onclick='href="agregar.html"'><button class="btn btn-info">Registrate <i class="fas fa-arrow-right" style="color: blue;"></i></button></a>--> 
        </br></br>
        <b style="color: orange;">¿Olvidaste tu contraseña?</b>
            <a onclick='href="recuperar.php"'><button class="btn btn-primary ">Recupera tu contraseña <i class="fas fa-arrow-right" style="color: blue;"></i></button></a>
        <!--<a onclick='href="agregar.html"'><button class="btn btn-info">Registrate <i class="fas fa-arrow-right" style="color: blue;"></i></button></a>-->
    </div>
        <div class="col-sm-5" class="responsive">
            <form >
            <img src="avatar1.jpg"  class="rounded-circle" alt="avatar" width="150" height="150">
                    </br> </br>
                <pre class="bg-primary text-white">Estimado usuario inicie sesion</pre> 
                <div class="form-element">
                    <label>Ingrese su Correo Electronico: </label><i class="fas fa-envelope"></i>
                    <input type="email" id="emailI" required />
                    <!--<input class="form-control" type="email" id="emailI" placeholder="Ejemplo@mail.com" required/></i></p>-->
                </div>
                <div class="form-element">
                    <label>Ingrese su Contraseña: </label> <i class="fas fa-key"></i>
                    <input  type="password" id="passwordI" required />
                    <!--input class="form-control" type="password" id="passwordI" placeholder="Introduzca su contraseña" required/></i></p>-->
                </div>
                <button type="submit" value="login" class="text-danger" style="color: lime" onclick="ingresar()">Iniciar Sesion <i class="fas fa-arrow-right" style="color: green;"></i></button></br></br>
            <!--<button class="btn btn-success" type="submit" onclick="ingresar()">Iniciar Sesion <i class="fas fa-arrow-right" style="color: lime;"></i></button>>-->       
            </form>
        </div>
    </div>
        <!--Incorporar app.js-->
        <script src="login.js"></script>
        

</body>
</html>