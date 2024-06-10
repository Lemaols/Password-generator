const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 12;

let generateEl = document.getElementById("generate-el")
let textEl = document.getElementById("text-el")
let textElTwo = document.getElementById("text-eltwo")


function generatePass() {

generateRandomPassword(textEl)
generateRandomPasswordTwo(textElTwo)

}

function generateRandomPassword(element) {
    const newPasswordArray = []
    for (let i =0; i < 12; i++){
        newPasswordArray[i] = characters[Math.floor(Math.random()*characters.length)]
    }

   element.textContent = newPasswordArray.join('')    
    
}

function generateRandomPasswordTwo(element) {
    const newPasswordArray = []
    for (let i =0; i < 12; i++){
        newPasswordArray[i] = characters[Math.floor(Math.random()*characters.length)]
    }

   element.textContent = newPasswordArray.join('')    
    
}


