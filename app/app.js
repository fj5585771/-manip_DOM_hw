document.addEventListener('DOMContentLoaded', () => {

const wholeForm = document.querySelector('#new-film-form');
wholeForm.addEventListener('submit', handleFormSubmission);

    const d3lete = document.createElement('button');
    const div = document.createElement('div');
    div.appendChild(d3lete);
    wholeForm.appendChild(div);

const clearingInputs = document.querySelector('#new-film-form');
clearingInputs.addEventListener('submit', handleClearingInputs);

});

handleFormSubmission = function (event) {

    event.preventDefault();

    // GRAB FORM INPUTS
    const filmInput = document.querySelector('#new-film-form');
    // GRAB FILM UL
    const films = document.querySelector('#film-list');

    // CREATE VARIABLES FOR INPUT FIELDS
    title = document.querySelector('#title');
    director = document.querySelector('#director');
    genre = document.querySelector('#genre');

    // CREATE DIV AND CHILD LI ELEMENTS FOR INSERTION INTO FILM UL
    const formDiv = document.createElement('div');

    const titleEntry = document.createElement('li');
    const directorEntry = document.createElement('li');
    const genreEntry = document.createElement('li');

    // APPEND CHILD LI ELEMENTS TO PARENT DIV
    const listItems = document.querySelectorAll('li');
    formDiv.appendChild(listItems);

    // THEN APPEND DIV CHILDREN TO FILM LIST
    films.appendChild(formDiv);


    // SHOULD BE APPENDING LI AND DIV ELEMENTS TO FILM-LIST ID (<UL> FOR FILM LIST);



};

handleClearingInputs = function() {
    const inputFields = document.querySelector('#new-film-form');
    inputFields.reset();

};