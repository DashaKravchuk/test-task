document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2022, 11, 31);
    let timer = null;
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timer);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector(".days-timer");
    const $hours = document.querySelector(".hours-timer");
    const $minutes = document.querySelector(".minutes-timer");
    const $seconds = document.querySelector(".seconds-timer");

    countdownTimer();
    timer = setInterval(countdownTimer, 1000);
});
