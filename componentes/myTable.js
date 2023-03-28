import config from "../storage/config.js";
export default {
    show() {

        config.dataMyTable();
        Object.assign(this, JSON.parse(localStorage.getItem("myTable")));

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