export default {
    section: [
        {
            title: "Premios",
            paragraph: ""
        }
    ],
    table: [
        {
            thead: [
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                }
            ],
            tbody: [
                {
                    name: "",
                    year: "",
                    reason: ""
                }
            ],
        }
    ],/////////////////HACEEEEEEEEER FOOOOOOOOOOOOOOOR EAVCHHHHHHHHHHHHHHHHHHHHH
    showSection() {
        document.querySelector("#table").insertAdjacentHTML("beforeend", `
        <h3>${this.section.title}</h3>
        <p>${this.section.paragraph}</p>
        `)
    },
    showTable() {
        let plantilla = "";
        this.table.forEach((val, id) => {
            plantilla += `
            <table>
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