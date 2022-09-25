const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
    <article class="card" onclick="location.href='./inmuebles/1.html'">
    <figure>
        <img src="https://cdn.pixabay.com/photo/2020/04/13/17/16/netherlands-5039356__340.jpg" alt="imagen" class="card__img">
    </figure>
    <div class="cardtop1">
        <div class="house">Apartment</div>
        <div class="rent">rent</div>
        <div class="fav">🤍</div>
    </div>                  
    <div class="price">1000US</div>
    <div class="lugar">Kobenhavn</div>
    <div class="directopn1">Jyllingevej 66</div>
    <div class="cardmiddle">
        <div class="contactt">Contact the admin of this page</div>
        <div class="parquing">no</div>
    </div>                    
    <div class="cardbottom">
        <div class="area"><strong>77 m2</strong> </div>
        <div class="rooms">🛏 3</div>
    </div>
    <div class="descrip">Møbleret lejlighed 77 m², 2 soveværelser, 1 badeværelse, balkon, indbyggede skabe, fuldt møbleret og udstyret køkken, har aircondition.</div> 
</article>
        `
    };


renderCards(renderCards);