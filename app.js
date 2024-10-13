const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imgindex = 0;

const images = [
  {
    src: "https://www.wargamer.com/wp-content/sites/wargamer/2022/10/warhammer-40k-factions-adeptus-custodes-models.jpg",
    alt: "Adeptus",

    scr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFl6eXRhRG9K3ng3VBLWlfS7B7jZQxG94U5A&s",
    alt: "Astra",

    scr: "https://www.wargamer.com/wp-content/sites/wargamer/2022/10/warhammer-40k-factions-imperial-knights-models.jpg",
    alt: "Knight",

    scr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnkvFtOrF_8irKDSTCpf8uL2uR2u-oC3-aQ&s",
    alt: "Marine",

    scr: "https://thelostandthedamned.wordpress.com/wp-content/uploads/2021/01/warhammer-40k-necrons-2.jpg",
    alt: "Necron",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });
  thumbnailContainer.appendChild(img);
}
