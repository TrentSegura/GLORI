const cell = document.querySelector(".carousel-cell");
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

    if (item.quote) {
      let container = document.createElement("div");
      container.classList.add("carousel-container");
      container.classList.add("snippit");

      let para = document.createElement("p");
      para.classList.add("carousel-quote");
      para.innerHTML = `"${item.quote}"`;

      let attribute = document.createElement("div");

      let h2 = document.createElement("h2");
      h2.innerHTML = `${item.name}, `;

      let h3 = document.createElement("h3");
      h3.innerHTML = item.role;

      let flexbox = document.createElement("div");
      flexbox.classList.add("flex");

      let link = document.createElement("a");
      link.href = item.link;
      link.innerHTML = "Read More...";

      slideDiv.appendChild(container);
      container.appendChild(para);
      container.appendChild(flexbox);
      flexbox.appendChild(attribute);
      flexbox.appendChild(link);
      attribute.appendChild(h2);
      attribute.appendChild(h3);
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
