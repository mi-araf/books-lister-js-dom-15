const list = document.querySelector("#book-list ul");
const addButton = document.querySelector("#add-book :nth-child(2) button");


// start --------------- delete books
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});


// start ----------------- add books
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