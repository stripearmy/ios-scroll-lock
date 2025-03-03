const islHolder = document.querySelector('.isl_holder');
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function setIOSHeight() {
    document.documentElement.style.setProperty('--isl-vh', window.innerHeight * .01 + 'px');
}

if (isIOS) {
    setIOSHeight();
    window.addEventListener('resize', setIOSHeight);
}