
function containerTemplate (data){
    const xhr = new XMLHttpRequest();
    xhr.open('get','./resources/pages/index.hbs');
    xhr.addEventListener('load', () =>
    {
      if(xhr.readyState===4){
        console.log("¡Conexion exitosa!")
        //conexion datos a handlebars 
        const template = Handlebars.compile(xhr.response);
        const containerTemplate = {container: data};
        const containerHTML = template(containerTemplate);
        document.getElementById("view").innerHTML = containerHTML;
      }
      else{
        alert("conexion no exitosa su estado de readystate es: "+xhr.readyState)
      }
    });
    xhr.send();
   
}