const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/8.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/08/14/09/34/sydney-3605032__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">finca</div>
            <div class="rent">rent</div>
            <div class="fav" name="8">🤍</div>
        </div>                  
        <div class="price">5000 US</div>
        <div class="lugar">Esbjerg</div>
        <div class="directopn1">Strandpromenaden 29, Hjerting, 6710 Esbjerg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>186 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div>
        <div class="descrip">Strandvejsvilla med havudsigt. Flot nyopført villa på bedste placering i Hjerting<div> 
    </article>
        `
    };


renderCards(renderCards);