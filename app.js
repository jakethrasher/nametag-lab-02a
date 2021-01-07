const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name');
const submitButton = document.getElementById('button');
const nameTagBody = document.getElementById('nametag');

const smile=document.getElementById('smile');
const smileButton=document.getElementById('turn-smile');

submitButton.addEventListener('click',()=>{
    nameDisplay.innerHTML=nameInput.value;
    nameInput.value='';
});


//handle rotation of smiley
smile.classList="smile";
smileButton.addEventListener('click', ()=>{
    smile.classList="spin";

});

//Random color generator
function colorValue() {
    return Math.floor(Math.random() * 256);
  }
  function colorChange(){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    nameTagBody.style.backgroundColor=randomColor;
  };

  nameTagBody.addEventListener('mouseover', colorChange);
