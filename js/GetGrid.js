const grid = document.querySelector("#waterfallArea");
const allItems = document.querySelectorAll(".content_box");
console.log(allItems);
const resizeGridItem = (item) => {
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
  rowSpan = Math.ceil((item.querySelector("img").getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
  
}

const resizeAllGridItems = () => {
  allItems.forEach(ele => {
    resizeGridItem(ele);
  });
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);