export let wsMyList = {
    showSection(p1) {
        return `
            <h2 class="blog-post-title">${p1.title}</h2><p>${p1.paragraph}</p>`
    },
    showList(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <ul>
            <li><a href="${val.href}" target="_blank">${val.nombre}</a></li>
            </ul>
            `
        });
        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyList[e.data.module](e.data.data));
})