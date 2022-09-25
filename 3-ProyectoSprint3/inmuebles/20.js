const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/20.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/08/28/16/43/stilt-house-1626354__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">finca</div>
            <div class="rent">rent</div>
            <div class="fav" name="20">🤍</div>
        </div>                  
        <div class="price">3000 US</div>
        <div class="lugar">Aarhus</div>
        <div class="directopn1">Louis hammerichsvej, 7, 4tv</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>50 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div>
        <div class="descrip">Dobbelt værelse udlejes, det er en 50'er bolig<div>
    </article>
        `
    };


renderCards(renderCards);