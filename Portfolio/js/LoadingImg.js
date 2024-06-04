// 检查给定 URL 是否存在图片的函数
function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = function () {
        callback(true);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src = url;
}

function loadImages() {
    const waterfallArea = document.getElementById('waterfallArea');
    const extensions = ['.jpg', '.png', '.gif'];

    paths.forEach(({ path, className, count }) => {
        for (let i = count; i > 0; i--) {
            function processNextImage(extIndex) {
                if (extIndex >= extensions.length) {
                    return;
                }
                const imgUrl = `${path}${i}${extensions[extIndex]}`;
                checkImageExists(imgUrl, (exists) => {
                    if (exists) {
                        handleImage(imgUrl, className);
                    } else {
                        processNextImage(extIndex + 1);
                    }
                });
            }


            setTimeout(() => {
                processNextImage(0);
            }, 1000 / i, count);

        }
    });

    function handleImage(imgUrl, className) {
        const item = document.createElement('div');
        item.className = `item ${className}`;

        const div = document.createElement('div');
        div.className = `content_box`;

        const lazyImg = document.createElement('img');
        lazyImg.src = './image/default.jpg';

        lazyImg.setAttribute('data-src', imgUrl);
        lazyImg.className = 'lazy';

        div.appendChild(lazyImg);
        item.appendChild(div);
        waterfallArea.appendChild(item);
        resizeAllGridItems();
        item.addEventListener('click', () => {
            openModal(lazyImg.getAttribute('data-src'));
        });
        setTimeout(() => {
            initializeLazyLoading();
        }, 270);
    }
}

window.onload = function () {
        loadImages(resizeAllGridItems);
};