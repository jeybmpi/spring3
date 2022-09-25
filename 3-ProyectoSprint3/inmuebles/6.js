const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/6.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">for sale</div>
            <div class="fav" name="6">🤍</div>
        </div>                  
        <div class="price">87000 US</div>
        <div class="lugar">Esbjerg</div>
        <div class="directopn1">Marsvej 45B, 6800 Varde</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>105 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div> 
    </article>
    <div class="descrip"><div>
        `
    };


renderCards(renderCards);