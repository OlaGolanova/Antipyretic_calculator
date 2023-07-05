resultIbuprofen.onkeyup = function() {
    document.querySelector('.mg_i').textContent = document.getElementById('resultIbuprofen').value * 10;
    document.querySelector('.ml_i').textContent = (document.getElementById('resultIbuprofen').value * 0.5).toFixed(1);
};

resultParacetomol.onkeyup = function() {
    document.querySelector('.mg_p').textContent = document.getElementById('resultParacetomol').value * 15;
};
radio_120.onclick = function() {
    document.querySelector('.ml_p').textContent = (document.getElementById('resultParacetomol').value * 0.625).toFixed(1);
}, {once : true};
radio_150.onclick = function() {
    document.querySelector('.ml_p').textContent = (document.getElementById('resultParacetomol').value * 0.5).toFixed(1);
}, {once : true};

resultParacetomol.onkeyup = function() {
    if (radio_120.checked) {
        document.querySelector('.mg_p').textContent = document.getElementById('resultParacetomol').value * 15;
        document.querySelector('.ml_p').textContent = (document.getElementById('resultParacetomol').value * 0.625).toFixed(1);
    }
    else {
        document.querySelector('.mg_p').textContent = document.getElementById('resultParacetomol').value * 15;
        document.querySelector('.ml_p').textContent = (document.getElementById('resultParacetomol').value * 0.5).toFixed(1);
    } 
 };


  