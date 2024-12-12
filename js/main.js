// Change navbar on scroll
window.onscroll = function () {
    scrollFunction();
    scrollby();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.classList.add("scroll");
        navbar.classList.remove("con-nav");
    } else {
        navbar.classList.add("con-nav");
        navbar.classList.remove("scroll");
    }
}
function scrollby(){
    var navbar = document.getElementById("nav");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.classList.remove("nav");
    } else {
        navbar.classList.add("nav");
        
    }
    
}
function topFunction() {
    // For modern browsers
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll smooth
    });

    // For older browsers
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
}
document.getElementById('bmi').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMI();
});

function calculateBMI() {
    // Retrieve input values
    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;

    // Perform BMI calculation
    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById('dopeBMI').value = bmi.toFixed(2); // Display BMI with two decimal places
    } else {
        alert('Please enter valid values for weight and height.');
    }
}

