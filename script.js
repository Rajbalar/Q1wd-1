// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsList = document.getElementById('resultsList');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value;
        
        const books = [
            { title: 'Book 1', author: 'Author 1' },
            { title: 'Book 2', author: 'Author 2' },
        ];

        displayResults(books);
    });

    function displayResults(books) {
        resultsList.innerHTML = ''; 
        if (books.length === 0) {
            resultsList.innerHTML = '<li>No results found</li>';
        } else {
            books.forEach((book) => {
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author}`;
                resultsList.appendChild(li);
            });
        }
    }
});
