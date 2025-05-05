// Envent mouse scroll
document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("collection-left");
    const right = document.getElementById("collection-right");

    // Sự kiện wheel cho left
    left.addEventListener("wheel", function (e) {
        if (left.scrollTop == 0 && right.scrollTop > 0) {
            e.preventDefault();
            const delta = e.deltaY;
            if (delta < 0) {
                right.scrollTop += delta;
            }
            else {
                left.scrollTop += delta;
            }
        }
        else if (left.scrollTop == left.scrollHeight - left.clientHeight && right.scrollTop < right.scrollHeight - right.clientHeight) {
            e.preventDefault();
            const delta = e.deltaY;
            if (delta < 0) {
                left.scrollTop += delta;
            } else {
                right.scrollTop += delta;
            }
        }
    });

    // Sự kiện wheel cho right
    right.addEventListener("wheel", function (e) {
        if (right.scrollTop == 0 && left.scrollTop > 0) {
            e.preventDefault();
            const delta = e.deltaY;
            if (delta < 0) {
                left.scrollTop += delta;
            }
            else {
                right.scrollTop += delta;
            }
        }
        else if (right.scrollTop == right.scrollHeight - right.clientHeight && left.scrollTop < left.scrollHeight - left.clientHeight) {
            e.preventDefault();
            const delta = e.deltaY;
            if (delta < 0) {
                right.scrollTop += delta;
            } else {
                left.scrollTop += delta;
            }
        }
    });
});
