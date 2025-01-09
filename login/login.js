var signBtn = document.getElementById("sign-btn");
var logBtn = document.getElementById("log-btn");
var main = document.getElementById("main");


signBtn.addEventListener("click", function () {
    main.classList.add("right-panel-active");
});
logBtn.addEventListener("click", function () {
    main.classList.remove("right-panel-active");
});


