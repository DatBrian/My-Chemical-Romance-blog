export default {
    section2: [
        {
            title: "Opiniones divididas",
            subtitle1: "Seguidores",
            paragraph1: `My Chemical Romance fue alabada inicialmente como una banda underground (diferente a la mayoría). Estaba entre las primeras bandas que solo ofrecían su música a través de PureVolume y MySpace, redes sociales en donde MCR logró obtener sus primeros cien mil seguidores.
                        Sin embargo, la banda actualmente tiene muchísimos seguidores -mayormente jóvenes en todo el mundo, ayudada parcialmente por el sonido más popular y la gran aceptación y difusión de su segundo álbum, Three cheers for sweet revenge, y más aún tras la publicación de The Black Parade.
                        En el festival de música Zero Fest, realizado en Ciudad de México en abril de 2008, Gerard Way se refirió a la discriminación a los jóvenes emo: «Hemos oído recientemente que ha habido violencia en su país en relación con chicos que quieren usar camisetas negras, hemos oído de gente abusiva y cosas así. No queremos ver ninguna maldita violencia», esto debido a la oleada de ataques a los jóvenes emo en el país, los cuales son comúnmente señalados como seguidores del grupo.`,
            subtitle2: "Controversias",
            paragraph2: `My Chemical Romance tocó en 2006 en los festivales de Reading y de Leeds, en Inglaterra. La banda siguió a Slayer y no fueron muy bien recibidos por los metaleros. Algunos de ellos tiraron botellas, tocino, mandarinas, pelotas de golf y botellas con orina mientras la banda tocaba, con desprecio y disgusto. Entonces, Gerard presentó la canción «Thank you for the venom» de la siguiente forma: «Esta canción se llama “Gracias por todas las botellas, gracias por toda la orina, gracias por todas las pelotas de golf, gracias por las manzanas, gracias por toda la mierda pegajosa”». En el año 2007, en el Download Festival, la banda sufrió el abucheo y lanzamiento de botellas y basura de parte del público, al igual que en la anterior ocasión; igual suerte pasaron la banda Panic! at the Disco y el rapero 50 Cent.`
        }
    ],
    showSection2() {
        this.section2.forEach((val, id) => {
            document.querySelector("#article").insertAdjacentHTML("beforeend", `
            <h2 class="blog-post-title mt-2" style="font-weight:500" id="OD">${val.title}</h2>
            <br><br>
            <h3 style="font-size:1.5rem">${val.subtitle1}<h3>
            <p>${val.paragraph1}</p>
            <h3 style="font-size:1.5rem">${val.subtitle2}<h3>
            <p>${val.paragraph2}</p>
            `)
        })
    }
}