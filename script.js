// Scroll snapping entre secciones
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        { threshold: 0.5 } // se activa cuando el 50% es visible
    );
    observer.observe(section);
});


///
const track = document.querySelector('.marquee-track');

function syncMarquee() {
  const totalWidth = track.scrollWidth;
  const half = totalWidth / 2;
  const pxPerSecond = 120;
  const duration = half / pxPerSecond;
  track.style.animationDuration = duration + 's';

  const styleId = 'dynamic-marquee';
  let st = document.getElementById(styleId);
  if (!st) {
    st = document.createElement('style');
    st.id = styleId;
    document.head.appendChild(st);
  }
  st.textContent = `
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-${half}px); }
    }
  `;
}