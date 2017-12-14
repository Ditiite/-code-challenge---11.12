// Display text when press link - read more
function showText() {
    let read = document.getElementById('read-less');
    let text = document.getElementById('more-text');
    
    if(text.style.display === 'none') {
        text.style.display = 'block';
        read.innerHTML = "/ Read Less /";
    } else {
        text.style.display = 'none';
        read.innerHTML = "/ Read More /";
    }
   
}

