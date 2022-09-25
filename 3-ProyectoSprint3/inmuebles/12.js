const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/12.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="12">🤍</div>
        </div>                  
        <div class="price">10000 US</div>
        <div class="lugar">Aalborg</div>
        <div class="directopn1">Teisensvej, 9400, Nørresundby</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>70 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div>
        <div class="descrip">Fin 3-værelses lejlighed beliggende på Teisensvej i Nørresundby.<div> 
    </article>
        `
    };


renderCards(renderCards);