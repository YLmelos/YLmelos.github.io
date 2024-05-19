$(document).ready(function () {
    setupMasonry();
});

function setupMasonry() {
    var $grid = $('.grid').masonry({
        // disable initial layout
        initLayout: false,
        //...
    });
    setTimeout(function () {
        $('#waterfallArea').masonry({
            columnWidth: 10,
            itemSelector: '.content_box',
            gutter: 10
        });
    }, 300);
}