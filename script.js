document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Inisialisasi Library AOS (Animate On Scroll)
    AOS.init({
        duration: 800,     // Durasi animasi (ms)
        once: true,        // Jalankan animasi sekali saja saat di-scroll ke bawah
        offset: 100        // Jarak piksel elemen dari viewport sebelum animasi mulai
    });

    // 2. Logika Mobile Menu (Hamburger Navigation Toggle)
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Tutup mobile menu saat salah satu link navigasi diklik
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", function() {
            mobileMenu.classList.add("hidden");
        });
    });

    // 3. Logika Modal / Popup Alat Sewa
    const modal = document.getElementById("itemModal");
    const modalTitle = document.getElementById("modal-title");
    const modalFunc = document.getElementById("modal-func");
    const modalPrice = document.getElementById("modal-price");
    const closeBtn = document.querySelector(".close-btn");
    const rentalCards = document.querySelectorAll(".rental-card");

    rentalCards.forEach(card => {
        card.addEventListener("click", function () {
            // Tarik data atribut yang tertera di kode HTML
            const title = this.getAttribute("data-title");
            const func = this.getAttribute("data-func");
            const price = this.getAttribute("data-price");

            // Masukkan data ke dalam element modal popup
            modalTitle.textContent = title;
            modalFunc.textContent = func;
            modalPrice.textContent = price;

            // Memunculkan modal dengan animasi transisi class
            modal.classList.add("modal-open");
            document.body.classList.add("overflow-hidden"); // Kunci scroll halaman utama saat popup aktif
        });
    });

    // Event menutup modal saat tombol silang (x) ditekan
    closeBtn.addEventListener("click", closeModal);

    // Event menutup modal saat area gelap di luar kotak modal diklik
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove("modal-open");
        document.body.classList.remove("overflow-hidden"); // Kembalikan fungsi scroll halaman utama
    }
});