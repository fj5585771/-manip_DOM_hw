document.addEventListener('DOMContentLoaded', () => {

    console.log("Hello Fraz");

    const wholeForm = document.querySelector('#new-film-form');
    wholeForm.addEventListener('submit', handleFormSubmission);

    // EVENT LISTENER AFTER SAVINGS ENTRY > RESET INPUT VALUES
    const clearingInputs = document.querySelector('#new-film-form');
    clearingInputs.addEventListener('submit', handleClearingInputs);

        // CREATE BUTTON CHILD AND APPEND TO CREATED DIV
        const buttondiv = document.createElement('div');
        // ADD CLASS NAME TO BUTTON DIV FOR STYLING
        buttondiv.classList.add('button1');
        const d3lete = document.createElement('button');
        d3lete.textContent = ('❌❌❌');
        buttondiv.appendChild(d3lete);

        // APPEND BUTTON TO FORM
        wholeForm.appendChild(buttondiv);

    const clearList = document.querySelector('.button1');
    clearList.addEventListener('click', handleClearingListItems);

});

const handleFormSubmission = function (event) {

    event.preventDefault();


    // GRAB FILM UL/OUTPUT FORM

    const filmItems = document.querySelector('#film-list');
    
    // CREATE DIV FOR INPUTS CHILD WRAPPER

    const formDivChild = document.createElement('div');

    // GIVE DIV CHILD CLASS NAME - for later styling

    formDivChild.classList.add('film-box');


    // CREATE VARIABLES FOR INPUT FIELDS

    const title = event.target.title.value;
    const director = event.target.director.value;
    const genre = event.target.genre.value;

    // CREATE DIV AND CHILD LI ELEMENTS FOR INSERTION INTO FILM UL

    const titleEntry = document.createElement('li');
    titleEntry.textContent = title;
    const directorEntry = document.createElement('li');
    directorEntry.textContent = director;
    const genreEntry = document.createElement('li');
    genreEntry.textContent = genre;

    // APPEND NEW CHILD DIV ('LI') ELEMENTS TO PARENT DIV (DIV THAT WILL BE APPENDED TO ('#FILM-LIST))

    formDivChild.appendChild(titleEntry);
    formDivChild.appendChild(directorEntry);
    formDivChild.appendChild(genreEntry);

    // THEN APPEND DIV CHILDREN TO FILM LIST

    filmItems.appendChild(formDivChild);

};

const handleClearingInputs = function() {
    // RESET FORM INPUT FIELDS
    const resetForm = document.querySelector('#new-film-form');
    resetForm.reset();

};

const handleClearingListItems = function () {
    // RESET FILM LIST ITEMS
    const resetFilmItems = document.querySelector('#film-list');
    resetFilmItems.innerHTML = ('');
}