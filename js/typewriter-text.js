document.addEventListener('DOMContentLoaded', () => {
    const texts = ["trusted seller", "vkie enjoyer", "founder of boostpanel.pl"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let speed = 200;

    const typingElement = document.getElementById('typing-text');

    function type() {
        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;

            if (currentCharIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;

            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
            }
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type();
});
