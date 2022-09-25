const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/15.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="15">🤍</div>
        </div>                  
        <div class="price">1000 US</div>
        <div class="lugar">Aalborg</div>
        <div class="directopn1">bjrit</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>50 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div>
        <div class="descrip">Afdelingen på Østerbro Brygge blev bygget i 2013<div>
    </article>
        `
    };


renderCards(renderCards);