function openPopup() {
    document.getElementById('popup').style.display = 'block';
    let overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    let overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.remove();
    }
    window.location.href = '../index.html';  
}

function goToPage() {
    window.location.href = 'page3.2/page3.2.html';  
}
