// 检查给定 URL 是否存在图片的函数
function checkImageExists(url, callback) {
    // 创建一个图片对象
    const img = new Image();
    // 当图片成功加载时调用回调函数，并传入 true
    img.onload = () => callback(true);
    // 当图片加载失败时调用回调函数，并传入 false
    img.onerror = () => callback(false);
    // 设置图片的源 URL
    img.src = url;
}

// 动态加载图片的函数
function loadImages(callback) {
    // 获取图片将被追加的容器元素
    const waterfallArea = document.getElementById('waterfallArea');
    
    // 定义图片路径及对应的类名
    const paths = [
        { path: './image/design/', className: 'Design' },
        { path: './image/draw/', className: 'Draw' }
    ];

    // 定义支持的图片扩展名
    const extensions = ['.jpg', '.png'];

    // 初始化待加载和已加载图片的计数器
    let imagesToLoad = 0;
    let imagesLoaded = 0;

    // 增加已加载图片计数并在所有图片加载完成后触发回调函数的函数
    function incrementLoadedImages() {
        imagesLoaded++;
        // 如果所有图片都已加载完成，则调用回调函数
        if (imagesLoaded === imagesToLoad) {
            callback();
            // 等待一小段时间后初始化延迟加载和调整网格布局
            setTimeout(() => {
                initializeLazyLoading();
                resizeAllGridItems();
            }, 300);
        }
    }

    // 对每个路径/类名组合进行迭代，动态加载图片
    paths.forEach(({ path, className }) => {
        let index = 1;
            
        // 加载下一张图片的函数
        function loadNextImage() {
            let foundImage = false;
            
            // 递归函数，检查每种扩展名直到找到存在的图片或所有扩展名都被尝试过
            function checkNextExtension(extIndex) {
                // 如果已经尝试了所有的扩展名，则停止递归
                if (extIndex >= extensions.length) {
                    return;
                }

                // 构建带有当前扩展名的下一张图片的 URL
                const imgUrl = `${path}${index}${extensions[extIndex]}`;
                
                // 检查图片是否存在于构建的 URL
                checkImageExists(imgUrl, (exists) => {
                    if (exists) {
                        foundImage = true;
                        
                        // 创建图片及其容器的元素
                        const item = document.createElement('div');
                        item.className = `item ${className}`;

                        const div = document.createElement('div');
                        div.className = `content_box`;

                        const img = document.createElement('img');
                        img.src = '../image/default.jpg'; // 占位图片
                        img.setAttribute('data-src', imgUrl); // 将实际图片 URL 存储为数据属性
                        img.className = 'lazy'; // 应用延迟加载类

                        // 将图片追加到其容器中，再将容器追加到主容器中
                        div.appendChild(img);
                        item.appendChild(div);
                        waterfallArea.appendChild(item);

                        // 增加待加载图片的计数，并附加加载和错误事件的事件监听器
                        imagesToLoad++;
                        img.onload = incrementLoadedImages;
                        img.onerror = incrementLoadedImages;

                        // 附加点击事件监听器以打开包含点击图片的模态框
                        item.addEventListener('click', () => {
                            openModal(img.getAttribute('data-src'));
                        });

                        // 移动到序列中的下一张图片
                        index++;
                        loadNextImage();
                    } else {
                        // 如果当前扩展名下不存在图片，则尝试下一个扩展名
                        checkNextExtension(extIndex + 1);
                    }
                });
            }

            // 从第一个扩展名开始检查
            checkNextExtension(0);
        }

        // 开始加载当前路径/类名组合的图片
        loadNextImage();
    });

    // 如果没有待加载的图片，则立即调用回调函数
    if (imagesToLoad === 0) {
        callback();
    }
}
