const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/9.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">rent</div>
            <div class="fav" name="9">🤍</div>
        </div>                  
        <div class="price">3000 US</div>
        <div class="lugar">Esbjerg</div>
        <div class="directopn1">SKOLEGADE 17, 6700 ESBJERG</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>104 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div> 
        <div class="descrip">no description<div>
    </article>
        `
    };


renderCards(renderCards);