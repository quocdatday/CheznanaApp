// Envent mouse scroll
document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("collection-left");
    const x = document.getElementById("collection-list-content");
    //const right = document.getElementById("collection-right");

    // Sự kiện wheel cho left
    // Cuộn bằng chuột
    //left.addEventListener("wheel", function (e) {
    //    e.preventDefault();
    //    const delta = e.deltaY;
    //    if (delta > 0) {
    //        x.scrollTop += delta;
    //    }
    //    if (delta < 0) {
    //        x.scrollTop += delta;
    //    }
    //});
    // Cuộn bằng cảm ứng (Mobile)
    left.addEventListener("touchstart", function (e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: false });

    left.addEventListener("touchmove", function (e) {
        e.preventDefault(); // Ngăn cuộn mặc định của trình duyệt
        const touchY = e.touches[0].clientY;
        const delta = touchStartY - touchY;
        x.scrollTop += delta;
        touchStartY = touchY;
    }, { passive: false });

    // Sự kiện wheel cho right
    //right.addEventListener("wheel", function (e) {
    //    if (right.scrollTop == 0 && left.scrollTop > 0) {
    //        e.preventDefault();
    //        const delta = e.deltaY;
    //        if (delta < 0) {
    //            left.scrollTop += delta;
    //        }
    //        else {
    //            right.scrollTop += delta;
    //        }
    //    }
    //    else if (right.scrollTop == right.scrollHeight - right.clientHeight && left.scrollTop < left.scrollHeight - left.clientHeight) {
    //        e.preventDefault();
    //        const delta = e.deltaY;
    //        if (delta < 0) {
    //            right.scrollTop += delta;
    //        } else {
    //            left.scrollTop += delta;
    //        }
    //    }
    //});
});
