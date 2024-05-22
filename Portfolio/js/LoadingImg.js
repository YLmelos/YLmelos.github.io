function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
}

function loadImages(callback) {
    const waterfallArea = document.getElementById('waterfallArea');
    const paths = [
        { path: './image/design/', className: 'Design' },
        { path: './image/draw/', className: 'Draw' }
    ];
    const extensions = ['.jpg', '.png'];

    let imagesToLoad = 0;
    let imagesLoaded = 0;

    function incrementLoadedImages() {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) {
            callback();
        }
    }

    paths.forEach(({ path, className }) => {
        let index = 1;

        function loadNextImage() {
            let foundImage = false;

            function checkNextExtension(extIndex) {
                if (extIndex >= extensions.length) {
                    if (!foundImage) {
                        console.log(`No more images found in ${path} after index ${index - 1}.`);
                    }
                    return;
                }

                const imgUrl = `${path}${index}${extensions[extIndex]}`;
                checkImageExists(imgUrl, (exists) => {
                    if (exists) {
                        foundImage = true;

                        const item = document.createElement('div');
                        item.className = `item ${className}`;

                        const div = document.createElement('div');
                        div.className = `content_box`;

                        const img = document.createElement('img');
                        img.src = imgUrl;

                        div.appendChild(img);
                        item.appendChild(div);
                        waterfallArea.appendChild(item);

                        imagesToLoad++;
                        img.onload = incrementLoadedImages;
                        img.onerror = incrementLoadedImages;

                        item.addEventListener('click', () => {
                            openModal(img.src);
                        });

                        index++;
                        loadNextImage();
                    } else {
                        checkNextExtension(extIndex + 1);
                    }
                });
            }

            checkNextExtension(0);
        }

        loadNextImage();
    });

    // 如果没有图片需要加载，立即调用回调
    if (imagesToLoad === 0) {
        callback();
    }
}
