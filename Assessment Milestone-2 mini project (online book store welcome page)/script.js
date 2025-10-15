function searchBooks() {
    const searchTerm = document.getElementById("searchBox").value.toLowerCase();
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        const title = book.querySelector("p").innerText.toLowerCase();
        book.style.display = title.includes(searchTerm) ? "block" : "none";
    });
}
