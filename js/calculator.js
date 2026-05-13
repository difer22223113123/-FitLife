function calculatePrice() {
    const directionPrice = parseFloat(document.getElementById('direction').value);
    const multiplier = parseFloat(document.getElementById('subType').value);
    const sessions = parseInt(document.getElementById('sessions').value);
    
    // Formula: (Base Price / 8) * selected sessions * multiplier
    // This allows for dynamic pricing based on the amount of sessions
    const basePerSession = directionPrice / 8;
    const total = basePerSession * sessions * multiplier;
    
    const display = document.getElementById('totalPrice');
    display.innerText = `${Math.round(total).toLocaleString()} so'm`;
    
    // Smooth update effect
    display.style.transform = 'scale(1.1)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
}

document.querySelectorAll('.calc-input').forEach(input => {
    input.addEventListener('input', calculatePrice);
    input.addEventListener('change', calculatePrice);
});

// Initial calculation
window.addEventListener('load', calculatePrice);
