//renderizar los items traidos de meals
const renderItem = (item) => {
    //tomamos el id desde item de la variable data de la funcion fetch y el nombre del meal
    return `<li meal_id="${item._id}" onclick="agregarPedido('${item.name}')">${item.name}</li>`
}

//creamos un objeto HTML tipo Lista <select> y lo rellenamos 20 veces de opciones del 1 al 20
function crearLista(){
    const listaDesplegable = document.createElement('select')    
    for(i=1;i<=20;i++){
        const items = document.createElement('option')
        const itemsCont = document.createTextNode(i);
        items.appendChild(itemsCont);
        listaDesplegable.appendChild(items);
    }
    return listaDesplegable;
}
function agregarPedido(argumento){
    //creamos un objeto tipo html ,li> y le ponemos  un el texto que traemos del evento mouse click
    const lista = document.getElementById('menu-plano')
    const item = document.createElement('li')
    const arg = document.createTextNode(argumento)
    item.appendChild(arg)
    //revisamos si es el primer elemento a agregar
    //para a;adir el <li> y la lista <select>
    if (lista.firstChild==null){
        const esperando = document.getElementById('esperando')
        esperando.remove();
        lista.appendChild(item);
        lista.appendChild(crearLista());
    }else{    //De no ser el primer elemento revisamos que no se repita para a;adir otro meals    
        const nuevaLista = document.querySelectorAll('#menu-plano li')        
        const array = Array.from(nuevaLista);
        var bandera = 0;
        for(var i = 0; i < array.length;i++){
            if (array[i].firstChild.textContent === argumento){
                bandera=1
                break;
                //el codigo salta si se encuentra repetido
            }}
        if (bandera==0){
            //si no esta repetido creamos un nuevo elemento y su respectiva lista
            lista.appendChild(item);
            lista.appendChild(crearLista());
        }else{
            alert('ya pidio ese plato huevonaso')
        }
    }
}
window.onload=()=>{
    // Enviando peticion de json de meals
    fetch('https://repaso-git-master.a13h0sj2.vercel.app/api/meals')
    //promesa en la cual se guarda lo que responde en un json
    .then(response => response.json())
    //data es la respuesta de la promesa 
    .then(data => {
        toString
        const mealsList = document.getElementById('meals-list');
        const submit = document.getElementById('submit')
        //mapeamos la respuesta y guardamos en un template
        const template = data.map(renderItem).join('')
        //cambiamos el contenido del meal-list
        mealsList.innerHTML = template;
        submit.removeAttribute('disabled')
    })      
}  