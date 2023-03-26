export default {
    section: [
        {
            title: "Premios",
            paragraph: "Durante su carrera, la banda My Chemical Romance ha sido galardonada con los siguientes premios:"
        }
    ],
    table: [
        {
            thead: [
                {
                    name: "Name"
                },
                {
                    name: "Year"
                },
                {
                    name: "Reason"
                }
            ],
            tbody: [
                {
                    name: "MTV Video Music Awards Latinoamérica",
                    year: "2005",
                    reason: "Mejor artista nuevo internacional"
                },
                {
                    name: "mtvU Woodie Awards",
                    year: "2005",
                    reason: "Woodie del año"
                },
                {
                    name: "MTV Video Music Awards Latinoamérica",
                    year: "2006",
                    reason: "Mejor artista rock"
                },
                {
                    name: "Kerrang! Awards",
                    year: "2006",
                    reason: "Mejor banda internacional"
                },
                {
                    name: "NME Awards",
                    year: "2007",
                    reason: "Mejor banda internacional"
                },
                {
                    name: "MTV Video Music Awards Japan",
                    year: "2007",
                    reason: "Mejor video rock, por Welcome to the Black Parade"
                },
                {
                    name: "Myx Music Awards",
                    year: "2007",
                    reason: "Mejor video internacional, por Welcome to the Black Parade"
                },
                {
                    name: "Kerrang! Awards",
                    year: "2007",
                    reason: "Mejor banda internacional"
                },
                {
                    name: "NME Awards",
                    year: "2011",
                    reason: "Mejor banda internacional"
                },
                {
                    name: "NME Awards",
                    year: "2011",
                    reason: "Mejor video, por Na na na (na na na na na na na na na)"
                },
                {
                    name: "Kerrang! Awards",
                    year: "2011",
                    reason: "mejor video, por Na na na (na na na na na na na na na)"
                },
                {
                    name: "Kerrang! Awards",
                    year: "2012",
                    reason: "mejor banda internacional"
                },
                {
                    name: "MTV Video of the Century",
                    year: "2017",
                    reason: "Welcome to the Black Parade como mejor video del siglo"
                }
            ],
        }
    ],
    showSection() {
        this.section.forEach((val, id) => {
            document.querySelector("#table").insertAdjacentHTML("beforeend", `
            <h3>${val.title}</h3>
            <p>${val.paragraph}</p>
            `)
        })
    },
    showTable() {
        let plantilla = "";
        this.table.forEach((val, id) => {
            plantilla += `
    <table class="table">
        <thead>
            <tr>
            ${val.thead.map((val, id) => `<th>${val.name}</th>`).join("")}
            </tr>
        </thead>
        <tbody>
            ${val.tbody.map((val, id) => `<tr><td>${val.name}</td><td>${val.year}</td><td>${val.reason}</td></tr>`).join("")}
        </tbody>
    </table>
    `
        })
        document.querySelector("#table").insertAdjacentHTML("beforeend", plantilla)
    }
}