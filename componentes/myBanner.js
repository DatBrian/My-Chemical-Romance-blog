export default {
    image: "../img/87f9384c0ad241409bdd1f904ccae63e.jpg",
    tittle: "My Chemical Romance",
    description: "My chemical romance is  a american rock band that gained popularity in the mind-2000s for their emo and unk rock sound, theatrical performances, and dark lyrics that resonate with a generations",
    textLink:"Show More",

    showImg() {
        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

    showBannerInfo() {
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `<h1 class = "display-4 fst-italic">${this.tittle}</h1>
        <p class="lead mb-0 ">${this.description}< <a href="#" class="text-white fw-bold">${this.textLink}</a></p>`);
    },
}
