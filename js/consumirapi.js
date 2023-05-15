var dataPaisesbb = [];

function poblarDatosPaises() {

     console.log("Iniciando busqueda");

     var url = 'https://restcountries.com/v3.1/independent?status=true';

     var comboBox = document.getElementById("Paises");


     fetch(url)
          .then(response => response.json())
          .then(json => {


               for (item of json) {
                    dataPaisesbb.push(item);
                    var option = crearOption(item.name.common, item.name.official);


                    //console.log(option)


                    comboBox.appendChild(option)







               }





          });





}


function mostrarDatosPais() {
     var comboBox = document.getElementById("Paises")
     var indexSeleccionado = comboBox.selectedIndex;
     console.log(indexSeleccionado)
     console.log(dataPaisesbb[0].name.common)

     var tablaPais = document.getElementById("tablaPais")

     if (tablaPais.rows.length > 1)
          tablaPais.deleteRow(1)

     var fila = tablaPais.insertRow();

     var nombreComunColumna = fila.insertCell(0)
     nombreComunColumna.innerHTML = dataPaisesbb[indexSeleccionado].name.common

     var nombreOficialColumna = fila.insertCell(1);
     nombreOficialColumna.innerHTML = dataPaisesbb[indexSeleccionado].name.official;

     var capitalColumna = fila.insertCell(2);
     capitalColumna.innerHTML = dataPaisesbb[indexSeleccionado].capital;

     var monedaColumna = fila.insertCell(3);
     monedaColumna.innerHTML = Object.values(dataPaisesbb[indexSeleccionado].currencies)[0].name;

     var olLanguaje = document.createElement("ol");
     var idiomasColumna = fila.insertCell(4);

     for (let i = 0; i < Object.values(dataPaisesbb[indexSeleccionado].languages).length; i++) {
          var li = document.createElement("li");

          li.innerText = Object.values(dataPaisesbb[indexSeleccionado].languages)[i];
          olLanguaje.appendChild(li);
          console.log(Object.values(dataPaisesbb[indexSeleccionado].languages)[i]);

          //console.log(indexSeleccionado)
     }


     idiomasColumna.appendChild(olLanguaje);


     var banderaColumna = fila.insertCell(5);
     var img = document.createElement("img")
     img.src = dataPaisesbb[indexSeleccionado].flags.png;

     banderaColumna.appendChild(img);



     var escudosArmasColumna = fila.insertCell(6);

     var olEscudosArmas = document.createElement("ol")

     var li1 = document.createElement("li")

     olEscudosArmas.appendChild(li1);

     var imagenEscudoArma1 = document.createElement("img");
     imagenEscudoArma1.src = dataPaisesbb[indexSeleccionado].coatOfArms.png;
     imagenEscudoArma1.style.width = "50%"
     li1.appendChild(imagenEscudoArma1);


     var li2 = document.createElement("li")

     olEscudosArmas.appendChild(li2);

     var imagenEscudoArma2 = document.createElement("img");
     imagenEscudoArma2.src = dataPaisesbb[indexSeleccionado].coatOfArms.svg;
     imagenEscudoArma2.style.width = "50%"
     li2.appendChild(imagenEscudoArma2);

     escudosArmasColumna.appendChild(olEscudosArmas)


     var poblacionColumna = fila.insertCell(7);
     poblacionColumna.innerText = dataPaisesbb[indexSeleccionado].population;






}