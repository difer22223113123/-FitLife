export function initValidator() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    const fields = {
        name: {
            el: document.getElementById('fullName'),
            group: document.getElementById('nameGroup'),
            validate: (val) => val.trim().length >= 5
        },
        phone: {
            el: document.getElementById('phone'),
            group: document.getElementById('phoneGroup'),
            validate: (val) => /^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(val)
        },
        email: {
            el: document.getElementById('email'),
            group: document.getElementById('emailGroup'),
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
        },
        time: {
            group: document.getElementById('timeGroup'),
            validate: () => {
                const radios = document.getElementsByName('time');
                return Array.from(radios).some(r => r.checked);
            }
        }
    };

    function showError(fieldKey, show) {
        const field = fields[fieldKey];
        if (show) {
            field.group.classList.add('has-error');
        } else {
            field.group.classList.remove('has-error');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        Object.keys(fields).forEach(key => {
            const field = fields[key];
            const isValid = field.validate(field.el ? field.el.value : null);
            showError(key, !isValid);
            if (!isValid) isFormValid = false;
        });

        if (isFormValid) {
            form.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
            document.querySelector('.form-subtitle')?.classList.add('hidden');
            
            // Log for demo purposes
            console.log('Form submitted successfully:', new FormData(form));
        }
    });

    // Real-time validation
    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (field.el) {
            field.el.addEventListener('input', () => {
                if (field.group.classList.contains('has-error')) {
                    const isValid = field.validate(field.el.value);
                    showError(key, !isValid);
                }
            });
        }
    });
}
