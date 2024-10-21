document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-container img');

    images.forEach((img) => {
        img.addEventListener('click', function () {
            alert(`Anda mengklik gambar: ${this.alt}`);
        });
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic gallery
let slideInterval = setInterval(function () {
    plusSlides(1);
}, 5000); // 5 seconds interval
// *************************************************************
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Menampilkan slide awal
    showSlide(slideIndex);

    // Kontrol tombol sebelumnya dan berikutnya
    document.querySelector('.prev').onclick = () => changeSlide(-1);
    document.querySelector('.next').onclick = () => changeSlide(1);

    function changeSlide(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length; // Menghitung indeks slide berikutnya
        showSlide(slideIndex);
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none'; // Menampilkan slide yang sesuai
            dots[i].className = dots[i].className.replace(' active', ''); // Menghapus kelas aktif
        });
        dots[index].className += ' active'; // Menambahkan kelas aktif pada dot saat ini
    }

    // Interval otomatis untuk galeri
    setInterval(() => changeSlide(1), 5000); // Interval 5 detik
});




