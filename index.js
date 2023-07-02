document.addEventListener('DOMContentLoaded', function() {
    const cardElements = document.querySelectorAll('.glowing-div');

    cardElements.forEach(function(cardElement) {
        cardElement.addEventListener('mouseenter', function() {
            cardElement.classList.add('fa-beat');
        });

        cardElement.addEventListener('mouseleave', function() {
            cardElement.classList.remove('fa-beat');
        });
    });
});
