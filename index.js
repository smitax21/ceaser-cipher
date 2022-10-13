const encode = document.getElementById("encode");
const decode = document.getElementById("decode");
const key = document.getElementById("input-key");

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let newAphabet = "";

// ----------Encrypting the code-------------------------

function Encryption() {
  encode.addEventListener("click", () => {
    const msg = document.querySelector("#msg").value;
    const keyNum = Number(key.value);
    const output = document.getElementById("output");

    for (let letter of msg) {
      letter = letter.toLowerCase();
      if (!alphabets.includes(letter)) {
        alert("Type letters or a sentence to encrypt");
        break;
      }

      let indexAlpha = alphabets.findIndex((i) => i === letter);
      let newIndexApha = indexAlpha + keyNum;

      newAphabet += alphabets[newIndexApha];
      output.innerHTML = newAphabet;
    }
    newAphabet = "";
  });
}

// -------------Decryption----------------
function Decryption() {
  decode.addEventListener("click", () => {
    const msg = document.getElementById("msg");
    const keyNum = Number(key.value);
    const output = document.getElementById("output");

    for (let letter of msg.value) {
      letter = letter.toLowerCase();
      if (!alphabets.includes(letter)) {
        alert("Type letters or a sentence to decrypt");
        break;
      }

      let indexAlpha = alphabets.findIndex((i) => i === letter);
      let newIndexApha = indexAlpha - keyNum;

      newAphabet += alphabets[newIndexApha];
      output.innerHTML = newAphabet;
    }
    newAphabet = "";
  });
}

Encryption();
Decryption();
