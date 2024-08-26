let load_screen = `
<div style="top: ${window.scrollY}px" id="loader-back">
      <div id="loader">
        <img src="./IMG/desktop.webp" alt="" class="center-image" />
        <img src="./IMG/90YV0GB2-M0NA10.jpg" alt="" class="orbiting-image" />
        <img src="./IMG/zen3-r55500mpk.webp" alt="" class="orbiting-image" />
        <img src="./IMG/motherboard.jpeg" alt="" class="orbiting-image" />
      </div>
    </div>
`;

document.write(load_screen);

window.addEventListener("load", function () {
  // Oculte a loading screen
  var loadingScreen = document.getElementById("loader-back");
  loadingScreen.style.display = "none";
});
