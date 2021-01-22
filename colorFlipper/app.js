const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// #
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector(".main");

btn.addEventListener('click',function(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[(Math.floor(Math.random()*15))];
    }
    color.textContent=hexColor;
    main.style.backgroundColor=hexColor;
});
