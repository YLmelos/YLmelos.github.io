// 初始化 Lazy Loading 功能
function initializeLazyLoading() {
    // 選取所有具有 lazy class 的圖片元素
    const images = document.querySelectorAll('img.lazy');
    
    // 建立 IntersectionObserver 物件，用來監視元素是否進入視窗內
    const observer = new IntersectionObserver((entries, owner) => {
        
        // 迭代所有進入視窗內的元素
        for (let entry of entries) {
            // 如果元素進入了視窗內
            if (entry.isIntersecting) {
                // 取得目標圖片元素
                const img = entry.target;
                
                // 將圖片的 data-src 屬性值設置為 src，觸發圖片載入
                img.setAttribute('src', img.dataset.src);
                
                // 檢查 data-src 屬性值是否等於 dataset.src 的值
                datasrc = img.getAttribute('data-src')
                if (datasrc = img.dataset.src) {
                    // 延遲 250 毫秒後調用 resizeAllGridItems() 函數
                    setTimeout(() => {
                        resizeAllGridItems();
                    }, 250);
                }
                
                // 停止觀察這個圖片元素
                owner.unobserve(img);
                
            }
        }
    });
    // 對每個圖片元素開始進行觀察
    for (let image of images) {
        observer.observe(image);
    }
}
