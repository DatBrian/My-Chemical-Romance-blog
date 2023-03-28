import config from "../storage/config.js"
export default {

    show() {

        config.dataMyArticle2();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticle2")));

        const ws = new Worker("storage/wsMyArticle2.js", { type: "module" });

        ws.postMessage({ module: "showArticle", data: this.section2 });

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#article").append(...doc.body.children);
            ws.terminate();
        })
    }
}