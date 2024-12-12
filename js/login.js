document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // معالجة نموذج التسجيل
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Registration form submitted");

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
            const phonePattern = /^\d{10}$/;

            if (firstName === '') {
                alert('First name is required.');
                return;
            }

            if (lastName === '') {
                alert('Last name is required.');
                return;
            }

            if (!phonePattern.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!passwordPattern.test(password)) {
                alert('Password must be 8-20 characters long and contain both letters and numbers.');
                return;
            }

            const user = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password
            };

            const existingUsers = JSON.parse(localStorage.getItem('overviewuser')) || [];
            existingUsers.push(user);
            localStorage.setItem('overviewuser', JSON.stringify(existingUsers));

            alert('Form submitted successfully!');
            document.location = "inbody.html";
        });
    }

    // معالجة نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Login form submitted");

            const email = document.getElementById('exampleInputEmail1').value.trim();
            const password = document.getElementById('exampleInputPassword1').value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!passwordPattern.test(password)) {
                alert('Please enter a correct password.');
                return;
            }

            const users = JSON.parse(localStorage.getItem('overviewuser'));

            if (!users) {
                alert('No users found. Please sign up first.');
                return;
            }

            let userFound = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    userFound = true;
                    break;
                }
            }

            if (userFound) {
                document.location = "overview.html";
            } else {
                alert('Please enter a correct email or password.');
            }
        });
    } else {
        console.error("Login form not found");
    }
});
