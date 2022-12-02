
const submit = document.getElementById('submitEmail');
const form = document.getElementById('formFeedback');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_trcpd9k';
 
    emailjs.sendForm(serviceID, templateID, form)
     .then(() => {
       alert('Məktub Göndərildi');
     }, (err) => {
       alert(JSON.stringify(err));
     });
})
