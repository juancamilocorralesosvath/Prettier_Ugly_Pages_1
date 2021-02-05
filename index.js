AOS.init({
    duration: 1200,
});
const MAX_LIMIT = 30;
const bookingCard = document.getElementById('bookingCardOptions');
//bueno, tengo una fallita aqui: al parecer el navegador es mas rapido que mi funcion, y al inicio no alcanza a tomar los valores que le estoy pasando desde mi archivo js,
//por lo cual cuando le undo a una de las opciones por primera vez, no se despliega como deberia sino como si solo tuviera una opcion
//ya cuando le undo otra vez, ahi si los toma pero, jeje, como se vuelve a ejecutar la funcion, me repite el proceso y aparece n veces las opciones...
/* const fillOptionsInBookingCard = (object) =>{
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
} */

/* 
    bueno, hay que replantearse esto, porque la manera en como lo estamos haciendo no es como lo mas recomendable, se me ocurre hacerlo asi:
    a los inputs de adultos, niños y habitaciones les pongo una misma clase, de esa manera los pudo mandar a llamar aqui desde mi index.js hciendo uso del metodo
    "document.getElementsByClassName", luego puedo hacer un forEach, y para cada uno, hago el metodo que ya habia hecho, y listo!
    
*/
const showBookingCardOptions = () =>{
    const [a, b, c] = document.getElementsByClassName('adults-children-rooms-option');
    [a, b, c].forEach(element => {
    for (let i = 0; i < MAX_LIMIT; i++){
        let option = document.createElement('option');
        option.value = i+1;
        option.innerText = `${option.value} ${element.name}`;
        element.appendChild(option);
    }
});
}
showBookingCardOptions();

/* epa! problema resuelto, gloria a Dios!
    ojo, por si algun dia alguien lee esto, no me funcionaba porque lo estaba llamando asi:
    -------------------------------------------------------------------------------
    const optionsElements = document.getElementsByClassName('adults-children-rooms-option');
    optionsElements.forEach(element => {
    -----------------------------------------------------------------------
    y el problema era que no me estaba devolviendo un arreglo, bueno, no solamente, me devolvia muchas otras cosas, entre ellas el arreglo que me interesaba (por eso no me funcionaba el forEach, porque no se trataba de un arreglo)
    es por eso que se me ocurrio o más bien recordé que puedo hacer uso de la destructuracion, asi solamente saco los elementos que me interesan (el arreglo en especifico), de ahi ya no hubo problema,
    ya pude llenar las opciones y no tengo bugs!
    LAUDETUR IESUS CHRISTUS! ALABADO SEA JESUCRISTO!
*/
