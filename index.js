// JavaScript
window.onload = function() {
    let plantName = localStorage.getItem('plantName1');
    if (plantName) {
        document.getElementById('plant1label').textContent = plantName;
    } else {
        document.getElementById('plant1label').textContent = "Plant 1";
    }
}
