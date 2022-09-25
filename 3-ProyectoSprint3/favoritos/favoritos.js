const containerCards = document.getElementById('container__cards');
let favorites = JSON.parse(sessionStorage.getItem('favoritesp'))||[];
console.log(favorites);

const renderCards = data => {
    
    containerCards.innerHTML = '' ;
    data.forEach(elemento => {
        let urlImage = elemento.image;
        let urlNombre = elemento.nombre;
        let urlUbicacion = elemento.ubicacion;
        let urlarea = elemento.area;
        let urlhabitaciones = elemento.habitaciones;
        let urltipoinmueble = elemento.tipoinmueble;
        let urlrenta = elemento.renta;
        let urlprecio = elemento.precio;
        let urlparqueadero = elemento.parqueadero;
        let urlpropietario = elemento.propietario;
        let urldescripcion = elemento.descripcion;
        let urlPage = elemento.page;
        containerCards.innerHTML += `      
    <article class="card" onclick="location.href='../${urlPage}'">
    <figure>
        <img src="${urlImage}" alt="imagen" class="card__img">
    </figure>
    <div class="cardtop1">
        <div class="house">${urltipoinmueble}</div>
        <div class="rent">${urlrenta}</div>
        <div class="fav" name="${elemento.id}">🤍</div>
    </div>                  
    <div class="price">${urlprecio}</div>
    <div class="lugar">${urlUbicacion}</div>
    <div class="directopn1">${urlNombre}</div>
    <div class="cardmiddle">
        <div class="contactt">${urlpropietario}</div>
        <div class="parquing">${urlparqueadero}</div>
    </div>                    
    <div class="cardbottom">
        <div class="area"><strong>${urlarea}</strong> </div>
        <div class="rooms">🛏 ${urlhabitaciones}</div>
    </div> 
</article>
        `
    });
}
renderCards(favorites); 