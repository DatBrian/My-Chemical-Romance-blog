export default {
    nav: [
        {
        title: "About",
        paragraph: "My chemical romance is  a american rock band that gained popularity in the mind-2000s for their emo and unk rock sound, theatrical performances, and dark lyrics that resonate with a generations."
        },
        {
        title: "Albums",
        link: [
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
            }
        ],
        }
    ],
    showAside() {
        const data = this.nav.map((val, id) => {
            return (
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        document.querySelector('#nav').insertAdjacentHTML("beforeend", data.join(""))

    },
    cards(p1) {
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${p1.title}</h4>
            <p class="mb-0">${p1.paragraph}</p>
        </div>
        `
    },
    list(p1) {
        return `
        <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
              ${p1.link.map((val,id)=>`<li><a href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `
    }
}