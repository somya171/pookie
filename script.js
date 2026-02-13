function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}
function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const flap = document.querySelector('.flap');

  flap.style.transform = 'rotateX(180deg)';
  flap.style.pointerEvents = 'none';   // 🔑 allow clicks through

  document.querySelector('.letter-paper').style.bottom = '0';
  document.querySelector('.velvet-bow').style.opacity = '0';

  envelope.classList.add('opened');
}

let spotifyLoaded = false;

function playSpotify() {
  if (spotifyLoaded) return;

  const container = document.getElementById('spotify-container');
  const cassette = document.querySelector('.cassette');

  cassette.classList.add('playing');

  container.innerHTML = `
    <iframe
      style="border-radius:12px; margin-top:20px"
      src="https://open.spotify.com/embed/track/33W4mZI2Kd4sye4K65Pf0r?autoplay=1"
      width="300"
      height="80"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;

  spotifyLoaded = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("seeMoreBtn");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();   // 🔑 prevents envelope layers from eating the click
      showSection("music");  // or "letter" if you prefer
    });
  }
});
