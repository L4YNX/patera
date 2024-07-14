// Pobranie kontenerów wrapper
const coldWrapper = document.querySelector('.grid-cold .wrapper');
const hotWrapper = document.querySelector('.grid-hot .wrapper');

// Funkcja obsługująca przewijanie poziome z animacją CSS
function setupHorizontalScroll(wrapper) {
  let isDown = false;
  let startX;
  let scrollLeft;

  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
    wrapper.style.cursor = 'grabbing';
  });

  wrapper.addEventListener('mouseleave', () => {
    isDown = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 3; // Regulacja szybkości przewijania
    wrapper.style.scrollBehavior = 'auto'; // Wyłączenie zachowania przewijania
    wrapper.scrollLeft = scrollLeft - walk;
    wrapper.style.scrollBehavior = 'smooth'; // Włączenie płynnego przewijania
  });
}

// Inicjalizacja przewijania dla obu wrapperów
setupHorizontalScroll(coldWrapper);
setupHorizontalScroll(hotWrapper);

