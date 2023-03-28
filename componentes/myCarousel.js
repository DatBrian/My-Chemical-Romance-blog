import config from "../storage/config.js"
export default {
  showTitle() {

    config.dataMyCarousel();
    Object.assign(this, JSON.parse(localStorage.getItem("myCarousel")));

    const ws = new Worker("storage/wsMyCarousel.js", { type: "module" });

    ws.postMessage({ module: "listTitle", data: this.title });

    ws.addEventListener("message", (e) => {
      let doc = new DOMParser().parseFromString(e.data, "text/html");
      document.querySelector("#post").insertAdjacentElement("beforebegin", ...doc.body.children);
      ws.terminate();
    })
  },
  showPost() {
    document.querySelector("#aside").insertAdjacentHTML("beforebegin", `
              <div id="carouselExampleCaptions" class="carousel slide">
        <div  iv class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active item1">
            <img id="img1" src="/img/gerardway1.jpg" class="d-block" style="width: 500px; height:500px">
            <div id="texto" class=" carousel-caption texto">
              <h5><a href="https://es.wikipedia.org/wiki/Gerard_Way" target="_blank">Gerard Way</a></h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/raytoro1.jpg" class="d-block" style="width: 500px; height:500px;">
            <div class="carousel-caption d-none d-md-block texto">
              <h5><a href="https://es.wikipedia.org/wiki/Ray_Toro" target="_blank">Ray Toro</a></h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/mikeyway1.jpg" class="d-block" style="width: 500px; height:500px;">
            <div class="carousel-caption d-none d-md-block texto">
              <h5><a href="https://es.wikipedia.org/wiki/Mikey_Way" target="_blank">Mikey Way</a></h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/frankiero1.jpg" class="d-block" style="width: 500px; height: 500px;">
            <div class="carousel-caption d-none d-md-block texto">
              <h5><a href="https://es.wikipedia.org/wiki/Frank_Iero" target="_blank">Frank Iero</a></h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        `)
  }
}
