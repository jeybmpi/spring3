const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/3.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">for sale</div>
            <div class="fav" name="3">🤍</div>
        </div>                  
        <div class="price">30000 US</div>
        <div class="lugar">Kobenhavn</div>
        <div class="directopn1">1 bedroom student apartment</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>77 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
        <div class="descrip">Midt på Frederiksberg finder du nogle charmerende studieboliger, ved navn Svend Trøsts vej.<div>
    </article>
        `
    };


renderCards(renderCards);