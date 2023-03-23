export default {
    post:[
        {
        nombre: "",
        paragraph: "",
        img: "",
        btn: {
            name: "",
            href: "",
        }
        },
    ],
    showPost() {
        this.post.forEach((val, id)=> {
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">${val.nombre}</h3><br>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="#" class="stretched-link">${val.btn.name}</a>
                </div>
            <div class="col-auto d-none d-lg-block">
            <div class="imgPost">
                <img src="${val.img}" class="responsiveImg">
            </div>
            </div>
            </div>
            </div>
            `)
        })
    }
}