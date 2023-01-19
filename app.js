const inputEl = document.querySelector(".input");
const wordTitalEl = document.querySelector(".word-tital");
const enterTitalEl = document.querySelector(".enter-tital");
const meaningEl = document.querySelector(".meaning");
const audioEl = document.querySelector(".audio");
const meaningDivEl = document.querySelector(".meaning-div");

async function fachApi(word) {
  try {
    enterTitalEl.style.display = "block";
    meaningDivEl.style.display = "none";
    enterTitalEl.textContent = `Searching a meaning of word "${word}"`;
    enterTitalEl.style.color = 'black'
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) { 
      meaningDivEl.style.display = "block";
      enterTitalEl.textContent = `Please enter correct word`
      audioEl.style.display = "none";
    } else {
      enterTitalEl.style.display = "none";
      meaningDivEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      wordTitalEl.textContent = `${result[0].word}`;
      meaningEl.textContent = `${result[0].meanings[0].definitions[0].definition}`;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    enterTitalEl.textContent = ` Not Internet connection, try again later`;
    enterTitalEl.style.color = 'rgb(131, 28, 28)'
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fachApi(e.target.value);
  }
});
