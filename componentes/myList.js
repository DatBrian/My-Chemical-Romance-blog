export default {
    section: {
        title: "Premios",
        paragraph: "Durante su carrera, la banda My Chemical Romance ha sido galardonada con los siguientes premios:",
    },
    lista: [
        {
            nombre: "MTV Video Music Awards Latinoamérica 2005",
        },
        {
            nombre: "mtvU Woodie Awards 2005",
        },
        {
            nombre: "MTV Video Music Awards Latinoamérica 2006",
        },
        {
            nombre: "Kerrang! Awards 2006",
        },
        {
            nombre: "NME Awards 2007",
        },
        {
            nombre: "MTV Video Music Awards Japan 2007: mejor video rock, por Welcome to the Black Parade",
        },
        {
            nombre: "Myx Music Awards 2007: mejor video internacional, por Welcome to the Black Parade",
        },
        {
            nombre: "Kerrang! Awards 2007: mejor banda internacional",
        },
        {
            nombre: "NME Awards 2011: mejor banda internacional",
        },
        {
            nombre: "NME Awards 2011: mejor video, por Na na na (na na na na na na na na na)",
        },
        {
            nombre: "Kerrang! Awards 2011: mejor video, por Na na na (na na na na na na na na na)",
        },
        {
            nombre: "Kerrang! Awards 2012: mejor banda internacional",
        },
        {
            nombre: "MTV Video of the Century (2017): Welcome to the Black Parade como mejor video del siglo",
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
            <li>${val.nombre}</li>
            </ul>
            `)
        })
    }

}