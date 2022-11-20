import {Tamagotchi} from "./modules/Tamagotchi.js";


const tama1 = new Tamagotchi("", "");

const nameSubmission = document.querySelector('button');
const h1 = document.getElementById('nameHeader');
const newName = document.getElementById('Tamagotchi-name');
const type = document.getElementById('Tamagotchi-type');
//Happiness and hunger <p>-elements
let hapMeter = document.getElementById('hapMeter');
let hungMeter = document.getElementById('hungMeter');
hapMeter.innerHTML = `Your Tamagotchi\'s happiness is: ${tama1.getHappiness()}`;
hungMeter.innerHTML = `Your Tamagotchi\'s hunger is: ${tama1.getHunger()}`;

nameSubmission.addEventListener('click', function(){
    tama1.changeName(newName.value);
    tama1.setType(type.value);
    
    h1.innerHTML = `Your Tamagotchi, ${newName.value}. It is a ${type.value}.`;

    document.getElementById('Form').remove();

let interval1 = setInterval(() =>
{
    
    tama1.changeHappiness(-1);
    tama1.changeHunger(1);
    hapMeter.innerHTML = `Your Tamagotchi\'s happiness is: ${tama1.getHappiness()}`;
    hungMeter.innerHTML = `Your Tamagotchi\'s hunger is: ${tama1.getHunger()}`;

    if(tama1.getHappiness() >= 5){
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }else{
        const image2 = document.getElementById('image2');
        image2.src = '/img/sadlizard.jpg';
    }
    if(tama1.getHappiness() >= 5)
    {
        const image2 = document.getElementById('image2');
        image2.src = '';
    }
    
    if(tama1.getHunger() > 5){
        const image = document.getElementById('image');
        image.src = '/img/hungrylizard.jpg';
    }else{
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }
    
    if(tama1.getHappiness()<= 0 || tama1.getHunger() > 9)
    {
        const image = document.getElementById('image');
        image.src = '/img/deadlizard.jpg';
        h1.innerHTML = `Your Tamagotchi, ${newName.value}, has died!`;
        clearInterval(interval1);
        document.getElementById('happy').remove();
        document.getElementById('hunger').remove();
        document.getElementById('labHap').remove();
        document.getElementById('labHung').remove();
    }
}
, 3000);}
);

//Increase happiness button and decrease hunger button
const happyBtn = document.getElementById('happy');
const hungerBtn = document.getElementById('hunger');

happyBtn.addEventListener('click', function()
{ 
    tama1.changeHappiness(1);

    if(tama1.getHappiness() >= 5){
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }else if(tama1.getHappiness() < 5){
        const image = document.getElementById('image');
        image.src = '/img/sadlizard.jpg';
    }else{
        const image = document.getElementById('image');
        image.src = '/img/deadlizard.jpg'
    }
    
    if(tama1.getHunger() > 5){
        const image = document.getElementById('image');
        image.src = '/img/hungrylizard.jpg';
    }else if(tama1.getHunger() > 0){
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }else if(tama1.getHunger() === 10){
        const image = document.getElementById('image');
        image.src = '/img/deadlizard.jpg';
    }
    hapMeter.innerHTML = `Your Tamagotchi\'s happiness is: ${tama1.getHappiness()}`;
});

hungerBtn.addEventListener('click', function()
{
    tama1.changeHunger(-1);

    if(tama1.getHappiness() >= 5){
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }else if(0 < tama1.getHappiness() < 5){
        const image = document.getElementById('image');
        image.src = '/img/sadlizard.jpg';
    }else{
        const image = document.getElementById('image');
        image.src = '/img/deadlizard.jpg'
    }
    
    if(tama1.getHunger() > 5){
        const image = document.getElementById('image');
        image.src = '/img/hungrylizard.jpg';
    }else if(tama1.getHunger() > 0){
        const image = document.getElementById('image');
        image.src = '/img/cartoon-cute-lizard-illustration-65335160.jpg';
    }else if(tama1.getHunger() === 10){
        const image = document.getElementById('image');
        image.src = '/img/deadlizard.jpg';
    }
    hungMeter.innerHTML = `Your Tamagotchi\'s hunger is: ${tama1.getHunger()}`;

});