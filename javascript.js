
//reparar esto
const newGrid = document.getElementById('newGrid')
const mainDiv = document.getElementById('mainDiv')

//Grid generator
function gridGenerator(columnsAndRows = 16){
    //Rows generator
    for (let rows = 0 ; rows < columnsAndRows ; rows++ ) {
        //Columns generator
        for (let columns = 0 ; columns < columnsAndRows ; columns++ ) {

            //Create a div and set an id
            let newDiv = document.createElement('div');
            newDiv.id = 'newDiv';
            newDiv.style.height = 800 / columnsAndRows + 'px';
            newDiv.style.width = 800 / columnsAndRows + 'px';

            //Mouseover change color
            newDiv.addEventListener('mouseover', function() {
                newDiv.style.backgroundColor = 'blue';
                newDiv.style.border = 'none';
            });

            //Append it inside the mainDiv
            mainDiv.appendChild(newDiv);

        };
    };
};

gridGenerator()

// Ask for a new number of grid when use the button
newGrid.addEventListener('click', function(){

        userNumberInput = prompt('Please, set a number between 1 and 100:');
        userInput = parseInt(userNumberInput);

        if (userInput >= 1 && userInput <= 100) {
                setNewGrid()

        } else {
            alert('Please, set a number between 1 and 100')
        }

});

// deletes the old grid and set a new one asking to the user with a prompt
function setNewGrid(){

    //Deletes old divs generated
    while (mainDiv.firstChild){
        let deleteDiv = document.getElementById('newDiv')
        mainDiv.removeChild(deleteDiv)
    }

    //Calls grid generator
    gridGenerator(columnsAndRows = userInput)
}

