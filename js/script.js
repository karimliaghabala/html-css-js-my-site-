

function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "agabalainfo93@gmail.com",
        Password: "0508357211Aga",
        To: 'agabalainfo93@gmail.com',
        From: document.getElementById('exampleFormControlInput3').value,
        Subject: document.getElementById('exampleFormControlInput2').value,
        Body: "Name: " + document.getElementById('exampleFormControlInput1').value + 
        "<br> Email: " + document.getElementById('exampleFormControlInput3').value + 
        "<br> Textin mətni: " + document.getElementById('exampleFormControlTextarea1').value

    }).then(
        message => alert("Məktub göndərildi")
    )
}