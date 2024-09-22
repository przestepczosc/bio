document.addEventListener('DOMContentLoaded', () => {
    const titleText = "@kropel";
    let index = 1;
    let adding = true;

    function animateTitle() {
        if (adding) {
            document.title = titleText.slice(0, index);
            index++;
            if (index > titleText.length) {
                adding = false;
                setTimeout(animateTitle, 1000);
                return;
            }
        } else {
            document.title = titleText.slice(0, index);
            index--;
            if (index === 1) {
                adding = true;
                setTimeout(animateTitle, 500);
                return;
            }
        }
        setTimeout(animateTitle, 300);
    }

    animateTitle();
});