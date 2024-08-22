

// Evenements Menu


const menu = document.querySelector('.menu');

const MenuContent = document.querySelector('.list');

// Au click

menu.addEventListener('click', () =>{
    setTimeout( () =>{
        MenuContent.style.display = "block";
    }, 200)
});




// Evènement pour chaque section


const Accueil = document.querySelector('.c1');

const Bissness = document.querySelector('.c2');

const  Contact = document.querySelector('.c3');


// Au click

Accueil.addEventListener('click', () =>{
    setTimeout( () =>{
        MenuContent.style.display = "none";
    }, 200);
});

Bissness.addEventListener('click', () =>{
    setTimeout( () =>{
        MenuContent.style.display = "none";
    }, 200);
});

Contact.addEventListener('click', () =>{
    setTimeout( () =>{
        MenuContent.style.display = "none";
    }, 200);
});