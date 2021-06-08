firebase.initializeApp({
    apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
    authDomain: "tacoweb-800f7.firebaseapp.com",
    projectId: "tacoweb-800f7",
    /*storageBucket: "tacoweb-800f7.appspot.com",
    messagingSenderId: "937891101756",
    appId: "1:937891101756:web:5e2b9f06d3251c3bb99739"
    */
  }); 
  
  //Agregar Registro
  var db = firebase.firestore();
  var Tabla = document.getElementById('Tabla1');
  var Tabla2 = document.getElementById('Tabla2');
  var Tabla3 = document.getElementById('Tabla3')
  

  db.collection("Burritos").onSnapshot((querySnapshot) => {
              Tabla.innerHTML = '';//limpia mi tabla
              querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().Burritos}`);
              Tabla.innerHTML += `
              <tr>
                  <th scope="row">${doc.id}</th> 
                  <td>${doc.data().Burritos}</td>
                  <td>${doc.data().Preparacion1}</td>
                  <td>${doc.data().Preparacion2}</td>
                  <td>${doc.data().Preparacion3}</td>
                  <td>${doc.data().Tamaño}</td>
                  <td>${doc.data().cantBurritos}</td>
                  <td>${doc.data().PagarBurritos}</td>
              </tr>
              `
             
          });
      });

      db.collection("Tacos").onSnapshot((querySnapshot) => {
        Tabla2.innerHTML = '';//limpia mi tabla
        querySnapshot.forEach((doc) => {
        console.log("/*****************Tacos********************/")
        console.log(`${doc.id} => ${doc.data().Tacos}`);
        Tabla2.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th> 
            <td>${doc.data().Tacos}</td>
            <td>${doc.data().Picadillo}</td>
            <td>${doc.data().Nopales}</td>
            <td>${doc.data().cantTacos}</td>
            <td>${doc.data().PagarTacos}</td>
            
        </tr>
        `
       
    });
});

db.collection("Tortas").onSnapshot((querySnapshot) => {
    Tabla3.innerHTML = '';//limpia mi tabla
    querySnapshot.forEach((doc) => {
    console.log("/*********Tortas****************************/")
    console.log(`${doc.id} => ${doc.data().Torta}`);
    Tabla3.innerHTML += `
    <tr>
        <th scope="row">${doc.id}</th> 
        <td>${doc.data().Torta}</td>
        <td>${doc.data().Preparacion1}</td>
        <td>${doc.data().Preparacion2}</td>
        <td>${doc.data().Preparacion3}</td>
        <td>${doc.data().cantTortas}</td>
        <td>${doc.data().PagarTortas}</td>
        
    </tr>
    `
   
});
});


    