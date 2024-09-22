document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=RfXToDAeVNo";
});


function detectDevTools() {
    const threshold = 160;
    const widthThreshold = 100;
    let devToolsOpened = false;

    setInterval(function() {
        if (
            window.outerHeight - window.innerHeight > threshold ||
            window.outerWidth - window.innerWidth > widthThreshold 
        ) {
            if (!devToolsOpened) {
                devToolsOpened = true;
                window.location.href = "https://www.youtube.com/watch?v=RfXToDAeVNo";
            }
        } else {
            devToolsOpened = false;
        }
    }, 500);
}

detectDevTools();