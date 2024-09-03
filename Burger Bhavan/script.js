document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.speak');

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const text = element.getAttribute('data-text');
            speakText(text);
        });
        element.addEventListener('mouseleave', () => {
            stopSpeaking();
        });
    });
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
}
