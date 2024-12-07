$(document).ready(function () {
    // Form submission logic
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // Validate form for correctness
        if (this.checkValidity()) {
            alert("Thank you for contacting us! We will get back to you soon.");
            this.reset(); // Reset the form
        } else {
            $(this).addClass('was-validated');
        }
    });
});