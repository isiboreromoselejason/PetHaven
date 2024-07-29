document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchQuery').value;

    if (!query) {
      alert('Please enter a search query.');
      return;
    }

    window.location.href = `/map?query=${query}`;
  });
