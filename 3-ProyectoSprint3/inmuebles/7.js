const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `      
        <article class="card" onclick="location.href='./inmuebles/7.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302__340.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">house</div>
            <div class="rent">rent</div>
            <div class="fav" name="7">🤍</div>
        </div>                  
        <div class="price">2000 US</div>
        <div class="lugar">Esbjerg</div>
        <div class="directopn1">Grådybet 71H st., 3, 6700 Esbjerg</div>
        <div class="cardmiddle">
            <div class="contactt">Contact the admin of this page</div>
            <div class="parquing">yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>100 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
        <div class="descrip">Nye lækre boliger på den gamle tovværksgrund i Esbjerg klar til indflytning.<div>
    </article>
    
        `
    };


renderCards(renderCards);