let recipeList = document.getElementById('recipe-list');
let noRecipes = document.getElementById('no-recipes');
let form = document.querySelector('form');

let recipes = [];

function handleSubmit(event) {  
    // Prevent default form submission behavior
    event.preventDefault();

    let nameInput = document.getElementById('recipeName');
    let typeInput = document.getElementById('recipeSelect');
    let ingrInput = document.getElementById('recipeIngredients');
    let directionsInput = document.getElementById('recipeDirections');
    let yieldsInput = document.getElementById('recipeYields');
    
    let name = nameInput.value.trim();
    let type = typeInput.value;
    let ingredients = ingrInput.value.trim().split(',').map(i => i.trim());
    let directions = directionsInput.value.trim();
    let yields = yieldsInput.value.trim();
    
    if (name && type && ingredients.length > 0 && directions.length > 0 && yields) {
        let newRecipe = { name, type, ingredients, directions, yields};
        console.log(newRecipe);
        recipes.push(newRecipe);
    }

    nameInput.value = '';
    typeInput.value = '';
    ingrInput.value = '';
    directionsInput.value = '';
    yieldsInput.value = '';    
        
    displayRecipes();
}

form.addEventListener('submit', handleSubmit);

function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement('div'); 
    
    recipeDiv.innerHTML = `   
    <h3>${recipe.name}</h3>
    <p><strong>Type:</strong></p>
    <p>${recipe.type}</p>
    <p><strong>Yield:</strong></p>
    <p>${recipe.yields}</p>
    <button class="delete-button" data-index="${index}">Delete</button>`;

    recipeDiv.classList.add('recipe');
    recipeList.appendChild(recipeDiv);
    noRecipes.style.display = recipes.length > 0 ? 'none' : 'flex';

    });

}




    
  

// function viewRecipe() {
//     recipes.forEach((recipe, index) => {
    
//     let showrecipeDiv = document.createElement('div');
        
//     showrecipeDiv.innerHTML = `
//         <h3>${recipe.name}</h3>
//         <p><strong>Ingredients:</strong></p>
//         <p>${recipe.ingredients}</p>
//         <p><strong>Directions:</strong></p>
//         <p>${recipe.directions}</p>
//         <button class="close-button" data-index="${index}">Close</button>`;
        
    
//     showrecipeDiv.classList.add('show-recipe');

//     });
// }


{/* <button class="delete-button" data-index="${recipes.indexOf(recipe)}">Delete</button> */}
// function handleDelete(event) {
//     if (event.target.classList.contains('delete-button')) {
//         const index = event.target.dataset.index;
//     }
//     recipes.splice(index, 1);

//     displayRecipes();
// }

// recipeList.addEventListener('click', handleDelete);


{/* <img src=${recipe.photoUploaded}> */}
// let photoInput = document.getElementById('#recipe-photo');
//     photoInput.addEventListener('change', (event) => {
//         const image = event.target.files[0]
//         const reader = new FileReader();
//         reader.readAsDataURL(image)
//         reader.addEventListener('load', () => {
//             localStorage.setItem('#recipe-photo', reader.result)
//         })  
//     })
//     document.addEventListener('DOMContentLoaded', () => {
//         const photoUploaded = localStorage.getItem('#recipe-photo')
//         // const previewImage = document.getElementById('preview')
//         if (photoUploaded) {
//             previewImage.setAttribute('src', photoUploaded)
//         } 
//         else {
//             previewImage.setAttribute('src', 'default.jpg')
//         }

//     });

{/* <button class="delete-button" data-index="${index}">Delete</button>
<button id="show-recipe">View Recipe!</button>
<div id="recipe-card">
    <button id="hide-recipe">X</button>
    <pre id="ingredient-con">${recipe.ingredients}</pre>
    <pre id="directions">${recipe.directions}</pre>
</div> */}

    // let hideRecipe = document.getElementById("hide-recipe");
    // let showRecipe = document.getElementById("show-recipe");
    // let recipeCard = document.getElementById("recipe-card");
    
    
    // hideRecipe.addEventListener("click", () => {
    //     recipeCard.style.display = "none";
    // });
    // showRecipe.addEventListener("click", () => {
    //    recipeCard.style.display = "block";
    // });
        
    // recipeDiv.classList.add('recipe');
    // recipeList.appendChild(recipeDiv);
    // noRecipes.style.display = recipes.length > 0 ? 'none' : 'flex';