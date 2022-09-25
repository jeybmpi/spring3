const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/18.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">rent</div>
            <div class="fav" name="18">🤍</div>
        </div>                  
        <div class="price">1300 US</div>
        <div class="lugar">Aarhus</div>
        <div class="directopn1">strauts</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>26 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
        <div class="descrip">Mejlgade Kollegiet blev i 1983 bygget til kollegie<div>
    </article>
        `
    };


renderCards(renderCards);