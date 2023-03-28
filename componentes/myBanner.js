export default {
    image: "../img/banner3.jpeg",

    showImg() {
        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

}
