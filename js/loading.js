function enterSite() {
    const clickToEnter = document.getElementById('click-to-enter');
    const content = document.getElementById('content');

    // Dodaj animację powiększenia
    clickToEnter.classList.add('expand');

    // Pokaż content po zakończeniu animacji powiększania
    setTimeout(function() {
        // Ukryj overlay
        document.getElementById('enter-overlay').classList.add('hidden');
        
        // Ustaw content jako widoczny
        content.style.display = 'flex'; 
        content.style.opacity = '1'; 
        
        // Rozjaśnij wideo w tle
        document.getElementById('background-video').classList.add('brighten-video');
        
        // Uruchom muzykę
        document.getElementById('background-music').play();
    }, 500);  // Pokaż content po 500ms, co jest czasem trwania animacji
}