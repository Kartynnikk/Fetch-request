const input = document.getElementById("input");
const search = document.getElementById("search");
const logo = document.getElementById("logo");
const additPic = document.getElementById("addition_pictures");

const fetchRequest = (queryText) => {
    const url = `https://api.unsplash.com/search/photos?query=${queryText}&per_page=40&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

    fetch(url)
        .then(response => response.json())
        .then((data) => getAdditImages(data))
        .catch(console.log("error"));
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const queryText = document.querySelector("#input").value;
        fetchRequest(queryText);
    }
});

logo.addEventListener("click", () => {
    fetchRequest(queryText);
});

const getAdditImages = (data) => {
    for (let i = 0; i < data.results.length; i++) {
        const img = document.createElement("img");
        img.style.width = "200px";
        img.style.height = "200px";
        img.src = data.results[i].urls.raw;
        const src = document.getElementById("addition_pictures")
        src.appendChild(img);

        img.addEventListener("dblclick", () => {
            window.open(data.results[i].links.download, "_blank");
        })
    }
}