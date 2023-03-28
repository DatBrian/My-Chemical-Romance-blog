import config from "../storage/config.js";
export default {
    show() {

        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));

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