import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

const delayedDataSave = throttle((data) => {
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

feedbackForm.addEventListener('input', (ev) => {
    if (ev.target.name === 'email' || ev.target.name === 'message') {
        const feedbackFormData = {
            email: feedbackForm.elements.email.value,
            message: feedbackForm.elements.message.value
        };

        //localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
        delayedDataSave(feedbackFormData);
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (storedData) {
        feedbackForm.elements.email.value = storedData.email;
        feedbackForm.elements.message.value = storedData.message;
    }
    else {
        feedbackForm.reset();
    };

    feedbackForm.addEventListener('submit', (ev) => {
        ev.preventDefault();

        console.log("Email:", feedbackForm.elements.email.value);
        console.log("Message:", feedbackForm.elements.message.value);

        localStorage.removeItem('feedback-form-state');
        feedbackForm.reset();
    });
});