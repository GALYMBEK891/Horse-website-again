async function showResults(year) {
    fetch(`https://script.google.com/macros/s/AKfycbyQovttc6rlt7-xpISFebHY7cPwo7AwOE2qlwWMruifoaGikEch-_1iND6oY2mbVyNL/exec`)
        .then(response => response.json())
        .then(jsonData => {
            let resultsHTML = `<table>
                <tr>
                    <th>Жарыс атауы</th>
                    <th>Өтілген орны</th>
                    <th>Күні</th>
                </tr>`;

            jsonData.forEach(row => {
                if (row.date.includes(year)) {
                    resultsHTML += `
                    <tr class="competition-row" onclick="toggleDetails(this)">
                        <td>${row.name}</td>
                        <td>${row.location}</td>
                        <td>${row.date}</td>
                    </tr>
                    <tr class="details">
                        <td colspan="3">
                            <strong>Winners:</strong> ${row.winners}
                        </td>
                    </tr>`;
                }
            });

            resultsHTML += `</table>`;
            document.getElementById('results-container').innerHTML = resultsHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function toggleDetails(row) {
    row.classList.toggle('active');
}