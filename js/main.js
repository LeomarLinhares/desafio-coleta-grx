const areaText = document.getElementById('floatingTextarea');
const charCounter = document.getElementById('charCounter');
const sendButton = document.getElementById('sendButton');

function sendAnswers(answers) {
  const url = new URL('http://localhost:5000');
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(answers),
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

areaText.addEventListener('input', () => {
  const minChar = 15;
  const maxChar = 200;
  if (areaText.value.length > maxChar || areaText.value.length < minChar) {
    charCounter.classList.remove('bg-primary');
    charCounter.classList.add('bg-danger');
  } else if (areaText.value.length <= maxChar) {
    charCounter.classList.remove('bg-danger');
    charCounter.classList.add('bg-primary');
  }
  charCounter.innerHTML = `${areaText.value.length} / ${maxChar}`;
})

sendButton.addEventListener('click', () => {
  const question_1 = document.querySelector('input[name="question_1"]:checked').value;
  const question_2 = document.querySelector('input[name="question_2"]:checked').value;
  const question_3 = document.getElementById('question_3').value;
  const question_4 = areaText.value;
  sendAnswers({ question_1, question_2, question_3, question_4 });
})
