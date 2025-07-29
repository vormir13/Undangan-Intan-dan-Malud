// script.js
const audio = document.getElementById('bg-music');
audio.volume = 0.3;
document.addEventListener('click', () => audio.play(), { once: true });

function toggleMusic() {
    if (audio.paused) audio.play(); else audio.pause();
}

function updateCountdown() {
    const eventDate = new Date('November 12, 2023 08:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) return;
    document.getElementById('days').textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

function handleRSVP(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const hadir = e.target.kehadiran.value;
    document.getElementById('rsvp-response').innerHTML = `<p>Terima kasih, ${name}. Konfirmasi Anda: ${hadir}</p>`;
    e.target.reset();
}
