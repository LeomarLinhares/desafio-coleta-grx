const areaText = document.getElementById('floatingTextarea');
const charCounter = document.getElementById('charCounter');

areaText.addEventListener('input', () => {
  const maxChar = 200;
  if (areaText.value.length > maxChar || areaText.value.length < 15) {
    charCounter.classList.remove('bg-primary');
    charCounter.classList.add('bg-danger');
  } else if (areaText.value.length < maxChar) {
    charCounter.classList.remove('bg-danger');
    charCounter.classList.add('bg-primary');
  }
  charCounter.innerHTML = `${areaText.value.length} / ${maxChar}`;
})
