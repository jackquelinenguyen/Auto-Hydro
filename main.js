const current = document.querySelector("html").innerText;

let water = setInterval(function forceWater() {
  const text = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, li, td, caption, span, button, link, a"
  );

  for (let i = 0; i < text.length; i++) {
    text[i].innerText = "drink water";
  }

  const images = document.querySelectorAll("img");

  for (let i = 0; i < images.length; i++) {
    let file = "images/water.png";
    let url = chrome.extension.getURL(file);
    images[i].src = url;
  }

  const svg = document.querySelectorAll("svg");
  for (let i = 0; i < svg.length; i++) {
    const parent = svg[i].parentElement;
    parent.removeChild(svg[i]);

    const image = document.createElement("img");
    let file = "images/water.png";
    let url = chrome.extension.getURL(file);
    image.setAttribute("src", url);
    image.style.width = "3rem";
    image.style.height = "3rem";

    parent.appendChild(image);
  }

  //   const divs = document.querySelectorAll("div");

  //   for (let i = 0; i < divs.length; i++) {
  //     if (divs[i].innerText) {
  //       divs[i].innerText = "drink water";
  //     }
  //   }
}, 5000);

// let drank = setTimeout(());

water();
