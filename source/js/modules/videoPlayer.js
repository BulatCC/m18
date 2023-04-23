export const videoPlayer = () => {
    const player = document.querySelector('[data-player]');
    if (!player) {
        return;
    }

    const video = player.querySelector('[data-player-video]');
    const playButton = player.querySelector('[data-play-button]');

    playButton.addEventListener('click', () => {
        video.play();
        video.setAttribute('controls', '');
        player.classList.add('active');
        playButton.remove();
    });
};
