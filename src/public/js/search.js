document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    if (!query) return alert("Vui lòng nhập từ khóa!");

    if (query) {
        window.location.href = `/search?query=${query}`;
    }
});

