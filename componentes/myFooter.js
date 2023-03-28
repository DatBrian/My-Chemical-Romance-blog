export default {
    footer: {
        tool: "Bootstrap",
        linkTool: "https://getbootstrap.com/",
        autor1: "@DatBrian",
        linkAutor1: "https://github.com/DatBrian",
        autor2: "@rooh_ayko3.0",
        linkAutor2: "https://www.instagram.com/rooh_ayko3.0/"
    },
    show() {
        const ws = new Worker("storage/wsmyFooter.js", { type: "module" });

        ws.postMessage({ module: "showFooter", data: this.footer });

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#footer").append(...doc.body.children);
            ws.terminate();
        })
    }
}

// document.querySelector("#footer").insertAdjacentHTML("beforeend", `
//                 <p>Blog template built for <a href=${this.footer.linkTool}>${this.footer.tool}</a> by <a
//                     href=${this.footer.linkAutor}>${this.footer.autor}</a>.</p>
//                 <p>
//                   <a href="#">Back to top</a>
//                 </p>
//             `)