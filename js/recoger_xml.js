var xmlDoc = cargarXMLDoc('prueba1.xml'); //Carga el xml con la función definida en la parte de abajo
if (xmlDoc !== null)
  {
   // We obtain the list from the table
   var OurXmlData = xmlDoc.getElementsByTagName("projets")[0].getElementsByTagName("projet");
   for (var i = 0; i < OurXmlData.length; i++)
   {
    // We obtain data from the column with name Nombre
    var nombre = OurXmlData[i].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue;

    // We obtain data from the column with name Apellido
    var apellido = OurXmlData[i].getElementsByTagName("Apellido")[0].childNodes[0].nodeValue;

    // We obtain data from the column with name Edad
    var edad = OurXmlData[i].getElementsByTagName("Edad")[0].childNodes[0].nodeValue;

    // We obtain data from the column with name Teléfono
    var telefono = OurXmlData[i].getElementsByTagName("Teléfono")[0].childNodes[0].nodeValue;

    // We wrote it on the webpage in this case in a table with id ourxmldata
    ourxmldata.innerHTML += "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + edad + "</td><td>" + telefono + "</td></tr>";
   }
  }

// Function to load the XML that alert if an error occurred
function cargarXMLDoc(archivoXML)
{
 var xmlDoc;

 if (window.XMLHttpRequest)
   {
    xmlDoc = new window.XMLHttpRequest();
    xmlDoc.open("GET", archivoXML, false);
    xmlDoc.send("");
    return xmlDoc.responseXML;
   }
 // for IE 5 & IE 6
 else if (ActiveXObject("Microsoft.XMLDOM"))
   {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load(archivoXML);
    return xmlDoc;
   }
 alert("Error cargando el documento.");
 return null;
}
