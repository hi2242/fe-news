export function addCell() {
    const newsBrandList = []

    for (let i = 1; i <= 24; i += 1) {
        newsBrandList.push(`언론사${i}`);
    }

    const htmlString = newsBrandList.map(newsBrand => `<div class="grid-cell">
        ${newsBrand}
        </div>`).join('');

    const targetElement = document.querySelector('#viewArea .center');

    targetElement.innerHTML = htmlString;
}