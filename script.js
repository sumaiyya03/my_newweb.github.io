const container = document.getElementById("pinContainer");

const images = [
  "https://source.unsplash.com/random/300x400?aesthetic",
  "https://source.unsplash.com/random/300x500?minimal",
  "https://source.unsplash.com/random/300x450?fashion"
];

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  container.appendChild(img);
});
