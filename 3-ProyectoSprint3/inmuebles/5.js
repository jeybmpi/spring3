const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/5.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="5">🤍</div>
        </div>                  
        <div class="price">2000 US</div>
        <div class="lugar">Kobenhavn</div>
        <div class="directopn1">København, student apartment</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>57 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
    <div class="descrip">Hectorgården består af handicapegnede boliger i etagebyggeri i 6 etager med elevator, opført i 1995.<div>
        `
    };


renderCards(renderCards);