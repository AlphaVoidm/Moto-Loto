document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buy-button');
    const messageDiv = document.getElementById('message');

    buyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button behavior
        messageDiv.innerText = 'Bought successfully!';
    });

    document.querySelectorAll('.color-choose input').forEach(input => {
        input.addEventListener('change', function() {
            const motoColor = this.getAttribute('data-image');
            document.querySelectorAll('.left-column img').forEach(img => img.classList.remove('active'));
            document.querySelector(`.left-column img[data-image="${motoColor}"]`).classList.add('active');
        });
    });
});
