import { validation } from './validation';
import { fakeApi } from '../fakeApi';

export const formSubmit = () => {
    const form = document.querySelector('[data-form]');
    if (!form) {
        return;
    }

    const submitButton = form.querySelector('[data-form-button]');
    const formContainer = form.querySelector('[data-form-container]');
    const formContainerSubmited = form.querySelector('[data-submited-container]');
    validation(form);
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(form);
        const formValues = [...formData].map(([name, value]) => {
            return {
                [name]: value,
            };
        });

        submitButton.textContent = 'Отправка...';
        submitButton.setAttribute('disabled', '');

        fakeApi()
                .then(responce => {
                    if (responce === '200') {
                        formContainer.classList.remove('active');
                        formContainerSubmited.classList.add('active');
                        formValues.forEach(item => {
                            const paragraph = document.createElement('p');
                            paragraph.innerHTML = `${Object.keys(item)}: ${Object.values(item)}`;
                            formContainerSubmited.append(paragraph);
                            console.log(item);
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                    submitButton.textContent = 'Подписаться';
                    submitButton.removeAttribute('disabled');
                });
    });
};
