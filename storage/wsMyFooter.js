export let wsMyFooter = {
    showFooter(p1) {
        return `
                 <p>Blog built with <a href=${p1.linkTool} class="b">${p1.tool}</a> by <a
                     href=${p1.linkAutor1} target="_blank" class="a1">${p1.autor1}</a> and <a
                     href=${p1.linkAutor2} target="_blank" class="a2">${p1.autor2}</a></p>
                 <p>
                   <a href="#">Back to top</a>
                 </p>
             `
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyFooter[e.data.module](e.data.data));
})