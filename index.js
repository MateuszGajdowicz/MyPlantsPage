window.onload = function() {
        var NewPlantName = localStorage.getItem("NewPlantName");
        if (NewPlantName)
            document.getElementById("plant1label").textContent = NewPlantName;
        }