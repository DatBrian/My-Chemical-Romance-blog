export default {
    image: "../img/banner3.jpeg",
    tittle: "My Chemical Romance",
    textLink: "Show More",

    showImg() {
        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

}
