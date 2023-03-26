export default {
    footer: {
        tool: "Bootstrap",
        linkTool: "https://getbootstrap.com/",
        autor: "@DatBrian",
        linkAutor: "https://github.com/DatBrian"
    },
    showFooter() {
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
                <p>Blog template built for <a href=${this.footer.linkTool}>${this.footer.tool}</a> by <a
                    href=${this.footer.linkAutor}>${this.footer.autor}</a>.</p>
                <p>
                  <a href="#">Back to top</a>
                </p>
            `)
    }
}