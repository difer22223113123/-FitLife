document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Full Name Validation
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim().length < 5) {
        nameInput.classList.add('input-error');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameInput.classList.remove('input-error');
        nameError.style.display = 'none';
    }
    
    // Phone Validation (+7(XXX)-XXX-XX-XX)
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.add('input-error');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneInput.classList.remove('input-error');
        phoneError.style.display = 'none';
    }
    
    // Email Validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('input-error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailError.style.display = 'none';
    }
    
    if (isValid) {
        this.classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
        document.querySelector('.form-subtitle').classList.add('hidden');
    }
});
