document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const names = document.querySelectorAll('#nameList li');

  names.forEach(name => {
    const text = name.textContent.toLowerCase();
    if (text.includes(query)) {
      name.style.display = 'block';
    } else {
      name.style.display = 'none';
    }
  });
});
