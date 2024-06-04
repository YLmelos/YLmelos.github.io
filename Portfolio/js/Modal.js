// 检查图片是否可用
function checkImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// 打开弹出窗口并显示选定的图片
async function openModal(src) {

    const focusSrc = src.replace(/(\.\w+)$/, '-Focus$1');
    const isFocusAvailable = await checkImage(focusSrc);

    const modalImg = document.getElementById('modalImage');
    modalImg.src = isFocusAvailable ? focusSrc : src;

    const modal = document.getElementById('imageModal');
    modal.style.display = "flex";
    // 禁用页面滚动
    document.body.style.overflowY = 'hidden';

    handleImageClick(src);
}

// 关闭弹出窗口
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";

    // 恢复页面滚动
    document.body.style.overflow = 'auto';
}

// 点击窗口外部区域时，关闭弹出窗口
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
        // 恢复页面滚动
        document.body.style.overflow = 'auto';
    }
}

// 定義兩個陣列

const linkButton = document.querySelector('.linkbutton');
// 處理點擊事件的函數
function handleImageClick(event) {

    const imageNameWithExtension = event.split('./image/').pop();;
    const imageName=imageNameWithExtension.split('.')[0];
    console.log(imageName);
    // 檢查圖片名稱是否在 fileNames 陣列中
    const index = fileNames.findIndex(fileName => fileName.endsWith(imageName));
    if (index !== -1) {
        // 找到對應的 URL
        const url = urls[index];
        // 將 URL 放入 class 為 linkbutton 的 href 屬性中
        
        if (linkButton) {
            linkButton.style.display = "flex";
            linkButton.href = url;
        }
    } else {
        linkButton.style.display = "none";
    }
}

