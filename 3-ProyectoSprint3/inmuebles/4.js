const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/4.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">rent</div>
            <div class="fav" name="4">🤍</div>
        </div>                  
        <div class="price">800 US</div>
        <div class="lugar">Kobenhavn</div>
        <div class="directopn1">København, Frederiksberg st.3-40</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>30 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
        <div class="descrip">Kollegiet på Lauritz Sørensens Vej blev lavet til kollegie i 1994, og består nu af 148 lejemål fordelt på 6 opgange.<div>
    </article>
        `
    };


renderCards(renderCards);