
let icon = document.querySelector('.navbar-toggler');
let bars = document.querySelectorAll('.hamburguer-icon span')

icon.addEventListener('click', ()=>{
    bars.forEach(element => {
        element.classList.toggle('close-icon');
    });
})
