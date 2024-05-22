function initializeLazyLoading() {
    const observer = new IntersectionObserver((entries, owner) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.setAttribute('src', img.dataset.src);
                setTimeout(() => {
                    // img.removeAttribute('data-src');
                    resizeAllGridItems();
                }, 400);
                owner.unobserve(img);
            }
        }
    });

    const images = document.querySelectorAll('img.lazy');
    for (let image of images) {
        observer.observe(image);
    }
    
}
