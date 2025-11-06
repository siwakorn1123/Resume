// // ===== TYPEWRITER EFFECT =====
const texts = ["Siwakorn", "Siwakorn Dev", "Web & App Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typed-text').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 120);
  }
})();

function scrollToEducation() {
  const eduSection = document.getElementById("education");
  eduSection.scrollIntoView({ behavior: "smooth" });
}
