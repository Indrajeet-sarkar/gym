// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//     const nav = document.querySelector('header nav ul');
//     nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//     const nav = document.querySelector('header nav ul');
//     nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//     const nav = document.querySelector('header nav ul');
//     nav.classList.toggle('active');
// });


document.querySelector('.hamburger-menu').addEventListener('click', function(event) {
    // Prevent the event from propagating to the document click handler
    event.stopPropagation();

    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
});

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const nav = document.querySelector('header nav ul');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Check if the click is outside the menu and the hamburger button
    if (!nav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Prevent the menu from closing if clicking inside the menu itself
document.querySelector('header nav ul').addEventListener('click', function(event) {
    event.stopPropagation();
});




// Function to simulate page loading progress
// function simulatePageLoadProgress() {
//     let progressBar = document.getElementById('pageProgress');
//     let value = 0;

//     let interval = setInterval(function() {
//         value += 5;  // Increase progress by 5% every 100ms
//         progressBar.value = value;

//         // Stop when it reaches 100%
//         if (value >= 100) {
//             clearInterval(interval);
//         }
//     }, 100);
// }

// Call the function to simulate progress
// window.onload = simulatePageLoadProgress;

