import config from "../storage/config.js"
export default {

    showImg() {

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));

        document.querySelector("#bannerImg").style.backgroundImage = `url(${this.image})     `
    },

}
