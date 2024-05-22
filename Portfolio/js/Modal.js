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