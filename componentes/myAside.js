export default {
    nav: [
        {
            title: "About",
            paragraph: "My Chemical Romance es una banda estadounidense My Chemical Romance es una banda estadounidense de rock, formada en el año 2001 en el estado de Nueva Jersey, e integrada en la mayor parte de su historia por el vocalista Gerard Way, el bajista Mikey Way y los guitarristas Ray Toro y Frank Iero."
        },
        {
            title: "Giras",
            link: [
                {
                    name: "Primera gira propia (2005)",
                    href: "https://es.wikipedia.org/wiki/Primera_gira_encabezada_por_My_Chemical_Romance",
                },
                {
                    name: "The Black Parade World Tour (2007-2008)",
                    href: "https://es.wikipedia.org/wiki/The_Black_Parade_World_Tour",
                },
                {
                    name: "Projekt Revolution (2007; junto a Linkin Park, etc.)",
                    href: "https://es.wikipedia.org/wiki/Projekt_Revolution",
                },
                {
                    name: "The World Contamination Tour (2010-2012)",
                    href: "https://es.wikipedia.org/wiki/The_World_Contamination_Tour",
                },
                {
                    name: "Honda Civic Tour (2011; junto a Blink-182)",
                    href: "https://es.wikipedia.org/wiki/Honda_Civic_Tour_2011",
                },
                {
                    name: "Swarm Tour (2019-presente)",
                    href: "https://es.wikipedia.org/w/index.php?title=Swarm_Tour&action=edit&redlink=1",
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
              ${p1.link.map((val, id) => `<li><a href="${val.href}" target="_blank">${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `
    }
}   