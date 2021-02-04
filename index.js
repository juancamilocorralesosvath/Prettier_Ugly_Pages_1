AOS.init({
    duration: 1200,
});
const MAX_LIMIT = 30;
const bookingCard = document.getElementById('bookingCardOptions');
//bueno, tengo una fallita aqui: al parecer el navegador es mas rapido que mi funcion, y al inicio no alcanza a tomar los valores que le estoy pasando desde mi archivo js,
//por lo cual cuando le undo a una de las opciones por primera vez, no se despliega como deberia sino como si solo tuviera una opcion
//ya cuando le undo otra vez, ahi si los toma pero, jeje, como se vuelve a ejecutar la funcion, me repite el proceso y aparece n veces las opciones...
const fillOptionsInBookingCard = (object) =>{
    console.log(object)
    for (let i = 0; i < MAX_LIMIT; i++){
        let option = document.createElement('option');
        option.value = i+1;
        option.innerText = `${option.value} ${object.name}`;
        object.appendChild(option);
    }
        
}
bookingCard.onclick = (e) => {
    fillOptionsInBookingCard(e.target);
}