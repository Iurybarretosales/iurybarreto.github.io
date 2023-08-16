const $html = document.querySelector('html')
const $checkbox = document.getElementById('botao-checkbox')

$checkbox.addEventListener('click', function() {
    $html.classList.toggle('dark-mode')
})


    
