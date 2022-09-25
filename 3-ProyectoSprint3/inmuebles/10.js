const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/10.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/01/09/00/49/snow-1964361__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">for sale</div>
            <div class="fav" name="10">🤍</div>
        </div>                  
        <div class="price">4000 US</div>
        <div class="lugar">Esbjerg</div>
        <div class="directopn1">Esbjerg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">no</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>35 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
        <div class="descrip">Afdelingen Ringen er fra 1998, og indeholder 4 stk. 1-værelses studieboliger, blandt 18 andre almene lejemål.<div>
    </article>
        `
    };


renderCards(renderCards);