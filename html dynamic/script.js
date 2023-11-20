function showCard(){

    const cardexist = document.getElementById("greet-card");
    if (cardexist) {
        cardexist.remove();
    }

  var card = document.createElement("div");
  card.classList.add("card");
  card.id = "greet-card";
  document.body.appendChild(card);
  

  var greet = document.createElement("h1");
  greet.classList.add("greet");
  greet.textContent = "congrats card is displayed..!";
  card.appendChild(greet);
    
    
//   add the cancel button
    
    var cancel_btn = document.createElement("a");
    cancel_btn.className = "cancel-btn";
    cancel_btn.onclick = function () {
        card.style.opacity = 0;
        // wait for to perform a animation then remove the card
        card.style.transform = 'translateY(-100px)';
        // card.remove();
        setTimeout(() => {
            card.remove();
        }, 500);
    };
    card.appendChild(cancel_btn);

    var icon = document.createElement('img');
    icon.src = 'images/x-logo.png';
    icon.className ='cancel-icon';
    cancel_btn.appendChild(icon);
}
