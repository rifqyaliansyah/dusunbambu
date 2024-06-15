let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil semua input form
    var name = document.querySelector('input[placeholder="name"]').value;
    var email = document.querySelector('input[placeholder="email"]').value;
    var message = document.querySelector('input[placeholder="message"]').value;

    // Periksa apakah semua form sudah diisi
    if (name === '' || email === '' || message === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please fill in the required section.',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Sent!',
            text: 'Message has been sent.',
        }).then((result) => {
            if (result.isConfirmed) {
                // Reset form setelah pesan terkirim
                document.getElementById('contactForm').reset();
            }
        });
    }
});
