//renderizar los items traidos de meals
const renderItem = (item) => {
    //tomamos el id desde item de la variable data de la funcion fetch y el nombre del meal
    return `<li user_id="Ricardo" meal_id="${item._id}" onclick="">${item.name}</li>`
}
const pedidoMenu = (usuario,meal)=>{
    
}

window.onload=()=>{



    // Enviando peticion de json de meals
    fetch('https://repaso-git-master.a13h0sj2.vercel.app/api/meals')
    //promesa en la cual se guarda lo que responde en un json
    .then(response => response.json())
    //data es la respuesta de la promesa 
    .then(data => {
        const mealsList = document.getElementById('meals-list');
        const submit = document.getElementById('submit')
        //mapeamos la respuesta y guardamos en un template
        const template = data.map(renderItem).join('')
        //cambiamos el contenido del meal-list
        mealsList.innerHTML = template;
        submit.removeAttribute('disabled')
    })    
    
}  