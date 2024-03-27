    window.onload = function() {
        var NewPlantName1 = localStorage.getItem("NewPlantName1"); // Zmieniono na "NewPlantName1"
        if (NewPlantName1)
            document.getElementById("p1").textContent = NewPlantName1;