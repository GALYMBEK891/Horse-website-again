// header
let aldyscrol = window.pageYOffset;
window.onscroll = function() {
    let kazir = window.pageYOffset;
    let firstheader = document.querySelector(".first-header");
    let second = document.querySelector(".second-header");
    let main = document.querySelector(".main-container");

    if (aldyscrol < kazir) {
        firstheader.style.top = "-110px"; 
        second.style.top = "0"; 
        second.style.zIndex = "1000"; 
        main.style.marginTop = "110px";  

        
    } else{
        firstheader.style.top = "0"; 
        second.style.top = "110px"; 
        main.style.marginTop = "240px";  

    }
    aldyscrol = kazir;
};


// time go -> info time
function newtime() {
    let kaz = new Date();
    let hours = kaz.getHours() % 12 || 12; 
    let min = kaz.getMinutes();
    let ampm =  hours = hours % 12 || 12; ;

            if (hours >= 12) {
                ampm = "AM";
            } else {
                ampm = "PM";
            }

           

    document.getElementById("your-time").textContent =
        hours.toString().padStart(2, "0") + ":" +
        min.toString().padStart(2, "0") + " " + ampm;
}

setInterval(newtime, 1000);
newtime();


// as a slider 
function changeImage(element, imageSrc, heading, subheading) {
    document.getElementById("mainImage").src = "./images/" + imageSrc;
    document.getElementById("caption").innerHTML = `<h2>${heading}</h2><p>${subheading}</p>`;
}



// burger
document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("active");
});


// autoplay  logo baskada reload ko
window.onload = function() {
    let iframe = document.getElementById("videoFrame");
    let src = iframe.src;
    iframe.src = src + "&autoplay=1";
};



// sheets 1 
async function fetchData() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxechsIA-0VR_L6iL6ov0hgoGcjatb5M1QtY8GG1YqddUn9cdfgB2UZG8BIxYSUQDM5/exec");
        const data = await response.json();
        let container = document.getElementById("product-list");

        if (!container) return;

        container.innerHTML = "";

        data.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <img src="${item.title}" alt="Image">
                <h3>${item.image}</h3>
                
            `;

            container.appendChild(div);
        });
    } catch (error) {
        console.error("ERROR", error);
    }
}


fetchData();


// eventter
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://script.google.com/macros/s/AKfycbyAnTlamuTE88540QkXteZ9Vaa79JJK_z3ZQpAu5TmakCpWnfu-BBWEFytEA7ocre1p/exec")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('events-list');

            data.forEach(event => {
                const card = document.createElement('div');
                card.className = 'eventincard';

                card.innerHTML = `
                    <div class="event-title">${event.name}</div>
                    <div class="event-date">${event.date}</div>
                    <div class="event-range">${event.range}</div>
                    <div class="event-location">${event.location}</div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
