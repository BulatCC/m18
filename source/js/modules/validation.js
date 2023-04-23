export const validation = (form) => {
    if (!form) {
        return;
    }

    const validateName = (nameInput) => {
        let isValid = true;
        const reg = /^[A-zА-яЁё\s]+$/i;

        if (nameInput.value.length < 4 || nameInput.value.match(reg) === null) {
            nameInput.closest('[data-form-input-wrap]').classList.add('error');
            isValid = false;
        } else {
            nameInput.closest('[data-form-input-wrap]').classList.remove('error');
            isValid = true;
        }

        return isValid;
    };

    const validateEmail = (emailInput) => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let isValid = true;

        if (emailInput.value.match(reg) === null) {
            emailInput.closest('[data-form-input-wrap]').classList.add('error');
            isValid = false;
        } else {
            emailInput.closest('[data-form-input-wrap]').classList.remove('error');
            isValid = true;
        }

        return isValid;
    };

    // для валидации телефона лучше использовать библиотеку ввода по маске
    const validateTel = (teltInput) => {
        const reg = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        let isValid = true;

        if (teltInput.value.match(reg) === null) {
            teltInput.closest('[data-form-input-wrap]').classList.add('error');
            isValid = false;
        } else {
            teltInput.closest('[data-form-input-wrap]').classList.remove('error');
            isValid = true;
        }

        return isValid;
    };

    const nameField = form.querySelector('[data-form-name]');
    const emailField = form.querySelector('[data-form-email]');
    const telField = form.querySelector('[data-form-tel]');
    const submitButton = form.querySelector('[data-form-button]');
    let isValidName = false;
    let isValidEmail = false;
    let isTelValid = false;

    const activateButton = () => {
        if (isValidName && isValidEmail) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', '');
        }

        if (telField.value.length > 0 && isTelValid) {
            submitButton.removeAttribute('disabled');
        }

        if (telField.value.length > 0 && !isTelValid) {
            submitButton.setAttribute('disabled', '');
        }
    };

    nameField.addEventListener('input', () => {
        isValidName = validateName(nameField);
        activateButton();
    });

    emailField.addEventListener('input', () => {
        isValidEmail = validateEmail(emailField);
        activateButton();
    });

    telField.addEventListener('input', () => {
        isTelValid = validateTel(telField);
        activateButton();
    });
};
