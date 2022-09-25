const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/16.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="16">🤍</div>
        </div>                  
        <div class="price">900 US</div>
        <div class="lugar">Aarhus</div>
        <div class="directopn1">khenbrj</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>43 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
        <div class="descrip"><div>
    </article>
        `
    };


renderCards(renderCards);