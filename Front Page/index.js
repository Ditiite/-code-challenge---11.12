// Display text when press link - read more
function showText() {
    let text = document.getElementById('more-text');
    if(text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}