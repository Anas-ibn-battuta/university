document.addEventListener("DOMContentLoaded", function () {
    var i, j,
        buttons_hc = document.querySelectorAll(".button_hc"),
        contents_hc = document.querySelectorAll(".content_hc");

    for (i = 0; i < buttons_hc.length; i++) {
        buttons_hc[i].addEventListener("click", (function (i) {
            return function () {
                for (j = 0; j < contents_hc.length; j++) {
                    if (j === i) {
                        contents_hc[j].style.display = "flex";
                    } else {
                        contents_hc[j].style.display = "none";
                    }
                }
            }
        })
            (i));
    }
});