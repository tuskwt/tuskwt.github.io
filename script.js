   function searchMenu() {
      const input = document.getElementById('menuSearch').value.toLowerCase();
      const links = document.querySelectorAll('#menuList a');
      links.forEach(link => {
        if(link.textContent.toLowerCase().includes(input)) {
          link.style.display = 'block';
        } else {
          link.style.display = 'none';
        }
      });
    }

    // Optional: real-time search saat mengetik
    document.getElementById('menuSearch').addEventListener('input', searchMenu);