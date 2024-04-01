document.addEventListener("DOMContentLoaded", function() {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  const glow = document.getElementById('mouse-glow');

  window.addEventListener("mousemove", function(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      window.requestAnimationFrame(() => {
          if (cursorDot) {
              cursorDot.style.left = `${posX}px`;
              cursorDot.style.top = `${posY}px`;
          }
          if (cursorOutline) {
              cursorOutline.style.left = `${posX}px`;
              cursorOutline.style.top = `${posY}px`;
          }

          if (glow) {
              glow.style.left = `${posX}px`;
              glow.style.top = `${posY}px`;
              glow.style.display = 'block'; 
          }
      });
  });
});

