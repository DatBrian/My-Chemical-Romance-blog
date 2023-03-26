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
    listarTitle() {
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark">${this.title}</a>`);
    },
    listarInfo() {
        let plantilla = "";
        this.info.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}"  >${val.name}</a>`
        });
        document.querySelector("#info").insertAdjacentHTML("beforeend", plantilla);
    }
}