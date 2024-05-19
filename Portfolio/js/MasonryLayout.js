function resizeGridItem(item) {
    const grid = document.getElementsByClassName("grid")[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil(((item.querySelector('.content_box').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    const allItems = document.getElementsByClassName("item");
    for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeInstance(instance) {
    const item = instance.elements[0];
    resizeGridItem(item);
}

window.addEventListener("resize", resizeAllGridItems);
