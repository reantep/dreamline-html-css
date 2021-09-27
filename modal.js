// sign-up
document.getElementById('sign-up-btn').addEventListener('click',
function () {
    document.querySelector('.sign-up').style.display ='flex'
});

document.querySelector('.close-btn').addEventListener('click',
function() {
    document.querySelector('.sign-up').style.display = 'none'
});

// sign-in
document.getElementById('sign-in-redirect').addEventListener('click',
function () {
    document.querySelector('.sign-in').style.display ='flex'
});

document.querySelector('.close-btn-sign-in').addEventListener('click',
function() {
    document.querySelector('.sign-in').style.display = 'none'
});
document.querySelector('.close-btn-sign-in').addEventListener('click',
function() {
    document.querySelector('.sign-up').style.display = 'none'
});

// preview
document.getElementById('preview-btn').addEventListener('click',
function () {
    document.querySelector('.preview').style.display ='flex'
});

document.querySelector('.preview-close-btn').addEventListener('click',
function() {
    document.querySelector('.preview').style.display = 'none'
})