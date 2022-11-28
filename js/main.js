/*Header slider */
const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const textDiv = document.querySelector(".texts");
let index = 0;

const texts = [
    "Dünyanı dəyişdirmək üçün istifadə edə biləcəyiniz ən güclü silah Təhsildir.(Nelson Mandela)",
    "Təhsilin məqsədi insanda doğuşdan var olan cövhər üzərində işləmək,  insanı inkişaf etdirməkdir.(Ferdinando Qaliani)",
    "Elm adamlarının qiymətini   bilməyən, onlara layiq olduqları mükafatı   verməyən ölkələr inkişaf edəcəklərinə   ümid bəsləməsinlər.(Volter)"
]
function slideLeft() {
    if (index == 0) index = texts.length-1;
    else index--;
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})
}

function slideRight() {
    if (index == texts.length-1) index = 0;
    else index++;
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight)
