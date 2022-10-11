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
encode.addEventListener("click", () => {
  const msg = document.querySelector("#msg");
  const keyNum = Number(key.value);
  let output = document.getElementById("output");

  for (let letter of msg.value) {
    letter = letter.toLowerCase();
    if (!alphabets.includes(letter)) {
      continue;
    }

    let indexAlpha = alphabets.findIndex((i) => i === letter);
    let newIndexApha = indexAlpha + keyNum;

    if (newIndexApha > 25) {
      newIndexApha -= 26;
    }

    newAphabet += alphabets[newIndexApha];
    // msg.value = newAphabet;
    output.innerHTML = newAphabet;
  }
  newAphabet = "";
});

// -------------Decryption----------------
decode.addEventListener("click", () => {
  const msg = document.getElementById("msg");
  const keyNum = Number(key.value);
  let output = document.getElementById("output");

  for (let letter of msg.value) {
    letter = letter.toLowerCase();
    if (!alphabets.includes(letter)) {
      continue;
    }

    let indexAlpha = alphabets.findIndex((i) => i === letter);
    let newIndexApha = indexAlpha - keyNum;

    if (newIndexApha < 0) {
      newIndexApha += 26;
    }

    newAphabet += alphabets[newIndexApha];
    // msg.value = newAphabet;
    output.innerHTML = newAphabet;
  }
  newAphabet = "";
});
