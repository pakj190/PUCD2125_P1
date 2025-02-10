// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
    let overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    let overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.remove();
    }
    window.location.href = 'index.html';  // Go back to index.html
}

// Function to go to the next page
function goToPage() {
    window.location.href = 'page2.2.html';  // Go to page2.2.html
}
