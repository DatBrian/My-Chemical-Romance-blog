export default {
    section: [
        {
            title: "Historia",
            paragrahp: "En 2001, Gerard Way trabajaba como dibujante de cómics, y fue testigo de los atentados del 11 de septiembre, tragedia que lo animó a intentar hacer algo significativo con su vida.26​ Way le planteó a su amigo de secundaria Matt Pelissier la idea de formar un grupo, por lo que comenzaron a componer canciones juntos; la primera fue «Skylines and turnstiles», tema que escribió Way inspirado en los atentados del 11-S. Dos semanas después de los atentados la banda tuvo su primer ensayo, simplemente con Pelissier en la batería y Way cantando y tocando la guitarra.​ Way conoció a través de un amigo en común al guitarrista Ray Toro, y junto con Pelissier le invitaron a unirse al grupo. También se unió a la banda el hermano pequeño de Gerard, Mikey, que dejó los estudios para comenzar a tocar con ellos;​ él fue quien sugirió el nombre del grupo, que deriva del título Ecstasy: three tales of chemical romance, libro del escritor escocés Irvine Welsh. En diciembre de 2001 grabaron sus primeros tres demos, que incluían temas como «Bring more knives», que más tarde sería llamado «Our Lady of Sorrows»."
        },
        {
            title: "Estilo Musical",
            paragrahp: "El grupo ha sido descrito como un híbrido entre rock gótico, glam, heavy metal y punk.​ Su música también ha sido catalogada como emo, pop punk, post-hardcore o punk revival. Pero el grupo se ha descrito a sí mismo solo como «una banda de rock», de «pop peligroso y violento» (en su página oficial) o de «rock con toques de punk». Cada álbum de la banda ha presentado diferentes tipos de canciones con respecto a su antecesor; la banda ha declarado que desde sus inicios se propusieron no tocar siempre un mismo estilo de música."
        },
    ],
    showSection1() {
        this.section.forEach((val, id) => {
            document.querySelector("#article").insertAdjacentHTML("beforeend", `
            <h2 class="blog-post-title">${val.title}</h2>
            <p>${val.paragrahp}</p>
            <br>
            `)
        })
    }
}