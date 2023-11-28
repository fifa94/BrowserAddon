// Detekce zapnutí prohlížeče
//window.addEventListener("online", function() {
// Zobrazení popup okna

//});

function getCenterOfScreen()
{
    const width = window.innerWidth;
    const height = window.innerHeight;

    return{
        x: width / 2,
        y: height / 2
    };

}

// Funkce pro zobrazení popup okna
function showPopup() {
    // Vytvoření elementu popup okna
    var popup = document.createElement("div");
    var center = getCenterOfScreen();

    popup.textContent = "Ahoj světe!";
    popup.style.position = "fixed";
    popup.style.backgroundColor = "#ccc";
    //popup.style.top = center.y - popup.clientHeight / 2;
    //popup.style.left = center.x - popup.clientWidth / 2;
    popup.style.top = "0";
    popup.style.left = "500";
    popup.style.width = "100px";
    popup.style.height = "100px";

    // Přidání elementu popup okna do dokumentu
    document.body.appendChild(popup);
}

showPopup();