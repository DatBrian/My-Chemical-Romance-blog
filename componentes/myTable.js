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
                    name: "Nombre"
                },
                {
                    name: "Año"
                },
                {
                    name: "Motivo"
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
    show() {
        const ws = new Worker("storage/wsMyTable.js", { type: "module" });

        let id = [];
        let count = 0;

        ws.postMessage({ module: "showSection", data: this.section });
        ws.postMessage({ module: "showTable", data: this.table });
        id = ["#table", "#table"];

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id, length - 1 === count) ? ws.terminate() : count++;
        })
    },

}

// this.section.forEach((val, id) => {
//     document.querySelector("#table").insertAdjacentHTML("beforeend", `
//             <h3>${val.title}</h3>
//             <p>${val.paragraph}</p>
//             `)
// })

// showTable() {
//     let plantilla = "";
//     this.table.forEach((val, id) => {
//         plantilla += `
//     <table class="table">
//         <thead>
//             <tr>
//             ${val.thead.map((val, id) => `<th>${val.name}</th>`).join("")}
//             </tr>
//         </thead>
//         <tbody>
//             ${val.tbody.map((val, id) => `<tr><td>${val.name}</td><td>${val.year}</td><td>${val.reason}</td></tr>`).join("")}
//         </tbody>
//     </table>
//     `
//     })
//     document.querySelector("#table").insertAdjacentHTML("beforeend", plantilla)
// }