export default {
    title: "Miembros",
    post: [
        {
            nombre: "Gerard Way",
            paragraph: "Al momento de los atentados del 11 de septiembre de 2001 a las Torres Gemelas de Nueva York, Way trabajaba en una tienda de cómics cerca de la zona y presenció el desastre. Desde entonces sintió que estaba desperdiciando su vida y decidió hacer algo significativo con ella, formando la banda My Chemical Romance",
            img: "/img/gerardway1.jpg",
            btn: {
                name: "Ver Más",
                href: "https://es.wikipedia.org/wiki/Gerard_Way",
            }
        },
        {
            nombre: "Ray Toro",
            paragraph: "Toro conoció al vocalista Gerard Way a través de Shawn Dillon, exlíder de The Rodneys (banda en la que solía tocar Toro), y acordó trabajar con este y Matt Pelissier en las sesiones de práctica de la banda en el ático de Pelissier.",
            img: "/img/raytoro1.jpg",
            btn: {
                name: "Ver Más",
                href: "https://es.wikipedia.org/wiki/Mikey_Way",
            }
        },
        {
            nombre: "Mikey Way",
            paragraph: "Way se unió como bajista de la banda My Chemical Romance en 2001, junto con su hermano mayor Gerard, el baterista Matt Pelissier y el guitarrista Ray Toro. Sugirió el nombre de la banda tras ver el libro Ecstasy: Three Tales of Chemical Romance",
            img: "/img/mikeyway1.jpg",
            btn: {
                name: "Ver Más",
                href: "https://es.wikipedia.org/wiki/Ray_Toro",
            }
        },
        {
            nombre: "Frank Iero",
            paragraph: "Iero estudiaba en la universidad y tocaba en la banda Pencey Prep; fue entonces cuando su banda tuvo que compartir el cuarto de grabaciones de la disquera Eyeball Records con My Chemical Romance. La banda Pencey Prep se separó y Frank se unió a My Chemical Romance.",
            img: "/img/frankiero1.jpg",
            btn: {
                name: "Ver Más",
                href: "https://es.wikipedia.org/wiki/Frank_Iero",
            }
        }
    ],
    showPost() {
        this.post.forEach((val, id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
            <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">${val.nombre}</h3>
            <p class="card-text mb-auto">${val.paragraph}</p>
            <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <img src="${val.img}" class="responsiveImg"
          </div>
        </div>
      </div>
            `)
        })
    }
}

