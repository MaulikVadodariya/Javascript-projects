const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const intNumber = "0123456789";
const symbol = "/[!@#$%^&()_+~`|}{[\]:;?><,./-=]/";



const generatePassword = (elements) => {

    let length = lengthEl.value;

    var joinString = elements.join("");
    var randomPassword = '';

    for (let i=0; i<length; i++) {
        var char = Math.floor(Math.random() * joinString.length + 1);
        randomPassword += joinString.charAt(char)
	}

    return randomPassword;

}

const testPassword = (array) => {    
    for (let i = 0; i < 1e5; ++i) {
        var pass = generatePassword(array);
        if (/[array[0]]/.test(pass) && /[array[1]]/.test(pass) && /[array[2]]/.test(pass) && /[array[3]]/.test(pass)) {
            break;
        }
      } 
      return pass;
} 

generateEl.addEventListener('click', () => {

    let array = [];

    lowercaseEl.checked ? array.push(lowerCase) : array.push(null)
    uppercaseEl.checked ? array.push(upperCase) : array.push(null)
    numbersEl.checked ? array.push(intNumber) : array.push(null)
    symbolsEl.checked ? array.push(symbol) : array.push(null)
    
    let password = testPassword(array);
    resultEl.innerHTML = password;
    
})

clipboardEl.addEventListener('click', () => {
    
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    alert("Password copied");

})
