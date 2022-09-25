const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/11.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">rent</div>
            <div class="fav" name="11">🤍</div>
        </div>                  
        <div class="price">5000 US</div>
        <div class="lugar">Aalborg</div>
        <div class="directopn1">Aalborg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>400 m2</strong> </div>
            <div class="rooms">🛏 5</div>
        </div> 
        <div class="descrip">Afdelingen på Pontoppidanstræde<div>
    </article>
        `
    };


renderCards(renderCards);