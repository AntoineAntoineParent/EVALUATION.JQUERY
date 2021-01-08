$(document).ready(function () {
    $.ajax({
        url:
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0fb0ab1bd3f049269e220a244d7865fb",
        type: "get", 
        dataType: "json",
        success: function (data) {
            console.log(data.articles);
            for (i = 0; i < data.articles.length; i++) {
                $("#news").append("<div><img src=" + data.articles[i].urlToImage + "/><span>" + data.articles[i].title + "</span><a href=" + data.articles[i].url +" target=\"_blank\"> <button> Lire l'article</button>   </a></div>");
            }
        },
        error: function() {
            alert ("erreur réseau")
        }
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}



