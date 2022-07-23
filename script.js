const list = document.querySelector("#book-list ul");
const addButton = document.querySelector("#add-book :nth-child(2) button");
const hide = document.querySelector("#hide");
const searchBooks = document.querySelector('#search-box input');


// start --------------- delete books
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});


// start --------------- add books
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 1. create elements
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    let addInput = document.querySelector("#add-book :nth-child(2) input[type='text']");

    // 3. add text to the creaated elements
    span.innerText = addInput.value;
    button.innerText = 'Delete';

    // ! if text is empty then noting will happen
    if (span.innerText != '') {
        // 2. add classes
        span.className = 'name';
        button.className = 'delete';

        // 4. append / add
        li.appendChild(span);
        li.appendChild(button);

        // 5. finally add it to the ul list
        list.appendChild(li);

        // 6. after taking the 'book' name from the input, then the input feild again blank the input
        addInput.value = ''; 
    } else {
        alert("Please add a Book Name");
    }

})


// start ------------  'hide' books
hide.addEventListener('change', function() {
    if (hide.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
})


// start ------------ 'search' books / filter books
searchBooks.addEventListener('keyup', function(e) {
    // 1. grab the input value from user
    const term = e.target.value.toLowerCase();

    // 2. grab all the 'li' tags
    const books = list.getElementsByTagName('li');

    // 3. cycle/loop through those 'li' tag to get matched items, so turn 'books' into an array
    Array.from(books).forEach(function(book) {
        const bookName = book.firstElementChild.innerText;      // .text-content
        
        // 4. now compare the book Name with user input (-1 => not ok)
        if (bookName.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})