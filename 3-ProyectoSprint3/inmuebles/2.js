const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/2.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="2">🤍</div>
        </div>                  
        <div class="price">1001 US</div>
        <div class="lugar">Kobenhavn</div>
        <div class="directopn1">Studiebolig i København udlejes</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>55 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
        <div class="descrip">Afdelingen på Strandgade er opført i 1978, og indeholder 3 ungdomsboliger.</div>
    </article>
        `
    };


renderCards(renderCards);