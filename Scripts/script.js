document.getElementById('menu').onclick = function() {
    document.getElementById('aside').classList.toggle('visible');
}
document.getElementById('season8').onclick = function() {
    document.getElementById('episode').classList.toggle('hiden');
    document.getElementById('arrow').classList.toggle('arrowRotated');
}
document.getElementById('season7').onclick = function() {
    document.getElementById('episode7').classList.toggle('hiden');
    document.getElementById('arrow7').classList.toggle('arrowRotated');
}