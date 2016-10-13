window.onload = function() {
    var button = document.getElementById('yes');
    button.onclick = function() {
        var div = document.getElementById('show');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        } else {
            div.style.display = 'block';
        }
    };
}