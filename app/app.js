document.addEventListener('DOMContentLoaded', () => { 

    const gatherForm = document.querySelector('#new-film-form');
    gatherForm.addEventListener('submit', handleFormSubmission);

    const createList = document.querySelector('#new-film-form');
    createList.addEventListener('submit', createFilmListItem);

    const clearingInputs = document.querySelector('#new-film-form');
    clearingInputs.addEventListener('submit', handleClearingInputs);

    const clearList = document.querySelector('#film-list');
    clearList.addEventListener('click', handleClearingListItems)
});

const handleFormSubmission = function (event) {
    event.preventDefault();
    const newListItem = createFilmListItem(event.target);
    const parentList = document.querySelector('#film-list');
    parentList.appendChild(newListItem);
    // event.target.reset();
    console.log(event);
    console.log(event.target);
    
};

const createFilmListItem = function (event) {
    console.log(event);
    // CREATE DIV AND CHILD LI ELEMENTS FOR INSERTION INTO FILM UL;
    const title = this.title.value;
    const director = this.director.value;
    const genre = this.genre.value;
    const fav = this.favourite.checked;

    const titleEntry = document.createElement('h3');
    titleEntry.textContent = title
    const directorEntry = document.createElement('p');
    directorEntry.textContent = director;
    const genreEntry = document.createElement('p');
    genreEntry.textContent = genre;

    const favEntry = document.querySelector('input[name="fav"]');
    let selectedValue;
    if (favEntry.checked){
        selectedValue = favEntry.value;
    }

    const newFavEntry = document.createElement('p');
    newFavEntry.textContent = selectedValue;

    // THEN APPEND CHILD LIST ELS TO PARENT UL
    const newListItem = document.createElement('li');
    newListItem.appendChild(titleEntry);
    newListItem.appendChild(directorEntry);
    newListItem.appendChild(genreEntry);
    newListItem.appendChild(newFavEntry);

    // CREATE BUTTON AND APPEND
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'remove'; 
    newListItem.appendChild(button); 

    return newListItem;

}

const handleClearingInputs = function() {
    // RESET FORM INPUT FIELDS
    const resetForm = document.querySelector('#new-film-form');
    resetForm.reset();
};

const handleClearingListItems = function () {
    // CLEAR FILM LIST ITEMS
    console.log('button has been clicked');
    const newList = document.querySelector('#film-list');
    const listChild = document.querySelector('li');
    newList.removeChild(listChild);
  
};
