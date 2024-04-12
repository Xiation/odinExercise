let XP = 0 ;
let health = 100 ;
let gold = 50 ;
let currentWeapon = 0 ;
let fighting ;
let monsterHealth ; 
let inventory = ["stick"]

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text =  document.querySelector("#text") ;
const xpText = document.querySelector("#xpText") ;
const healthText = document.querySelector("#healthText") ;
const goldText = document.querySelector("#goldText") ;

const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName") ;
const monsterHealthText = document.querySelector ("#monsterHealth")

const locations = [
    {
        name : "Town Square",
        buttonText : ["Go to store", "Go to cave", "Fight Dragon"] ,
        buttonFunctions : [goStore, goCave, fightDragon],
        text: "You are in the town square." 
    },
    {
        name: "store",
        buttonText: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        buttonFunctions: [buyHealth, buyWeapon, goTown],
        text: "You enter the store. What item that does seem to your liking?"
    },

    {
        name: "cave",
        buttonText : ["Fight Slime", "Fight Fanged Beast", "Go to Town"],
        buttonFunctions: [fightSlime, fightBeast, goTown],
        text: "You enter the cave, a few monster start surfacing."
    }

] ;

button1.onclick = goStore ;
button2.onclick = goCave ;
button3.onclick = fightDragon ;

function update (location) {
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1] ;
    button3.innerText = location.buttonText[2] ;

    button1.onclick = location.buttonFunctions[0];
    button2.onclick = location.buttonFunctions[1];
    button3.onclick = location.buttonFunctions[2];

    text.innerText = location.text ;
}

function goTown () {
    update(locations[0]);
}

// while in town
function goStore () {
    update(locations[1]) ;

}

function goCave () {
    update(locations[2]) ;
}

function fightDragon () {

}

// while in store
function buyHealth () {
    gold -= 10 ;
    health += 10 ;
    goldText.innerText = gold ;
    healthText.innerText = health ;
}

function buyWeapon () {

}

// while in cave

function fightSlime () {

}

function fightBeast () {

}



