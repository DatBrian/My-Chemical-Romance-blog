export default {
    title:"My Chemical Romance",
    info: [
        {
            name: "Miembros",
            href: "",
        },
        {
            name: "Historia",
            href: "",
        },
        {
            name: "Estilo Musical",
            href: "",
        },
        {
            name: "Crítica",
            href: "",
        },
        {
            name: "Giras",
            href: "",
        },
                {
            name: "Premios",
            href: "",
        }
    ],
    listarTitle() {
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark">${this.title}</a>`);
    },
    listarInfo() {
        let plantilla = "";
        this.info.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#info").insertAdjacentHTML("beforeend",plantilla);
    }
}