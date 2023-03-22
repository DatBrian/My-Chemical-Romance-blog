export default {
    title:"Maneskin",
    albums: [
        {
            name: "2002",
            href: "",
        },
        {
            name: "Three cheers for sweet revenge",
            href: "",
        },
        {
            name: "The black parade",
            href: "",
        },
        {
            name: "Danger days",
            href: "",
        },
    ],
    listarTitle() {
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark">${this.title}</a>`);
    },
    listarAlbums() {
        let plantilla = "";
        this.albums.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#albums").insertAdjacentHTML("beforeend",plantilla);
    }
}