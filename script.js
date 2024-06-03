document.getElementById('pythagoras-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Palun sisesta kehtivad numbrid.');
        return;
    }

    const c = Math.sqrt(a * a + b * b).toFixed(2);

    document.getElementById('result').textContent = `C külg on: ${c}`;
});