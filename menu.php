<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Caompatible" content="ie=edge">
    <title>Materilize | Carrousel y Media</title>
   
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Raleway:500,600&display=swap" rel="stylesheet">
    
    <!--Materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!--CDN Boobstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <!-- CSS Estilos -->
    <link rel="stylesheet" href="css/estilos.css">

</head>
<body>
     <!--Navegacion de navbar-->
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Ver mi Pedido</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!---->

    <div class="container">
        <div class="row">
            <div class="col s12">
                <h1 class="center-align titulo">Hola!! soy su mesero que desea pedir</h1>

                <div class="carousel center-align">
                    <div class="carousel-item">
                        <h4><a class="subtitulo" href="http://www.engadget.com/2008/04/14/ben-heck-outdoes-himself-again-with-the-iigs-laptop/">Tacos</a></h4>                        
                        <div class="linea-division"></div>
                        <p class="tipo">Tacos de bistec, carne enchila y la rica campechana</p>
                        <img src="img/tacos.jpg" alt="">
                    </div>

                    <div class="carousel-item">
                        <h4 ><a class="subtitulo" href="http://www.engadget.com/2008/04/14/ben-heck-outdoes-himself-again-with-the-iigs-laptop/">Burritos</a></h4>                        
                        <div class="linea-division"></div>
                        <p class="tipo">Burritos de bistec, carne enchila y la rica campechana</p>
                        <img src="img/Burrito.jpg" alt="">
                    </div>

                    <div class="carousel-item">
                        <h4><a class="subtitulo" href="http://www.engadget.com/2008/04/14/ben-heck-outdoes-himself-again-with-the-iigs-laptop/">Tortas</a></h4>                        
                        <div class="linea-division"></div>
                        <p class="tipo">Le ofresemos Tortas de bistec, carne enchila y la rica campechana</p>
                        <img src="img/Tortas.jpg" alt="">
                    </div>

                    <div class="carousel-item">
                        <h4><a class="subtitulo" href="http://www.engadget.com/2008/04/14/ben-heck-outdoes-himself-again-with-the-iigs-laptop/">Bebidas</a></h4>                        
                        <div class="linea-division"></div>
                        <p class="tipo">Aguas frescas de sabor y Refrescos</p>
                        <img src="img/Bebidas.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
   <!--Materialize .js-->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- JS Main -->
    <script src="js/main.js"></script>
</body>
</html>