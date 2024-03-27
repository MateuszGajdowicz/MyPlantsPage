    window.onload = function() {
        var NewPlantName1 = localStorage.getItem("NewPlantName1"); // Zmieniono na "NewPlantName1"
        if (NewPlantName1)
            document.getElementById("p1").textContent = NewPlantName1;
        var NewPlantName2 = localStorage.getItem("NewPlantName2");
        if (NewPlantName2)
            document.getElementById("p1").textContent = NewPlantName2;}