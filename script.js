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
  displayBooks();
}

function removeBook(index) {
    bookArray.splice(index, 1);
    displayBooks(); 
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

       // remove button for each book
       const actionCell = document.createElement('td');
       const removeBtn = document.createElement('button');
       removeBtn.textContent = 'Remove';
       removeBtn.classList.add('remove-btn');
       
       // event listener to remove the book when clicked
       removeBtn.addEventListener('click', function() {
         removeBook(index); // Remove book at this index
       });

       actionCell.appendChild(removeBtn);
       row.appendChild(actionCell);
      
      tableBody.appendChild(row);
    });
  }

  // event listener to show the form when "add a book" button is clicked
  document.getElementById('new-book-btn').addEventListener('click', function() {
    document.getElementById('book-form').style.display = 'block';
  });
   // Event listener to handle the form submission
   document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;
    const year = document.getElementById('book-year').value;

    // add the new book to the array
    addBookToArray(title, author, genre, year);

    // clear the form
    document.getElementById('add-book-form').reset();

    // hide the form
    document.getElementById('book-form').style.display = 'none';
  });

  // event listener to cancel and hide the form
  document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('book-form').style.display = 'none';
  });


//adding books
addBookToLibrary("This Is Your Brain On Food", "Uma Naidoo", "Non-Fiction", "2020");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fiction", "1997");
addBookToLibrary("Tuesdays With Morrie", "Mitch Albom", "Memoir", "1997");

//display on screen
displayBooks();