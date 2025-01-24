document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        isValid = true;
        messages = [];

        if(username.length <3){
            isValid = false;
            messages.push("User Name should be over atleast 3 characters")
        }
        else{
            messages.push("");
        }

        if(!email.includes("@") && email.includes(".")){
            isValid = false;
            messages.push("Email is not valid");
        }
        else{
            messages.push("");
        }

        if(password.length <8){
            isValid = false;
            messages.push("Minimum 8 characters")
        }
        else{
            messages.push("");
        }

        feedbackDiv.style.display = "block";
        if(isValid === true){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        else{
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"
        }
        
    })
})