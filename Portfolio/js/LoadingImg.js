window.onload = function() {
    const waterfallArea = document.getElementById('waterfallArea');
    const paths = [
        { path: './image/design/', className: 'Design' },
        { path: './image/draw/', className: 'Draw' }
    ];
    const extensions = ['.jpg', '.png'];

    function checkImageExists(url, callback) {
        const img = new Image();
        img.onload = () => callback(true);
        img.onerror = () => callback(false);
        img.src = url;
    }

    function loadImages() {
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
                            const div = document.createElement('div');
                            div.className = `content_box ${className}`;

                            const img = document.createElement('img');
                            img.src = imgUrl;

                            div.appendChild(img);
                            waterfallArea.appendChild(div);

                            index++;
                            loadNextImage();
                        } else {
                            checkNextExtension(extIndex + 1);
                        }
                    });
                }
                $(document).ready(function () {
                    setupMasonry();
                });
                checkNextExtension(0);
            }
            loadNextImage();
        });
    }

    loadImages();
};
