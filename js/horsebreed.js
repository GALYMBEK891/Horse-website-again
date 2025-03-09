async function loadHorseData() {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxAwXNy0I36thX72x7kjgiyopXtLkVgsTv6BtHTx3srjE84AfwnvG_VpKN-HpkSu8kb/exec');
    const data = await response.json();
    const sidebar = document.getElementById('sidebar');
    const showAllBtn = document.getElementById('showAllBtn');

    sidebar.innerHTML = '';

    const contentImage = document.getElementById('horseImage');
    const contentDetails = document.getElementById('horseDetails');

    data.slice(0, 5).forEach(horse => {
        const item = createHorseItem(horse, contentImage, contentDetails);
        sidebar.appendChild(item);
    });

    if (data.length > 5) {
        showAllBtn.style.display = 'block';

        showAllBtn.onclick = () => {
            data.slice(5).forEach(horse => {
                const item = createHorseItem(horse, contentImage, contentDetails);
                sidebar.appendChild(item);
            });
            showAllBtn.style.display = 'none';
        };
    }
}

function createHorseItem(horse, contentImage, contentDetails) {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
        <img class="imagefromsidebar" src="${horse.image}" alt="">
        <div style="display:flex; flex-direction:column; align-items:start;">
            <div>${horse.name}</div>
            <div>${horse.origin}</div>
        </div>
    `;
    item.onclick = () => {
        contentImage.src = horse.image;
        contentDetails.innerHTML = `
            <h2>${horse.name}</h2>
            <p><b>Шығу тегі:</b> ${horse.origin}</p>
            <p><b>Ерекшеліктері:</b> ${horse.features}</p>
            <p><b>Үздік қолдану саласы:</b> ${horse.usage}</p>
        `;
    };
    return item;
}

loadHorseData();
