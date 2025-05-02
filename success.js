// The real coords live here, in plain text
const coords = ['N 40° 44.739', 'W 73° 59.841'];

document.addEventListener('DOMContentLoaded', () => {
  const coordsElement = document.getElementById('coords');
  
  // Typewriter effect for coordinates
  let i = 0;
  const fullText = coords.join(' ');
  const typing = setInterval(() => {
    if (i < fullText.length) {
      coordsElement.textContent += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 100);
});