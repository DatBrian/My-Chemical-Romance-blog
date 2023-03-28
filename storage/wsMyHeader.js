export let wsMyHeader = {
    listTitle(p1) {
        return `<a class="blog-header-logo text-dark">${p1}</a>`
    },
    listInfo(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})