const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");

bars.onclick = function () {
    navBar.classList.toggle("active");
    bars.classList.toggle("cross");
};

window.addEventListener("DOMContentLoaded", function() {
    var referencia = document.querySelector('.referencia');
    referencia.addEventListener('mouseenter', function() {
        this.style.overflowY = 'scroll'; 
    });
    referencia.addEventListener('mouseleave', function() {
        this.style.overflowY = 'auto'; 
    });
});


//scroll
document.addEventListener('DOMContentLoaded', (event) => {
    var contentSms = document.getElementById('contentSms');
    contentSms.scrollTop = contentSms.scrollHeight;
});
