const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
 
const modifiedSpan = document.getElementById('lastModified');
if (modifiedSpan) {
  modifiedSpan.textContent = document.lastModified;
}
 
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav      = document.getElementById('mainNav');
 
if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
 
    hamburgerBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
 
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
  });
 
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburgerBtn.innerHTML = '&#9776;';
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const temples = [
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "images/san_diego.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/slc.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "images/provo.jpg"
  },
  {
    templeName: "Newport Beach California",
    location: "Newport Beach, California, United States",
    dedicated: "2005, August, 28",
    area: 17800,
    imageUrl: "images/newport_beach.jpg"
  },
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, Utah, United States",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl: "images/cedar_city.jpg"
  },
  {
    templeName: "Deseret Peak Utah",
    location: "Tooele, Utah, United States",
    dedicated: "2024, November, 10",
    area: 71998,
    imageUrl: "images/deseret_peak.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah, United States",
    dedicated: "2009, March, 20",
    area: 58300,
    imageUrl: "images/draper.jpg"
  },
  {
    templeName: "Guadalajara Mexico",
    location: "Zapopan, Jalisco, Mexico",
    dedicated: "2001, April, 29",
    area: 10700,
    imageUrl: "images/gudalajara.jpg"
  },
  {
    templeName: "Hermosillo Sonora Mexico",
    location: "Hermosillo, Sonora, Mexico",
    dedicated: "2000, February, 27",
    area: 10769,
    imageUrl: "images/hermosillo.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California, United States",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl: "images/los_angeles.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Nuevo León, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl: "images/monterrey.jpg"
  },
  {
    templeName: "Orem Utah",
    location: "Orem, Utah, United States",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl: "images/orem.jpg"
  },
  {
    templeName: "Red Cliffs Utah",
    location: "St. George, Utah, United States",
    dedicated: "2024, March, 24",
    area: 96277,
    imageUrl: "images/red_clifs.jpg"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl: "images/san_juan.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "images/st_george.jpg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl: "images/tijuana.jpg"
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah, United States",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl: "images/timpanogos.jpg"
  }
];