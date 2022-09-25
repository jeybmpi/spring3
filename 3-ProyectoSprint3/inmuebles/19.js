const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/19.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/01/30/15/35/autumn-2021154__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">for sale</div>
            <div class="fav" name="19">🤍</div>
        </div>                  
        <div class="price">80000 US</div>
        <div class="lugar">Aarhus</div>
        <div class="directopn1">Otto Brandenburgs Gade 10, 5. mf, 8000 C</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>67 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div> 
        <div class="descrip">no description<div>
    </article>
        `
    };


renderCards(renderCards);