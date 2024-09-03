document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.nav-links');

    navbarToggler.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        navbarToggler.classList.toggle('active');
    });

    const navLinksList = document.querySelectorAll('.nav-links li a');

    // Loop melalui setiap link
    navLinksList.forEach(function (link) {
        // Tambahkan event listener untuk setiap link
        link.addEventListener('click', function () {
            // Hapus kelas active dari semua link
            navLinksList.forEach(function (link) {
                link.classList.remove('active');
            });
            // Tambahkan kelas active ke link yang diklik
            link.classList.add('active');

            // Sembunyikan dropdown setelah memilih item
            navLinks.classList.remove('show');
            navbarToggler.classList.remove('active');
        });
    });
});