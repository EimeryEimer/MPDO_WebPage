// script.js
document.addEventListener('DOMContentLoaded', function() {
  // update footer year dynamically
  const yearSpan = document.querySelector('footer');
  if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', year);
  }

  // add small interactive effect on data viz placeholder (click)
  const viz = document.getElementById('dataViz');
  if (viz) {
    viz.addEventListener('click', function() {
      this.innerHTML = '<span class="mono">📊 [ data dashboard preview · click to expand ]</span>';
      this.style.transition = 'background 0.2s';
      this.style.background = '#e6f2ee';
      setTimeout(() => { this.style.background = ''; }, 300);
    });
  }

  // contact map placeholder interaction
  const mapPlaceholder = document.getElementById('mapPlaceholder') || document.getElementById('contactMap');
  if (mapPlaceholder) {
    mapPlaceholder.addEventListener('click', function() {
      this.innerHTML = '<span class="mono">🗺️ [ map will load here · showing Municipal Hall location ]</span>';
      this.style.background = '#e6f2ee';
      setTimeout(() => { this.style.background = ''; }, 400);
    });
  }

  // console info (optional)
  console.log('MPDC Portal · White/Gray/Green theme · Files: home, about, contact');
});