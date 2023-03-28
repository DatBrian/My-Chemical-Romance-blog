export let wsMyAside = {
    showCards(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">${val.title}</h4>
                <p class="mb-0">${val.paragraph}</p>
            </div>
            `
        });
        return plantilla;
    },
    showList(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <div class="p-4">
                <h4 class="fst-italic">${val.title}</h4>
                <ol class="list-unstyled mb-0">
                  ${val.link.map((val, id) => `<li><a href="${val.href}" target="_blank">${val.name}</a></li>`).join("")}
                </ol>
            </div>
            `
        });
        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyAside[e.data.module](e.data.data));
})