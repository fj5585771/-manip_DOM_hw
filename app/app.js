document.addEventListener('DOMContentLoaded', () => { 

    // GRAB WHOLE FORM SECTION FOR DOM MANIP.
    const wholeForm = document.querySelector('#new-film-form');
    wholeForm.addEventListener('submit', handleFormSubmission);

    // EVENT LISTENER FOR RESETTING FORM INPUT VALUES
    const clearingInputs = document.querySelector('#new-film-form');
    clearingInputs.addEventListener('submit', handleClearingInputs);

    // EVENT LISTENER FOR CLEAR LIST ITEMS BUTTON
    const clearList = document.querySelector('#film-list');
    clearList.addEventListener('click', handleClearingListItems);

});

let formDivChild;

const handleFormSubmission = function (event) {

    event.preventDefault();
    
    // CREATE DIV FOR COLLECTIVE INPUTS CHILD WRAPPER

    const formDivChild = document.createElement('div');

    // GIVE DIV CHILD CLASS NAME - for later styling

    formDivChild.classList.add('film-box');


    // CREATE VARIABLES FOR INPUT FIELD VALUES;

    const title = event.target.title.value;
    const director = event.target.director.value;
    const genre = event.target.genre.value;

    // CREATE DIV AND CHILD LI ELEMENTS FOR INSERTION INTO FILM UL;

    const titleEntry = document.createElement('li');
    titleEntry.textContent = title
    const directorEntry = document.createElement('li');
    directorEntry.textContent = director;
    const genreEntry = document.createElement('li');
    genreEntry.textContent = genre;


    // APPEND NEW CHILD DIV ('LI') ELEMENTS TO PARENT DIV (DIV THAT WILL BE APPENDED TO ('#FILM-LIST))

    formDivChild.appendChild(titleEntry);
    formDivChild.appendChild(directorEntry);
    formDivChild.appendChild(genreEntry);

    // THEN APPEND DIV CHILDREN TO FILM LIST
    const filmItems = document.querySelector('#film-list');
    filmItems.appendChild(formDivChild);
    console.log(event.target);

    // CREATE BUTTON CHILD

    const buttonDiv = document.createElement('button');

    // ADD CLASS NAME TO BUTTON DIV FOR STYLING

    buttonDiv.classList.add('button1');
    buttonDiv.textContent = ('Remove selection'); 

    // APPEND BUTTON TO FORM - EDIT: CHANGED TO APPEND ON UL 
    filmItems.appendChild(buttonDiv);   
    console.log(event.target)

    // THIS WILL CALL BUTTON EACH TIME THE FORM SUBMISSION IS MADE - WE CAN USE THIS TO CLEAR EACH ENTRY INPUT **

        // ** THE NEWLY CREATED BUTTON MUST HAVE ID TO REFER TO. SO THAT WHEN STORING TARGETED VALUES IN OBJECTS, 

        // E.G (CONST REMOVEBUTTON - EVENT.TARGET.BUTTON.VALUE)

        // WE DONT WANT TO STORE IT INSIDE CREATED ELEMENT AS TEXT CONTENT, WE WANT IT TO REMOVE INDIVIDUAL ENTRY THAT IT IS BEING CALLED ON

};

const handleClearingInputs = function() {
    // RESET FORM INPUT FIELDS
    const resetForm = document.querySelector('#new-film-form');
    resetForm.reset();

};

const handleClearingListItems = function () {
    // RESET FILM LIST ITEMS
    const litContent = formDivChild.innerHTML;
    // formDivChild.setAttribute("id", "film-box-id");
    formDivChild.innerHTML = '';

    // const parentDiv = formDivChild.parentnode;
    // parentDiv.removeChild(formDivChild);
}
