const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count');

likeButton.addEventListener('click', () => {
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
});