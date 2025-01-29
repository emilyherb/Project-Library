const myLibrary = [];

//constructor
function Book(title, author, genre, year) {
    title = this.title;
    author = this.author;
    genre = this.genre;
    year = this. year;

  }
  

function addBookToLibrary(title, author, genre, year) {
  let newBook = new Book(title, author, genre, year);
  myLibrary.push(newBook);
}
//display books on the page
function displayBooks() {
    const tableBody = document.querySelector("#book-table tbody");
    tableBody.innerHTML = '';  // Clear previous content

    bookArray.forEach(book => {
      const row = document.createElement('tr');
      
      const titleCell = document.createElement('td');
      titleCell.textContent = book.title;
      row.appendChild(titleCell);
      
      const authorCell = document.createElement('td');
      authorCell.textContent = book.author;
      row.appendChild(authorCell);
      
      const genreCell = document.createElement('td');
      genreCell.textContent = book.genre;
      row.appendChild(genreCell);
      
      const yearCell = document.createElement('td');
      yearCell.textContent = book.year;
      row.appendChild(yearCell);
      
      tableBody.appendChild(row);
    });
  }

//adding books
addBookToLibrary("This Is Your Brain On Food", "Uma Naidoo", "Non-Fiction", "2020");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fiction", "1997");
addBookToLibrary("Tuesdays With Morrie", "Mitch Albom", "Memoir", "1997");

//display on screen
displayBooks();