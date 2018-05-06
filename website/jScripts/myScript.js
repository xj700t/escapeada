var resultsText = "";
var totalGames = "";
var identifier = "";

function myFunction() {
    resultsText = window.sessionStorage.getItem("results");
    totalGames = window.sessionStorage.getItem("totalGames");
    

    
    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function (data) {    
        identifier = data.ip;
        console.log(identifier)
        console.log(resultsText);
        console.log(totalGames);
        
        var myForm = document.getElementById("myForm");
        myForm.classList.remove("hidden");
        var myFormForward = document.getElementById("myFormForward");
        myFormForward.classList.remove("hidden");

        document.getElementById("userID").value = identifier;
        document.getElementById("stats").value = resultsText;
    });

    

}
