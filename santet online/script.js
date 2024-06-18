document.getElementById('santetForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Hide form and show loading
    document.getElementById('santetForm').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    // Simulate sending process
    let progress = 0;
    let interval = setInterval(function () {
        progress += 10;
        document.getElementById('progress').innerText = progress;

        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('result').style.display = 'none';
            document.getElementById('success').style.display = 'block';
        }
    }, 500);
});
