// Initialize Cloud Firestore through Firebase
rules_version = '2';
firebase.initializeApp({
  apiKey: "AIzaSyDv7OqQ4kRTWOhvRuKRDhoWfmg3njwipB4",
  authDomain: "tacoweb-a25a3.firebaseapp.com",
  projectId: "tacoweb-a25a3",
  });
  
  var db = firebase.firestore();

//Codigo para agregar registros a mi colección
     function agregar(){
      var nombre = document.getElementById('nombre').value;
      var apellidoP = document.getElementById('apellidoM').value;
      var apellidoM = document.getElementById('apellidoP').value;
      var telefono = document.getElementById('telefono').value;
      var direccion = document.getElementById('direccion').value;
      var correo = document.getElementById('correo').value;

      console.log(nombre, apellidoP, apellidoM, telefono, direccion, correo);
        db.collection("users").add({
        name: nombre,
        first: apellidoM,
        second: apellidoP,
        telefono: telefono,
        direction: direccion,
        cor: correo,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('apellidoP').value = '';
            document.getElementById('apellidoM').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('correo').value = '';
            window.confirm('Usuario Registrado, Recibiras un correo de Verificacion');    
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
  }

  //Codigo para Leer o Mostrar registros de mi colección
  function mostrar(){
    var user = firebase.auth().currentUser;
    var emai = user.email;
   var uid = user.uid;
   var tabla = document.getElementById('tabla'); //Leer el id de la tabla

    db.collection("users").where("cor", "==", emai)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tabla.innerHTML +=`
            <tr>
                <th "row">${doc.id}</th>
                <td>${doc.data().name}</td>
                <td>${doc.data().first}</td>
                <td>${doc.data().second}</td>
                <td>${doc.data().telefono}</td>
                <td>${doc.data().direction}</td>
                <td>${doc.data().cor}</td>
                <td><button class="btn btn-primary" onclick="editar('${doc.id}','${doc.data().name}','${doc.data().first}', '${doc.data().second}','${doc.data().telefono}','${doc.data().direction}','${doc.data().cor}')"><i class="fas fa-edit"></i></button></td>
                </tr> `
                formulario();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
/* <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')"><i class="fas fa-trash"></i></button></td> */ 
  //Funcion para Borrar documento
  function eliminar(id){
      db.collection("users").doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
  }

  //Funcion para editar Documento
  function editar(id, nombre, apellidoP, apellidoM, telefono, direccion, correo){
      console.log(id);
      var nombre = document.getElementById('nombre').value = nombre;
      var apellidoP = document.getElementById('apellidoP').value = apellidoP;
      var apellidoM = document.getElementById('apellidoM').value = apellidoM;
      var telefono = document.getElementById('telefono').value = telefono;
      var direccion = document.getElementById('direccion').value = direccion;
      var correo = document.getElementById('correo').value = correo;
       var boton = document.getElementById('boton');
      boton.innerHTML = 'Actualizar';

    boton.onclick = function(){
          var washingtonRef = db.collection("users").doc(id);

          var nombre = document.getElementById('nombre').value;
          var apellidoP = document.getElementById('apellidoP').value;
          var apellidoM = document.getElementById('apellidoM').value;
          var telefono = document.getElementById('telefono').value;
          var direccion = document.getElementById('direccion').value;
          var correo = document.getElementById('correo').value;

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
              name: nombre,
              first: apellidoP,
              second: apellidoM,
              telefono: telefono,
              direction: direccion,
              cor: correo
            })
          .then(() => {
              console.log("Document successfully updated!");
              boton.innerHTML = 'Editar';
              window.location.reload('');
              //window.location.replace('ConsultaCL.html'); 
              window.confirm('Datos actualizados exitosamente');    
          })
          .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
  }
  }
  
  function formulario(){
    var mostra = document.getElementById('mostra');
    mostra.innerHTML = `
    <style>@import 'consultas.css';</style>
      <h1><b class="text-center text-black">Formulario para Actualizar Datos </b></h1>
    </br>
     <pre class="text-center bg-primary text-white">Edite sus datos en el siguiente formulario </pre>
     </br>
       <div class="form-element">
        <label>Nombre:</label>
        <input type="text" id="nombre" placeholder="Introduzca su Nombre"  required/>
        </div>
      </br>
        <div class="form-element">
        <label>Apellido Paterno:</label> 
        <input type="text" id="apellidoP" placeholder="Introduzca su Apellido Paterno"  required/>
        </div>
      </br>
        <div class="form-element">
        <label> Apellido Materno: </label>
        <input type="text" id="apellidoM" placeholder="Introduzca su Apellido Materno"  required/>
        </div>
      </br>
        <div class="form-element">
        <label>Telefono y/o Celular:</label> 
        <input type="tel" id="telefono" placeholder="Introduzca su numero de telefono"  required/>
        </div>
      </br>
        <div class="form-element">
        <label>Direccion: </label>
        <input type="text" id="direccion" placeholder="Introduzca su direccion"  required/>
        </div>
      </br>
        <div class="form-element">
        <label>Correo Electronico: </label> 
        <input type="email" id="correo" placeholder="Introduzca su correo electronico"  required/>
        </div>
      </div>
      </br>
         <button class="btn btn-success btn-block btn-lg" id="boton" onclick="guardar()" ><b>Editar</b></button>
        
          <a onclick='href="consultaCL.html"'><button class="btn btn-danger btn-block btn-lg"><b>Cancelar</b></button></a>

      <!-- onclick='href="index.html"'><button class="btn btn-info btn-block btn-lg"><b>Regresar al Inicio</b></button></a>
 -->`
  }

  //Codigo para Leer o Mostrar registros de mi colección
  function mostrar1(){
   //var users = firebase.auth().currentUser;
   /*var emai = user.email;
   var uid = user.uid;*/
   var tabla = document.getElementById('tabla1'); //Leer el id de la tabla

   db.collection("users").onSnapshot((querySnapshot) => {
    //tabla.innerHTML = ''; //Limpiar mi tabla
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().last}`);
      tabla.innerHTML +=`
            <tr>
                <th "row">${doc.id}</th>
                <td>Nombre: ${doc.data().name}</br>Apellido Paterno: ${doc.data().second}</br>Apellido Materno: ${doc.data().first}</td>
                <td>Telefono: ${doc.data().telefono}</br>Direccion: ${doc.data().direction}</br>Correo: ${doc.data().cor}</td>
                <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')"><i class="fas fa-trash"></i></button> <button class="btn btn-primary" onclick="editar('${doc.id}','${doc.data().name}','${doc.data().first}', '${doc.data().second}','${doc.data().telefono}','${doc.data().direction}','${doc.data().cor}')"><i class="fas fa-edit"></i></button></td>
                </tr> `
               formulario();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }


