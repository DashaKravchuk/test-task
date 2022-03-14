function sendRequest(email) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://localhost');
    xhr.send(email);

    xhr.onload = () => showPopup();
    xhr.upload.onerror = function() {
        alert(`Error: ${xhr.status}`);
    };
}

function onFormSubmit() {
    const input = document.querySelector('.input-form');
    const email = input.value;

    showPopup();
    sendRequest(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const formSubmitButton = document.getElementById('submit-button');
    const formSubmit = document.getElementById('submit');
    const closeButtons = document.querySelectorAll('.close-button');

    closeButtons.forEach((btn) => {
        btn.addEventListener('click', hidePopup);
    });

    formSubmitButton.addEventListener('click', (event) => {
        formSubmit.click();
    });
});
