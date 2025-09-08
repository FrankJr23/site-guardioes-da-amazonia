document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.links-relacionados');
    const roller = document.querySelector('.roller');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel || !roller || !prevBtn || !nextBtn) {
    console.error('Um ou mais elementos do carrossel não foram encontrados.');
    return;
    }

    const firstItem = document.querySelector('.item-roller');
    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : 320; // + 20px de gap

    nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += scrollAmount;
    });


    prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= scrollAmount;
    });
});