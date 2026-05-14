export function initCalc() {
    const directionEl = document.getElementById('direction');
    const subTypeEl = document.getElementById('subType');
    const sessionsEl = document.getElementById('sessions');
    const display = document.getElementById('totalPrice');

    if (!directionEl || !subTypeEl || !sessionsEl || !display) return;

    function calculatePrice() {
        const directionPrice = parseFloat(directionEl.value);
        const multiplier = parseFloat(subTypeEl.value);
        const sessions = parseInt(sessionsEl.value);
        
        const basePerSession = directionPrice / 8;
        const total = basePerSession * sessions * multiplier;
        
        display.innerText = `${Math.round(total).toLocaleString()} сум`;
        
        display.style.transition = 'transform 0.2s ease';
        display.style.transform = 'scale(1.05)';
        setTimeout(() => {
            display.style.transform = 'scale(1)';
        }, 200);
    }

    [directionEl, subTypeEl, sessionsEl].forEach(input => {
        input.addEventListener('input', calculatePrice);
    });

    calculatePrice();
}
