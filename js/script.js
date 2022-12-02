
const submit = document.getElementById('submitEmail');
const form = document.getElementById('formFeedback');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    submit.value = 'Göndərilir';
    const serviceID = 'default_service';
    const templateID = 'template_trcpd9k';

    emailjs.sendForm(serviceID, templateID, form)
     .then(() => {
        submit.value = 'Send Email';
       alert('Mektub gonderildi!');
     }, (err) => {
        submit.value = 'Send Email';
       alert(JSON.stringify(err));
     });
})
