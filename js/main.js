// Tartalom hozzárendelése minden termékhez
const productContents = {
    roofrack: `
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <h2 class="section-title">Thule tetőtartók</h2>
                    <p>Már nincs hova pakolni?
                            Dugig van az autód és nem fér be a sífelszerelés a csomagtartóba?
                            Mindennek az alapja egy masszív Thule tetőcsomagtartó.
                            A tökéletes teherhordó lábak és a keresztrudak.
                            Használd a baloldali menüt a gépjárműved típusának megfelelő tetőtartó kiválasztásához.</p>
                </div>
                <div class="col-lg-6 text-lg-end">
                    <div class="img-wrap">
                        <img src="images/thule_roofrack.jpg" alt="Thule Tetőtartók" class="img-fluid">
                    </div>
                </div>

                  <div class="col-lg-12">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col"><h3><a href="rapid750.html">Thule Rapid 750 </a></h3></th>
                            <th scope="col"><h3><a href="rapid751.html">Thule Rapid 751 </a></h3></th>
                            <th scope="col"><h3><a href="rapid755.html">Thule Rapid 755 </a></h3></th>
                            </tr>
                        </thead>
                        </table>
                </div>
                
            </div>
        </div>
    `,
    roofbox: `
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <h2 class="section-title">Thule Tetőboxok</h2>
                    <p>Védd meg sí vagy snowboard felszerelésed és növeld meg a szállítási kapacitásod!
A Thule tetőboxok tökéletes megoldást nyújtanak a sífelszerelések, táskák és egyéb csomagok biztonságos szállításához.</p>
                </div>
                <div class="col-lg-6 text-lg-end">
                    <div class="img-wrap">
                        <img src="images/Thulechoicebox.jpg" alt="Thule Tetőboxok" class="img-fluid">
                    </div>
                </div>

                <div class="col-lg-12">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col"><h3><a href="./boxes/pacific500.html">Thule Pacific 500 </a></h3></th>
                            <th scope="col"><h3><a href="./boxes/vision850.html">Thule Vision 850 </a></h3></th>
                            <th scope="col"><h3><a href="./boxes/atlantis900.html">Thule Atlantis 900 </a></h3></th>
                            </tr>
                        </thead>
                        </table>
                </div>
            </div>
        </div>
    `,
    bicycle: `
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <h2 class="section-title">Thule Kerékpártartók</h2>
                    <p>Az úton és úttalan utakon... Bárhová is mész, akár csak Te vagy a családod, a Thule kerékpártartó megoldja a szállítási gondodat - gyorsan, könnyen, és biztonságosan.A megfelelő kerékpártartó kiválasztásához válassz a baloldali menüből.</p>
                </div>
                <div class="col-lg-6 text-lg-end">
                    <div class="img-wrap">
                        <img src="images/bike-rack-roof.jpg" alt="Thule Kerékpártartók" class="img-fluid">
                    </div>
                </div>

                  <div class="col-lg-12">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col"><h3><a href="./bikes/bikecross.html">Thule kereszttartós </a></h3></th>
                            <th scope="col"><h3><a href="./bikes/bikehorog.html">Thule vonóhorgos</a></h3></th>
                            </tr>
                        </thead>
                        </table>
                </div>
            </div>
        </div>
    `,
    snowchain: `
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <h2 class="section-title">Thule Hóláncok</h2>
                    <p class="text-danger">Télen enélkül egy lépést sem!</p>
                    <p> 

                                Ne hagyd, hogy az időjárás döntse el, meddig fogsz eljutni!
                                Vezess óvatosan, de magabiztosan a havas utakon is. A Thule innovatív hólánca gyorsan és könnyen felhelyezhető.
                                A baloldali menüből válaszd ki a Neked legmegfelelőbb hóláncot.</p>
                </div>
                <div class="col-lg-6 text-lg-end">
                    <div class="img-wrap">
                        <img src="images/thule2.png" alt="Thule Hóláncok" class="img-fluid">
                    </div>
                </div>

                 <div class="col-lg-12">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col"><h3><a href="./snowchain/cs10.html">Thule CS-10</a></h3></th>
                            </tr>
                        </thead>
                        </table>
                </div>
            </div>
        </div>
    `
};

// Alapértelmezett tartalom (ha máshová kattintasz)
const defaultContent = `
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-6">
                <h2 class="section-title">Thule termékek kölcsönzése</h2>
                <p>A Mecsek Sí Bt., mint a THULE hivatalos márkaboltja, segítséget nyújt Neked a téli körülmények közötti biztos célba érkezéshez, valamint a sportfelszerelés eljuttatásában is.
                    Kínálatunkban megtalálod a tetőboxokat, síléctartókat és hóláncokat, amelyeket kölcsönözhetsz vagy ha megtetszett, akár meg is vásárolhatsz. A tetőtartó- és sporteszközszállító rendszerek gyártásában világeső THULE cég professzionális termékei szerszámok nélkül, gyorsan felszerelhetők bármilyen kereszttartó rúdra. A rugós nyitószerkezet könnyebbé teszi a boxok nyitását és zárását. Általában a boxok központi zárral vannak felszerelve, amelyből a kulcs csak akkor távolítható el, ha minden zár be van zárva.
                    A felső menüből válaszd ki azt a termékcsoportot, amelyik érdekel!
                </p>
            </div>
            <div class="col-lg-6 text-lg-end">
                <div class="img-wrap">
                    <img src="images/thule3.jpg" alt="Thule termékek" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
`;

// Esemény figyelő a képekre kattintáshoz
document.querySelectorAll('.post-thumbnail').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett hivatkozás viselkedést
        
        // A termék típusának megszerzése (data-product attribútum alapján)
        const productType = this.getAttribute('data-product');
        
        // Az aboutThule div frissítése a megfelelő tartalommal
        const aboutThuleDiv = document.getElementById('aboutThule');
        aboutThuleDiv.innerHTML = productContents[productType];


        // Megállítja az esemény további terjedését, hogy ne hívódjon meg a "document" esemény
        event.stopPropagation();
    });
});

// Ha bárhová máshová kattintasz az oldalon, töltse be az alapértelmezett tartalmat
document.addEventListener('click', function() {
    const aboutThuleDiv = document.getElementById('aboutThule');
    aboutThuleDiv.innerHTML = defaultContent;
});
