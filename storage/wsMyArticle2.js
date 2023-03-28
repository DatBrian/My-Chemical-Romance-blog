export let wsMyArticle2 = {
    showArticle(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `
            <h2 class="blog-post-title mt-2" style="font-weight:500" id="OD">${val.title}</h2>
            <br><br>
            <h3 style="font-size:1.5rem">${val.subtitle1}<h3>
            <p>${val.paragraph1}</p>
            <h3 style="font-size:1.5rem">${val.subtitle2}<h3>
            <p>${val.paragraph2}</p>
            `
        });
        return plantilla;
    }
}
self.addEventListener("message", (e) => {
    postMessage(wsMyArticle2[`${e.data.module}`](e.data.data));
})