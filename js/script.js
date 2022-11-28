const name = document.getElementById('exampleFormControlInput1');
const email = document.getElementById('exampleFormControlInput2');
const text = document.getElementById('exampleFormControlTextarea1');
const submit = document.getElementById('submitEmail');
const form = document.getElementById('formFeedback')

submit.addEventListener('click',(e)=>{
    e.target.preventDefault();
})
