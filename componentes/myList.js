export default {
    section: {
        title: "Albums",
        paragraph: "Álbumes de estudio principales:",
    },
    lista: [
        {
            nombre: "I brought you my bullets, you brought me your love",
            href: "https://es.wikipedia.org/wiki/I_brought_you_my_bullets,_you_brought_me_your_love"
        },
        {
            nombre: "Three cheers for sweet revenge",
            href: "https://es.wikipedia.org/wiki/Three_cheers_for_sweet_revenge"
        },
        {
            nombre: "The Black Parade",
            href: "https://es.wikipedia.org/wiki/The_Black_Parade"
        },
        {
            nombre: "Danger days: the true lives of the Fabulous Killjoys",
            href: "https://es.wikipedia.org/wiki/Danger_days:_the_true_lives_of_the_Fabulous_Killjoys   "
        }
    ],
    showSection() {
        document.querySelector("#lista").insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${this.section.title}</h2>
        <p>${this.section.paragraph}</p>
        `)
    },
    showList() {
        this.lista.forEach((val, id) => {
            document.querySelector("#lista").insertAdjacentHTML("beforeend", `
            <ul>
            <li><a href="${val.href}" target="_blank">${val.nombre}</a></li>
            </ul>
            `)
        })
    }

}