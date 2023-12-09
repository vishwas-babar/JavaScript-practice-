function transformIntoCard(){
    var card = document.getElementsByClassName('card')[0];

    var cardHTML = `
        <div class="dynamic-card">
        <img src="path/to/your/image.jpg" alt="Card Image">
        <h2>Card Heading</h2>
        <p>Your paragraph content goes here.</p>
        <!-- Add more elements as needed -->
        </div>
    `;

    card.innerHTML = cardHTML;


    //transform div to card
    gsap.to(".card",{
        
        height:400,
        width:300,
        borderRadius:10,
        duration:0.5,
    });

    setTimeout(() => {
        card.classList.add('card-2');
    }, 1000);

}