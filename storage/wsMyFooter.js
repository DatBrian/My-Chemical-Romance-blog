export let wsMyFooter = {
    showFooter(p1) {
        return `
                 <p>Blog built with <a href=${p1.linkTool} class="b">${p1.tool}</a> by <a
                     href=${p1.linkAutor1} target="_blank" class="a1">${p1.autor1}</a> and <a
                     href=${p1.linkAutor2} target="_blank" class="a2">${p1.autor2}</a></p>
                     <a href="#">
                 <button id="end">
                    <div class="text">
                        <span>Back</span>
                        <span>to</span>
                        <span>top</span>
                    </div>
                    <div class="clone">
                        <span>Back</span>
                        <span>to</span>
                        <span>top</span>
                        </div>
                        <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                </button>
                    </a>
             `
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyFooter[e.data.module](e.data.data));
})