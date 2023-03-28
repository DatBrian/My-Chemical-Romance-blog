export let wsMyTable = {
    showSection(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <h3>${val.title}</h3>
            <p>${val.paragraph}</p>
            `
        });
        return plantilla;
    },
    showTable(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <table class="table">
                <thead>
                    <tr>
                    ${val.thead.map((val, id) => `<th>${val.name}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${val.tbody.map((val, id) => `<tr><td>${val.name}</td><td>${val.year}</td><td>${val.reason}</td></tr>`).join("")}
                </tbody>
            </table>
            `
        });
        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyTable[e.data.module](e.data.data));
})