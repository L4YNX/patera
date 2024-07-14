// Funkcja do obsługi wyszukiwania
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const coldWrapper = document.querySelector('.grid-cold .wrapper');
    const hotWrapper = document.querySelector('.grid-hot .wrapper');
    const searchTerm = searchInput.value.trim().toLowerCase();
  
    // Przejdź przez wszystkie karty i ukryj te, które nie pasują do wyszukiwanego terminu
    function filterCards(wrapper) {
      const cards = wrapper.querySelectorAll('.card');
      cards.forEach(card => {
        const title = card.querySelector('h2').textContent.trim().toLowerCase();
        if (title.includes(searchTerm)) {
          card.style.display = 'block'; // Pokaż kartę
        } else {
          card.style.display = 'none'; // Ukryj kartę
        }
      });
    }
  
    // Filtruj karty w obu wrapperach
    filterCards(coldWrapper);
    filterCards(hotWrapper);
  }
  
  // Dodaj nasłuchiwacz na zmiany w polu wyszukiwania
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
  });
  