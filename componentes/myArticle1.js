import config from "../storage/config.js"
export default {
    show() {

        config.dataMyArticle1();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticle1")));

        const ws = new Worker("storage/wsMyArticle1.js", { type: "module" });

        ws.postMessage({ module: "showArticle", data: this.section });

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#article").append(...doc.body.children);
            ws.terminate();
        })
    }
}