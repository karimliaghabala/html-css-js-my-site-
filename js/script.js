const name = document.getElementById('exampleFormControlInput1');
const email = document.getElementById('exampleFormControlInput2');
const text = document.getElementById('exampleFormControlTextarea1');
const submit = document.getElementById('submitEmail');
const form = document.getElementById('formFeedback');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert("Mektub gonderildi")
})
// function sendEmail(){
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "agabalainfo93@gmail.com",
//         Password: "0508357211Aga",
//         To: 'agabalainfo93@gmail.com',
//         From: document.getElementById('exampleFormControlInput3').value,
//         Subject: document.getElementById('exampleFormControlInput2').value,
//         Body: "Name: " + document.getElementById('exampleFormControlInput1').value + 
//         "<br> Email: " + document.getElementById('exampleFormControlInput3').value + 
//         "<br> Textin mətni: " + document.getElementById('exampleFormControlTextarea1').value

//     }).then(
//         message => alert("Məktub göndərildi")
//     )
// }