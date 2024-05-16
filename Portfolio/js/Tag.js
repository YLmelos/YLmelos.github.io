// 獲取所有的li元素
var navItems = document.querySelectorAll(".nav li");

// 遍歷所有的li元素
navItems.forEach(function (item) {
    // 添加點擊事件監聽器
    item.addEventListener("click", function () {
        // 先移除所有li元素上的focus類
        navItems.forEach(function (item) {
            item.classList.remove("focus");
        });
        // 為被點擊的li元素添加focus類
        item.classList.add("focus");

        // 檢查點擊的是哪個項目，並根據其內容執行相應的操作
        var categoryName = item.textContent;
        if (categoryName === "插畫美術") {
            // 在這裡添加展示插畫美術相關內容的代碼
            var designDivs = document.querySelectorAll(".Design");
            designDivs.forEach(function (div) {
                div.style.display = "none";
            });
            // 顯示Draw類的div
            var drawDivs = document.querySelectorAll(".Draw");
            drawDivs.forEach(function (div) {
                div.style.display = "block";
            });
        } else if (categoryName === "平面設計") {
            // 在這裡添加展示平面設計相關內容的代碼
            // 隱藏Draw類的div
            var drawDivs = document.querySelectorAll(".Draw");
            drawDivs.forEach(function (div) {
                div.style.display = "none";
            });
            // 顯示Design類的div
            var designDivs = document.querySelectorAll(".Design");
            designDivs.forEach(function (div) {
                div.style.display = "block";
            });
        } else {
            // 在這裡添加展示全部作品的相關內容的代碼
            var allDivs = document.querySelectorAll(".content_box");
            allDivs.forEach(function(div) {
                div.style.display = "block";
            });
        }
    });
});

