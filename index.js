// JavaScript
window.onload = function() {
    let plantName = localStorage.getItem('plantName');
    if (plantName) {
        document.getElementById('plantNameDisplay').textContent = plantName;
    } else {
        document.getElementById('plantNameDisplay').textContent = "Plant 1";
    }
}
