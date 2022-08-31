
const categoriesList = categories => {
	const itemsEl = document.querySelectorAll(categories);
	console.log(`Number of categories: ${itemsEl.length}`);
    itemsEl.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`),
        console.log(`Number of elements: ${item.lastElementChild.children.length}`)
    }
	);
};
categoriesList('.item');