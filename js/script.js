// var nameError = document.getElementById('nameId');
// var nameError = document.getElementById('emailId');
// var nameError = document.getElementById('msgId');

// function validetName(){
//     var names=document.getElementById('name').value;
//     if(names.length < 0){
//         nameError.innerHTML = 'Please enter your name';
//         // return false; 
//     }
// }
function buttonSubmition(){
    // name validetion
    var names=document.getElementById('name').value;
    var displayNAme=document.getElementById('nameId');
    if(names.length == 0){
        displayNAme.style.display = 'block';
    }else
    {
        displayNAme.style.display = 'none';
    }
    // email validetion
    var emails =document.getElementById('email').value;
    var displayEmail=document.getElementById('emailId');
    if(emails.length == 0){
        displayEmail.style.display = 'block';
    }else
    {
        displayEmail.style.display = 'none';
    }
    // messege validetion
    var messeges =document.getElementById('message').value;
    var displayMsg=document.getElementById('msgId');
    if(messeges.length == 0){
        displayMsg.style.display = 'block';
    }else
    {
        displayMsg.style.display = 'none';
    }
}