// @ts-check

window.addEventListener('load', () => {
    initialize();
});

async function startPipMode(video) {

    try {
       /** @type {MediaStream} */
       const stream = await navigator.mediaDevices.getDisplayMedia({
           video: true,
       });

        video.srcObject = stream;
        video.width = 200;
        video.autoplay = true;
    } catch(err) {
        console.error(err);
    }
}

async function initialize() {
    const button = document.getElementById('mirror');
    const pipButton = document.getElementById('pipMode');
    const video = document.createElement('video');

    button.addEventListener('click', () => {
        if (!video.paused && !video.ended) {
            video.requestPictureInPicture();
        } else {
            // Enable Auto Play on user interaction.
            video.play();

            startPipMode(video);
            button.innerText = 'Step Two: Enable Picture In Picture Mode.'
        }
    });
}
