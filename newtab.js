const searchBox = document.getElementById('cnm-search-box');

searchBox.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const searchQuery = searchBox.value;
    window.location.href = `https://www.bing.com/search?q=${searchQuery}`;
  }
});