function sendMail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validation
    if(!name || !email || !message){
        alert("Please fill all fields");
        return;
    }

    let parms = {
        from_name: name,
        from_email: email,
        from_message: message
    }
    emailjs.send("service_96g0ida", "template_lb0pvh8", parms)
    .then(function(){
        alert("Email sent successfully");

        // Clear Form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(function(error){
        alert("Failed to send email");
        console.log(error);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const hamburger = document.querySelector('.hamburger');
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    });
});