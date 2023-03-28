export default {
    dataMyHeader() {
        localStorage.setItem("myHeader", JSON.stringify({
            title: "My Chemical Romance",
            info: [
                {
                    name: "Miembros",
                    href: "#miembros",
                },
                {
                    name: "Historia",
                    href: "#article",
                },
                {
                    name: "Estilo Musical",
                    href: "#article",
                },
                {
                    name: "Crítica",
                    href: "#OD",
                },
                {
                    name: "Albums",
                    href: "#lista",
                },
                {
                    name: "Premios",
                    href: "#table",
                }
            ],
        }))
    },
    dataMyBanner() {
        localStorage.setItem("myBanner", JSON.stringify({
            image: "../img/banner3.jpeg"
        }))
    },
    dataMyCarousel() {
        localStorage.setItem("myCarousel", JSON.stringify({
            title: "Miembros",
        }))
    },
    dataMyAside() {
        localStorage.setItem("myAside", JSON.stringify({
            cards: [
                {
                    title: "About",
                    paragraph: "My Chemical Romance es una banda estadounidense de rock, formada en el año 2001 en el estado de Nueva Jersey, e integrada en la mayor parte de su historia por el vocalista Gerard Way, el bajista Mikey Way y los guitarristas Ray Toro y Frank Iero."
                }
            ],
            list: [
                {
                    title: "Giras",
                    link: [
                        {
                            name: "Primera gira propia (2005)",
                            href: "https://es.wikipedia.org/wiki/Primera_gira_encabezada_por_My_Chemical_Romance",
                        },
                        {
                            name: "The Black Parade World Tour (2007-2008)",
                            href: "https://es.wikipedia.org/wiki/The_Black_Parade_World_Tour",
                        },
                        {
                            name: "Projekt Revolution (2007; junto a Linkin Park, etc.)",
                            href: "https://es.wikipedia.org/wiki/Projekt_Revolution",
                        },
                        {
                            name: "The World Contamination Tour (2010-2012)",
                            href: "https://es.wikipedia.org/wiki/The_World_Contamination_Tour",
                        },
                        {
                            name: "Honda Civic Tour (2011; junto a Blink-182)",
                            href: "https://es.wikipedia.org/wiki/Honda_Civic_Tour_2011",
                        },
                        {
                            name: "Swarm Tour (2019-presente)",
                            href: "https://es.wikipedia.org/w/index.php?title=Swarm_Tour&action=edit&redlink=1",
                        }
                    ],
                }
            ],
        }))
    },
    dataMyArticle1() {
        localStorage.setItem("myArticle1", JSON.stringify({
            section: [
                {
                    title: "Historia",
                    paragraph: "En 2001, Gerard Way trabajaba como dibujante de cómics, y fue testigo de los atentados del 11 de septiembre, tragedia que lo animó a intentar hacer algo significativo con su vida. Way le planteó a su amigo de secundaria Matt Pelissier la idea de formar un grupo, por lo que comenzaron a componer canciones juntos; la primera fue «Skylines and turnstiles», tema que escribió Way inspirado en los atentados del 11-S. Dos semanas después de los atentados la banda tuvo su primer ensayo, simplemente con Pelissier en la batería y Way cantando y tocando la guitarra.​ Way conoció a través de un amigo en común al guitarrista Ray Toro, y junto con Pelissier le invitaron a unirse al grupo. También se unió a la banda el hermano pequeño de Gerard, Mikey, que dejó los estudios para comenzar a tocar con ellos;​ él fue quien sugirió el nombre del grupo, que deriva del título Ecstasy: three tales of chemical romance, libro del escritor escocés Irvine Welsh. En diciembre de 2001 grabaron sus primeros tres demos, que incluían temas como «Bring more knives», que más tarde sería llamado «Our Lady of Sorrows»."
                },
                {
                    title: "Estilo Musical",
                    paragraph: "El grupo ha sido descrito como un híbrido entre rock gótico, glam, heavy metal y punk.​ Su música también ha sido catalogada como emo, pop punk, post-hardcore o punk revival. Pero el grupo se ha descrito a sí mismo solo como «una banda de rock», de «pop peligroso y violento» (en su página oficial) o de «rock con toques de punk». Cada álbum de la banda ha presentado diferentes tipos de canciones con respecto a su antecesor; la banda ha declarado que desde sus inicios se propusieron no tocar siempre un mismo estilo de música."
                },
            ]
        }))
    },
    dataMyArticle2() {
        localStorage.setItem("myArticle2", JSON.stringify({
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
            ]
        }))
    },
    dataMyList() {
        localStorage.setItem("myList", JSON.stringify({
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
            ]
        }))
    },
    dataMyTable() {
        localStorage.setItem("myTable", JSON.stringify({
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
            ]
        }))
    },
    dataMyFooter() {
        localStorage.setItem("myFooter", JSON.stringify({
            footer: {
                tool: "Bootstrap",
                linkTool: "https://getbootstrap.com/",
                autor1: "@DatBrian",
                linkAutor1: "https://github.com/DatBrian",
                autor2: "@rooh_ayko3.0",
                linkAutor2: "https://www.instagram.com/rooh_ayko3.0/"
            }
        }))
    }
}