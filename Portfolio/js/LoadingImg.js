var section = document.getElementById("waterfallArea"); // 選擇 <section> 元素
var imagesLoaded = 0; // 用於計算已加載的圖片數量
var imagesPerLoad = 3; // 每次加載的圖片數量
var count = 0;
function fetchImages(folderPath, className) {
    fetch(folderPath) // 發送對資料夾的請求
        .then(response => response.text()) // 解析回應為文字
        .then(data => {
            let parser = new DOMParser(); // 創建 DOM 解析器
            let htmlDoc = parser.parseFromString(data, 'text/html'); // 將回應解析為 HTML 文檔
            let links = htmlDoc.querySelectorAll("a"); // 選擇所有的 <a> 元素
            count = 0;
            links.forEach(link => {
                let focus = link.getAttribute("title");// 獲取連結的 title 屬性
                if (focus && focus.includes("-Focus")) {
                    return; // 跳過這次迭代，繼續處理下一個圖片
                }
                let href = link.getAttribute("href"); // 獲取連結的 href 屬性
                if (href.match(/\.(jpe?g|png|gif)$/)) { // 如果是圖片連結
                    count++;
                    if (count > imagesLoaded && count <= imagesLoaded + imagesPerLoad) { // 只加載指定數量的圖片
                        let imgBox = document.createElement("div"); // 創建 <div> 元素
                        imgBox.classList.add("content_box"); // 添加 class 屬性
                        imgBox.classList.add(className);// 添加 class 屬性
                        let img = document.createElement("img"); // 創建 <img> 元素
                        img.src = href; // 設置圖片的 src 屬性
                        imgBox.appendChild(img); // 將圖片添加到 <div> 中
                        section.appendChild(imgBox); // 添加圖片到 <section> 元素中
                    }
                }
            });
            // 更新已加載的圖片數量
        })
        .catch(error => console.error('Error fetching images:', error)); // 處理錯誤
}

// 使用函數來分別處理不同的資料夾
function FetchImages() {
    fetchImages("../image/draw", "Draw");
    fetchImages("../image/design", "Design");
}

FetchImages();

// 監聽滾動事件
window.addEventListener("scroll", function () {
    // 檢查是否滾動到了頁面底部
    if (window.innerHeight + 2 + window.scrollY >= document.body.offsetHeight) {
        // 加載更多圖片
        if (count > imagesLoaded) {
            imagesLoaded += imagesPerLoad;
            FetchImages();
        }
    }
});


