const menuData = [
  {
    title: "Daftar Hadir & Nilai 2025/2026",
    url: "https://drive.google.com/drive/folders/129ZqPzdRvNs1fhUUuteT9YVeKaxwG65N?usp=drive_link",
    date: "26 November 2025",
    highlight: false
  },
  {
    title: "Nominatif Siswa 2025/2026",
    url: "https://drive.google.com/drive/folders/1UV8eQm_BDwwonZ7AdfZy6X_PfCbA0FiF?usp=sharing",
    date: "3 Desember 2025",
    highlight: true
  },
  {
    title: "Jumlah Siswa 2025/2026",
    url: "https://docs.google.com/spreadsheets/d/1zZZkOCvruRZ0g6kDFDzrcyvE_8qefpqS/edit?usp=sharing&ouid=111283954640949298603&rtpof=true&sd=true",
    date: "26 November 2025",
    highlight: false
  },
  {
    title: "Situs Web SMK Sukawati Sragen",
    url: "https://www.smksukawatisragen.sch.id/",
    date: "",
    highlight: false
  },
  {
    title: "Alat PDF Serbaguna (Gambar ke PDF, PDF ke Gambar, Gabung PDF)",
    url: "https://www.chapteria.com/p/super-pdf-by-chapteria.html",
    date: "",
    highlight: false
  }
];

function renderMenu() {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = ''; // Clear existing content

  menuData.forEach(item => {
    const link = document.createElement('a');
    link.href = item.url;
    link.target = "_blank";
    
    // Create container for title and date
    const contentDiv = document.createElement('div');
    contentDiv.className = 'menu-content';
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'menu-title';
    titleSpan.textContent = item.title;
    contentDiv.appendChild(titleSpan);

    if (item.date) {
      const dateSpan = document.createElement('span');
      dateSpan.className = 'menu-date';
      dateSpan.textContent = `Terakhir diperbarui pada: ${item.date}`;
      contentDiv.appendChild(dateSpan);
    }

    link.appendChild(contentDiv);

    // Add highlight badge if needed
    if (item.highlight) {
      const badge = document.createElement('span');
      badge.className = 'menu-badge';
      badge.textContent = 'New';
      link.appendChild(badge);
    }

    menuList.appendChild(link);
  });
}

function searchMenu() {
  const input = document.getElementById('menuSearch').value.toLowerCase();
  const links = document.querySelectorAll('#menuList a');
  
  links.forEach(link => {
    const title = link.querySelector('.menu-title').textContent.toLowerCase();
    if(title.includes(input)) {
      link.style.display = 'flex'; // Changed to flex to match new styling
    } else {
      link.style.display = 'none';
    }
  });
}

// Render menu on load
document.addEventListener('DOMContentLoaded', renderMenu);

// Optional: real-time search saat mengetik
document.getElementById('menuSearch').addEventListener('input', searchMenu);
