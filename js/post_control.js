fetch('http://localhost/Mecsek_Si_WEB/Backend/php/hirdetmenyWrite.php')
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('posts');

        // Ellenőrizzük, van-e hirdetmény
        if (data.length > 0) {
            // Hirdetmény értesítés megjelenítése
            document.getElementById('hirdetmenyAlert').style.display = 'block';
        }

        // Az egyes hirdetmények feldolgozása
        data.forEach(hirdetmeny => {
            // Card létrehozása Bootstrap használatával
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4'); // 3 oszlopos elrendezés (12/3 = 4)
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${hirdetmeny.cim}</h5>
                        <p class="card-text">${hirdetmeny.tartalom}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Létrehozva: ${hirdetmeny.letrehozas_datum}
                    </div>
                </div>
            `;
            
            // A kártya hozzáadása a posts div-hez
            postsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Hiba a hirdetmények lekérésekor:', error);
    });