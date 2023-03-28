export let wsMyCarousel = {
    listTitle(p1) {
        return `<div id="miembros" class="title"><h2 class="blog-post-title">${p1}</h2></div>`
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyCarousel[`${e.data.module}`](e.data.data));
})