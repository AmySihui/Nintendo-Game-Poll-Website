$(document).ready(function () {
    // 表单提交逻辑
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // 验证表单是否有效
        if (this.checkValidity()) {
            alert("Thank you for contacting us! We will get back to you soon.");
            this.reset(); // 重置表单
        } else {
            $(this).addClass('was-validated');
        }
    });
});