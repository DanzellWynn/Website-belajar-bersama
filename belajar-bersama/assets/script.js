document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    window.setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.pointerEvents = 'none';
    }, 1000);
  
    const toggle = document.getElementById('darkToggle');
    toggle.onclick = () => {
      document.body.classList.toggle('dark');
    };
  });
  