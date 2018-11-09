// THE SPACE FOR THE LARGE IMAGE
let current = document.querySelector('#current');

// 1. CREATE AN ARRAY(GROUP) OF ALL THE IMAGES
const imgs = document.querySelectorAll('.imgs img');

// 2. CREATE A LOOP THAT WILL ADD THE EVENT LISTNER TO EACH ITEM (IMG) OF THE ARRAY.
for(let i = 0; i <= 7; i++){
  imgs[i].addEventListener('click', switchImg);
}

function switchImg(event){
  current.src = event.target.src;
}