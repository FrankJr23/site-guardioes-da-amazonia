document.addEventListener('DOMContentLoaded',() => {
    const images = [
        '../img/slide/arara.webp',
        '../img/slide/floresta.webp',
        '../img/slide/sauim-colera.webp',
        '../img/slide/anta.webp',
        '../img/slide/ariranha.webp',
        '../img/slide/galo-da-serra.webp',
        '../img/slide/k_preguica.webp',
        '../img/slide/gaviao-real.webp',
        '../img/slide/natureza-am.webp',
        '../img/slide/onca-pintada.webp',
        '../img/slide/peixe-boi.webp',
        '../img/slide/rios.webp',
        '../img/slide/tamandua.webp',
        '../img/slide/anaconda.webp',
        '../img/slide/boto.webp',
        '../img/slide/flamingos.webp',
        '../img/slide/f_rios.webp',
        '../img/slide/macaco-.webp',
        '../img/slide/maracaja.webp',
        '../img/slide/pirarucu.webp',
        '../img/slide/vitoria-regia.webp'
];

    const slideshow = document.getElementById('slideshow');
    let lastIndex = -1;
    function carregarImg() {
        if (!slideshow) {
            console.error ('Elemento não encontrado.');
            return;
        }
        let randomIndex;
        do { randomIndex = Math.floor(Math.random() * images.length);
        
        } while (randomIndex === lastIndex);
        lastIndex = randomIndex;

        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.src=images[randomIndex];
            slideshow.style.opacity =1;
        }, 500);
    }

    setInterval(carregarImg, 10000);
    carregarImg();
})