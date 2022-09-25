const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/17.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">for sale</div>
            <div class="fav" name="17">🤍</div>
        </div>                  
        <div class="price">75694 US</div>
        <div class="lugar">Aarhus</div>
        <div class="directopn1">Ceresbyen 7D, st. , 8000 C</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>60 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div> 
        <div class="descrip">Lejligheden, som er velegnet til flere personer, er en velindrettet<div>
    </article>
        `
    };


renderCards(renderCards);