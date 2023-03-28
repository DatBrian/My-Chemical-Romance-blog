export default {
    title: "My Chemical Romance",
    info: [
        {
            name: "Miembros",
            href: "#miembros",
        },
        {
            name: "Historia",
            href: "#article",
        },
        {
            name: "Estilo Musical",
            href: "#article",
        },
        {
            name: "Crítica",
            href: "#OD",
        },
        {
            name: "Albums",
            href: "#lista",
        },
        {
            name: "Premios",
            href: "#table",
        }
    ],
    show() {
        const ws = new Worker("storage/wsMyHeader.js", { type: "module" });

        let id = [];
        let count = 0;

        ws.postMessage({ module: "listTitle", data: this.title });
        ws.postMessage({ module: "listInfo", data: this.info });
        id = ["#title", "#info"];

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id, length - 1 === count) ? ws.terminate() : count++;
        })
    }

}

// listarTitle() {
//     document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark">${this.title}</a>`);
// },
// listarInfo() {
//     let plantilla = "";
//     this.info.forEach((val, id) => {
//         plantilla += `<a class="p-2 link-secondary" href="${val.href}"  >${val.name}</a>`
//     });
//     document.querySelector("#info").insertAdjacentHTML("beforeend", plantilla);
// }