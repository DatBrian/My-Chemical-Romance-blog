export default {
    image: "../img/bc1b019fa1a5c61bba5e59bb8df3eee5.jpg",
    tittle: "My Chemical Romance",
    description: "My chemical romance is  a american rock band that gained popularity in the mind-2000s for their emo and unk rock sound, theatrical performances, and dark lyrics that resonate with a generations.",
    textLink:"Show More",

    showImg() {
        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

    showBannerInfo() {
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `<h1 class = "display-4 fst-italic">${this.tittle}</h1>
        <p class="lead mb-0 ">${this.description} <br></a><a href="#" class="text-white fw-bold">${this.textLink}</a></p>`);
    },
}
