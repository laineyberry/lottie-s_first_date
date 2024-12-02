document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('soundbutton');
    const audio = document.getElementById('menusound');

    button.addEventListener('click', () => {

        audio.muted = false;    
        audio.play();
        
    });
});