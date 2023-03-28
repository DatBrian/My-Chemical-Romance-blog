import config from "../storage/config.js";
export default {
    show() {

        config.dataMyList();
        Object.assign(this, JSON.parse(localStorage.getItem("myList")));

        const ws = new Worker("storage/wsMyList.js", { type: "module" });

        let id = [];
        let count = 0;

        ws.postMessage({ module: "showSection", data: this.section });
        ws.postMessage({ module: "showList", data: this.lista });
        id = ["#lista", "#lista"]

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id, length - 1 === count) ? ws.terminate() : count++;
        })

    }

}
// document.querySelector("#lista").insertAdjacentHTML("beforeend", `
//         <h2 class="blog-post-title">${this.section.title}</h2>
//         <p>${this.section.paragraph}</p>
//         `)
//     },
// showList() {
//     this.lista.forEach((val, id) => {
//         document.querySelector("#lista").insertAdjacentHTML("beforeend", `
//             <ul>
//             <li><a href="${val.href}" target="_blank">${val.nombre}</a></li>
//             </ul>
//             `)
//     })