document.addEventListener("DOMContentLoaded", function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var elementToHide = document.getElementById('elementoParaEsconder');

    // Quando o menu abre, esconde o elemento
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        elementToHide.style.display = 'none';
    });

    // Quando o menu fecha, mostra o elemento novamente
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        elementToHide.style.display = 'block'; // Ou 'inline', 'flex', etc.
    });
});
