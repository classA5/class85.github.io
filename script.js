document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn form submit mặc định

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if(username === "class85" && password === "ezgg") {
        // Thêm hiệu ứng fade-out cho toàn trang
        document.body.classList.add("fade-out");
        // Sau 1 giây, chuyển hướng sang trang mới
        setTimeout(() => {
          window.location.href = "pages/trangchinh.html";
        }, 1000);
    } else {
        // Hiển thị thông báo lỗi
        errorMessage.textContent = "Sai tk hoặc mk rồi nhóc,định làm hacker àa?";
        errorMessage.classList.add("show");

        // Sau 1 giây, ẩn thông báo và xoá input
        setTimeout(() => {
            errorMessage.classList.remove("show");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }, 1000);
    }
});
