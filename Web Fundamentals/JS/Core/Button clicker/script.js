const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    button.parentNode.removeChild(button);
});


const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    loginButton.innerText = 'Logout';
});


const likeButton = document.querySelector('.btn.like');

likeButton.addEventListener('click', () => {
    alert('Ninja was liked');
});