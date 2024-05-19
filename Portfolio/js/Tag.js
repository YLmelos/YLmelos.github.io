// 獲取所有的li元素
var navItems = document.querySelectorAll(".nav li");

function showContent(className) {
    var allDivs = document.querySelectorAll(".item");
    allDivs.forEach(function (div) {
        div.style.display = "none";
    });
    var categoryDivs = document.querySelectorAll("." + className);
    categoryDivs.forEach(function (div) {
        div.style.display = "none";
        setTimeout(function(){
            div.style.display = "block";
            resizeAllGridItems();
        }, 100);
    });
}

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navItems.forEach(function (item) {
            item.classList.remove("focus");
        });
        item.classList.add("focus");

        var categoryName = item.textContent.trim();
        if (categoryName === "插畫美術") {
            showContent("Draw");
        } else if (categoryName === "平面設計") {
            showContent("Design");
        } else {
            showContent("item");
        }
    });
});
