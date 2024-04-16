const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
        let likeCount = likeButton.nextElementSibling;
        let currentCount = parseInt(likeCount.textContent);
        likeCount.textContent = currentCount + 1;
    });
});