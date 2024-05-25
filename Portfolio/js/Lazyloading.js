function initializeLazyLoading() {
    const observer = new IntersectionObserver((entries, owner) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.setAttribute('src', img.dataset.src);
                console.log();
                datasrc = img.getAttribute('data-src')
                if (datasrc = img.dataset.src) {
                    setTimeout(() => {
                        resizeAllGridItems();
                    }, 250);
                }
                owner.unobserve(img);
            }
        }
    });

    const images = document.querySelectorAll('img.lazy');
    for (let image of images) {
        observer.observe(image);
    }

}
