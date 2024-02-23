const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const cardHeader = document.getElementById("card_header");
const p1Name = document.getElementById("p1_name");
const p1Score = document.getElementById("p1_score");
const imgDiv1 = document.getElementById("img1"); // Changed ID to img1 to avoid conflicts
const name1 = document.getElementById("name1");
const abilities1 = document.getElementById("abilities1");
const exp1 = document.getElementById("experience1");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const p2Name = document.getElementById("p2_name");
const p2Score = document.getElementById("p2_score");
const imgDiv2 = document.getElementById("img2"); // Changed ID to img2 to avoid conflicts
const name2 = document.getElementById("name2");
const abilities2 = document.getElementById("abilities2");
const exp2 = document.getElementById("experience2");
const fightBtn = document.querySelector("#fight");

let score1 = 0;
let score2=0;
fightBtn.addEventListener("click", fight);
function fight() {
  p1Name.textContent = "Shinia1";
  p2Name.textContent = "Shinia2";
  p1Score.textContent = `Score:${score1}`;
  p2Score.textContent = `Score:${score2}`;

  fetch("https://pokeapi.co/api/v2/pokemon/")
.then((response)=> response.json())
.then((response)=>{
let x =Math.floor(((Math.random())*20));
return fetch(response.results[x].url)
})
.then((response)=> response.json())
.then((response)=> {
  console.log(response);
displayPokemon(response,1)
return fetch("https://pokeapi.co/api/v2/pokemon/")
})
.then((response)=> response.json())
.then((response)=>{
let x =Math.floor(((Math.random())*20));
return fetch(response.results[x].url)
})
.then((response)=> response.json())
.then((response)=> {
  console.log(response);
  displayPokemon(response,2);
})
.then(()=>{
  increaseScore();
})

}


function displayPokemon(Pokemon, cardId) {
  const pokImg = document.createElement("img");
  pokImg.setAttribute("src", Pokemon.sprites.front_default);
// const ul=document.createElement('ul');

  if (cardId === 1) {
    abilities1.innerHTML="";
    name1.textContent = Pokemon.name;
    imgDiv1.innerHTML = ""; 
    imgDiv1.appendChild(pokImg);
    // console.log(Pokemon.base_experience);
    exp1.textContent = `${Pokemon.base_experience}`;
    Pokemon.abilities.forEach(ability => {
        const listitem=document.createElement('li');
        listitem.textContent=ability.ability.name;
        abilities1.appendChild(listitem);

    });

  } else {
    abilities2.innerHTML="";
    name2.textContent = Pokemon.name;
    imgDiv2.innerHTML = ""; 
    imgDiv2.appendChild(pokImg);
    // console.log(Pokemon.base_experience);
    exp2.textContent = `${Pokemon.base_experience}`;
    Pokemon.abilities.forEach(ability => {
        const listitem=document.createElement('li');
        listitem.textContent=ability.ability.name;
        abilities2.appendChild(listitem);

    });
    // Set other properties accordingly
  }
  
}

function increaseScore() {
  // console.log(exp1.textContent);
  // console.log(exp2.textContent);
  if (parseInt(exp1.textContent) > parseInt(exp2.textContent)) {

    p1Score.textContent = `Score:${++score1}`;
  } else {
    p2Score.textContent = `Score:${++score2}`;
  }
}