const carousel = document.querySelector(".main-carousel");

const generateSlides = (data) => {
  carousel.innerHTML = "";

  data.forEach((item, index) => {
    let slideDiv = document.createElement("div");
    slideDiv.classList.add("carousel-cell");

    if (item.file) {
      let img = document.createElement("img");
      img.src = "./assets/slides/small/" + item.file;
      img.dataset.original = "./assets/slides/large/" + item.file;

      slideDiv.appendChild(img);
    }

    carousel.appendChild(slideDiv);
  });
};

generateSlides(data);

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  contain: true,
  pageDots: false,
  wrapAround: true,
});

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".carousel-cell img");
const large = document.querySelector(".large-modal-image");
const body = document.querySelector("body");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    large.classList.add("open");
    body.style.overflow = "hidden";

    const originalSrc = preview.getAttribute("data-original");
    large.src = originalSrc;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    large.classList.remove("open");
    large.src = "";
    body.style.overflow = "auto";
  }
});

// Narrative Carousel

const quote_carousel = document.querySelector(".quote-carousel");
const generateNarratives = (narratives) => {
  narratives.forEach((narrative, index) => {
    let narrSlide = document.createElement("div");
    narrSlide.classList.add("quote-carousel-cell");

    let container = document.createElement("div");
    container.classList.add("quote-container");

    let para = document.createElement("p");
    para.classList.add("quote-carousel-para");
    para.innerHTML = `"${narrative.quote}"`;

    let attribute = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.innerHTML = `${narrative.name}, `;

    let h3 = document.createElement("h3");
    h3.innerHTML = narrative.role;

    let flexbox = document.createElement("div");
    flexbox.classList.add("flex");

    let link = document.createElement("a");
    link.href = narrative.link;
    link.innerHTML = "Read More...";

    narrSlide.appendChild(container);
    container.appendChild(para);
    container.appendChild(flexbox);
    flexbox.appendChild(attribute);
    flexbox.appendChild(link);
    attribute.appendChild(h2);
    attribute.appendChild(h3);
    quote_carousel.appendChild(narrSlide);
  });
};

//     narSlide.appendChild(container);
//     container.appendChild(para);
//     container.appendChild(flexbox);
//     flexbox.appendChild(attribute);
//     flexbox.appendChild(link);
//     attribute.appendChild(h2);
//     attribute.appendChild(h3);

generateNarratives(narratives);

var element = document.querySelector(".quote-carousel");
var flkty2 = new Flickity(element, {
  // options
  pageDots: false,
  wrapAround: true,
  autoPlay: true,
});

// element argument can be a selector string
//   for an individual element
var flkty2 = new Flickity(".quote-carousel", {
  // options
});

// const carousel_narrative = document.querySelector(".narrative-carousel");
// const generateNarratives = (nar) => {
//   carousel_narrative.innerHTML = "";

//   console.log(nar);

//   nar.forEach((narrative, index) => {
//     let narSlide = document.createElement("div");
//     narSlide.classList.add("carousel-cell");

//     let container = document.createElement("div");
//     container.classList.add("carousel-container");
//     container.classList.add("snippit");

//     let para = document.createElement("p");
//     para.classList.add("carousel-quote");
//     para.innerHTML = `"${narrative.quote}"`;

//     let attribute = document.createElement("div");

//     let h2 = document.createElement("h2");
//     h2.innerHTML = `${narrative.name}, `;

//     let h3 = document.createElement("h3");
//     h3.innerHTML = narrative.role;

//     let flexbox = document.createElement("div");
//     flexbox.classList.add("flex");

//     let link = document.createElement("a");
//     link.href = narrative.link;
//     link.innerHTML = "Read More...";

//     narSlide.appendChild(container);
//     container.appendChild(para);
//     container.appendChild(flexbox);
//     flexbox.appendChild(attribute);
//     flexbox.appendChild(link);
//     attribute.appendChild(h2);
//     attribute.appendChild(h3);
//   });

//   carousel_narrative.appendChild(narSlide);
// };

// generateNarratives(nar);
