const categoryImages = [
    "1categories.webp",
    "2categories.jpg",
    "3categories.webp",
    "4categories.webp",
    "5categorieswebp",
    "6categories.webp",
    "7categories.webp",
    "8categories.jpeg",
    "9categories.webp",
    "10categories.webp",
    "11categories.jpg",
    "12categories.jpeg",
    "13categories.jpg"
];

function renderAllCategories() {
    const container = document.getElementById("all-categories");
    if (!container) {
        return;
    }

    const basePath = "assets/all-categories/";
    const fragment = document.createDocumentFragment();

    categoryImages.forEach((fileName) => {
        const img = document.createElement("img");
        img.src = basePath + fileName;
        img.alt = "category";
        img.className = "C1";
        fragment.appendChild(img);
    });

    container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderAllCategories);
