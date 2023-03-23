export default {
    image: "../img/bc1b019fa1a5c61bba5e59bb8df3eee5.jpg",
    tittle: "My Chemical Romance",
    textLink:"Show More",

    showImg() {
        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

}
