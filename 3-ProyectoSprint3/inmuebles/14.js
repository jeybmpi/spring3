const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/14.html'">
        <figure>
            <img src="https://migogaalborg.dk/wp-content/uploads/2018/07/IMG_0679-2.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="14">🤍</div>
        </div>                  
        <div class="price">3560 US</div>
        <div class="lugar">Aalborg</div>
        <div class="directopn1">Aalborg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>50 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
        <div class="descrip">Aurora er en meget ny afdeling, som består af 269 ungdomsboliger.<div>
    </article>
        `
    };


renderCards(renderCards);