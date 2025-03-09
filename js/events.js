async function fetchData() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw5foOOe29Xdna90o9pP48vJxozIXlLsmjQZ7eBg9pFI_8ffChV7UF8jgMirxAJGeQR6g/exec");
        const data = await response.json();

        let container = document.getElementById("events-container");
        if (!container) return;
        container.innerHTML = "";

        const map = L.map('map').setView([48.0196, 66.9237], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        data.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("cardevent");

            div.innerHTML = `
                <img src="${item.image}" alt="Image">
                <h3>${item.name}</h3>
                <p><strong>Қашан:</strong> ${item.date}</p>
                <p><strong>Орналасқан жері:</strong> ${item.location}</p>
                <p>${item.description}</p>
            `;

            container.appendChild(div);

            const marker = L.marker([parseFloat(item.latitude), parseFloat(item.longitude)])
                .addTo(map)
                .bindPopup(`
                    <h3>${item.name}</h3>
                    <p><strong>Қашан:</strong> ${item.date}</p>
                    <p><strong>Орналасқан жері:</strong> ${item.location}</p>
                `);
        });
    } catch (error) {
        console.error("ERROR", error);
    }
}

fetchData();
