var video = document.getElementById("myVideo");

// Обработчик события 'ended' вызывается, когда видео завершено
video.addEventListener("ended", function() {
    // Сбросить время воспроизведения на 0 и начать воспроизведение заново
    video.currentTime = 0;
    video.play();
});

