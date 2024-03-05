let recipeList = document.getElementById('recipe-list');
let noRecipes = document.getElementById('no-recipes');
let form = document.getElementById('form');

let recipes = [];

function handleSubmit(event) {  
    // Prevent default form submission behavior
    event.preventDefault();

    let nameInput = document.getElementById('recipe-name');
    let typeInput = document.getElementById('recipe-select');
    let ingrInput = document.getElementById('recipe-ingredients');
    let directionsInput = document.getElementById('recipe-directions');
    let yieldsInput = document.getElementById('recipe-yields');
    

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

    console.log(recipes);

    nameInput.value = '';
    typeInput.value = '';
    ingrInput.value = '';
    directionsInput.value = '';
    yieldsInput.value = '';    
    

    displayRecipes();
    console.log("recipe added");  
    
}

form.addEventListener('submit', handleSubmit);

function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
    let recipeDiv = document.createElement('div');

    recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Type:</strong></p>
        <p>${recipe.type}</p>
        <p><strong>Yield:</strong></p>
        <p>${recipe.yields}</p>
        <button class="delete-button" data-index="${index}">Delete</button>`;
 
    recipeDiv.classList.add('recipe');
    console.log("obj");
    recipeList.appendChild(recipeDiv);
    noRecipes.style.display = recipes.length > 0 ? 'none' : 'flex';
    
    }); 
}


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