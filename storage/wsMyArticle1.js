export let wsMyArticle1 = {
    showArticle(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `<h2 class="blog-post-title">${val.title}</h2><p>${val.paragraph}</p><br><br>`
        });
        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyArticle1[`${e.data.module}`](e.data.data));
})