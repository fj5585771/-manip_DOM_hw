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
    event.target.reset();
};

const createFilmListItem = function (event) {
    // CREATE DIV AND CHILD LI ELEMENTS FOR INSERTION INTO FILM UL;
    const title = event.title.value;
    const director = event.director.value;
    const genre = event.genre.value;
    const titleEntry = document.createElement('h3');
    titleEntry.textContent = title
    const directorEntry = document.createElement('p');
    directorEntry.textContent = director;
    const genreEntry = document.createElement('p');
    genreEntry.textContent = genre;

    // THEN APPEND CHILD LIST TO PARENT DIV
    const newListItem = document.createElement('li');
    newListItem.appendChild(titleEntry);
    newListItem.appendChild(directorEntry);
    newListItem.appendChild(genreEntry);

    // CREATE BUTTON AND APPEND
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'delete'; 
    newListItem.appendChild(button); 

    return newListItem;
}

const handleClearingInputs = function() {
    // RESET FORM INPUT FIELDS
    const resetForm = document.querySelector('#new-film-form');
    resetForm.reset();
};

const handleClearingListItems = function () {
    // RESET FILM LIST ITEMS
    const newList = document.querySelector("#film-list");
    newList.innerHTML ='';
    

}
