const darkmode = document.getElementById('darkmode');
const logo = document.getElementById('logo');
const burger  = document.getElementById('burgerimage');
const chatimg = document.getElementById('chatimg');
const logojameco = document.getElementById('logojameco');


darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkmode.src = "icons/night-mode copy.png";  
        logo.src = 'logos/at s.png'; 
        burger.src = 'icons/text copy.png';
        chatimg.src = 'icons/chat copy.png';
        logojameco.src = 'logos/JAMECO STORE-1.png'; 

    } else {
        darkmode.src = 'icons/night-mode.png';
        logo.src = 'logos/at.png'; 
        burger.src = 'icons/text.png';
        chatimg.src = 'icons/chat.png';
        logojameco.src = 'logos/JAMECO STORE.png';
    }
});

// chat ko
const chaticon = document.getElementById("chat-icon");
const ashylgan = document.getElementById("ashyluganchat");

chaticon.addEventListener("click", () => {
    if (ashylgan.style.display === "none") {
        ashylgan.style.display = "block";
    } else {
        ashylgan.style.display = "none";
    }

});

document.getElementById("forma").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('https://script.google.com/macros/s/AKfycbyWmTajeGdGYK7CP42KTJY5w--YSYY7RuwM5hgZlfB-YMJDrpGk0LHUTrYboo-e8R7umQ/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => alert('u zhanym sol'))
    .catch(error => alert('UU brat'));

    e.target.reset();
});