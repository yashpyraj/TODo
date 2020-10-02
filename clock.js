




const secondHand = document.querySelector('.sec');
const minshand = document.querySelector('.min')
const hourhand = document.querySelector('.hour')
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60 )*360) + 90 ;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    
    const min = now.getMinutes();
    const minsDegree = ((min / 60 )*360) + 90;
    minshand.style.transform= `rotate(${minsDegree}deg)`


    const hour = now.getHours();
    const hoursDegree = ((hour / 12 )*360) + 90;
    hourhand.style.transform = `rotate(${hoursDegree}deg)`
    console.log(`${hour}hours ${min}mins ${seconds}secs`);
}

setInterval(setDate,1000);