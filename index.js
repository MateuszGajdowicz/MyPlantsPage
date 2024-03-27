window.onload = function() {
        var NewPlantName = localStorage.getItem("NewPlantName1");
        if (NewPlantName)
            document.getElementById("plant1label").textContent = NewPlantName;
        }