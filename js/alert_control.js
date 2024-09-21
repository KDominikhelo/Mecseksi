// Az adatok lekérése az adott URL-ről
fetch('http://localhost/Mecsek_Si_WEB/Backend/php/felhivasWrite.php')
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Az első hirdetés adatainak felhasználása
            const felhivas = data[0];

            // A figyelmeztető doboz tartalmának beállítása
            const alertBox = document.getElementById('alertBox');
            alertBox.innerHTML = `
                <strong>${felhivas.cim}</strong>
                ${felhivas.leiras}
            `;

            // A doboz megjelenítése
            alertBox.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Hiba az adatok lekérésekor:', error);
    });

// Figyeljük a görgetési eseményt, hogy a doboz pozícióját változtassuk
window.addEventListener('scroll', () => {
    const alertBox = document.getElementById('alertBox');

    // Ha az oldal tetején vagyunk (scrollY = 0), akkor az oldal alján legyen a doboz
    if (window.scrollY === 0) {
        alertBox.classList.remove('top');
        alertBox.classList.add('bottom');
    } else {
        // Ha görgetünk, akkor a doboz felülre ugrik
        alertBox.classList.remove('bottom');
        alertBox.classList.add('top');
    }
});