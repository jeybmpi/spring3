const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/13.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">for sale</div>
            <div class="fav" name="13">🤍</div>
        </div>                  
        <div class="price">60000 US</div>
        <div class="lugar">Aalborg</div>
        <div class="directopn1">Østre Havnegade 24, 1. Dør 5, 9000 Aalborg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>55 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
        <div class="descrip">Lejligheder i arkitektonisk mesterværk ved Limfjorden i Aalborg centrum<div>
    </article>
        `
    };


renderCards(renderCards);