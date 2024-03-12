let recipeList = document.getElementById('recipe-list');
let noRecipes = document.getElementById('no-recipes');
let form = document.querySelector('form');

let recipes = [
  {
    name: 'Chocolate cake',
    type: 'Dessert',
    ingredients: ['Flour', 'Sugar', 'Chocolate'],
    directions:
      'Mix all the ingredients and bake it for 25 minutes at 250 celsius',
    yields: 'Serves 4 people',
  },
  {
    name: 'Chocolate cake 2',
    type: 'Dessert',
    ingredients: ['Flour', 'Sugar', 'Chocolate', 'Milk'],
    directions:
      'Mix all the ingredients and bake it for 25 minutes at 250 celsius',
    yields: 'Serves 4 people',
  },
];

//First look of the page
if (recipes) displayRecipes();
function showAddRecipeForm() {
  show('recipeForm');
}

//Adding new recipe
function handleSubmit(event) {
  event.preventDefault();

  let nameInput = document.getElementById('recipeName');
  let typeInput = document.getElementById('recipeSelect');
  let ingrInput = document.getElementById('recipeIngredients');
  let directionsInput = document.getElementById('recipeDirections');
  let yieldsInput = document.getElementById('recipeYields');

  let name = nameInput.value.trim();
  let type = typeInput.value;
  let ingredients = ingrInput.value
    .trim()
    .split(',')
    .map((i) => i.trim());
  let directions = directionsInput.value.trim();
  let yields = yieldsInput.value.trim();

  if (
    name &&
    type &&
    ingredients.length > 0 &&
    directions.length > 0 &&
    yields
  ) {
    let newRecipe = { name, type, ingredients, directions, yields };
    recipes.push(newRecipe);
  }

  nameInput.value = ' ';
  typeInput.value = ' ';
  ingrInput.value = ' ';
  directionsInput.value = ' ';
  yieldsInput.value = ' ';

  displayRecipes();
  hide('recipeForm');
}

form.addEventListener('submit', handleSubmit);

//Cancel add new recipe
function cancelNewRecipe() {
  hide('recipeForm');
}

//Display recipes added
function displayRecipes() {
  recipeList.innerHTML = ' ';
  recipes.forEach((recipe, index) => {
    recipeList.appendChild(buildRecipeCard(recipe, index));
  });
  noRecipes.style.display = recipes.length > 0 ? 'none' : 'flex';
}

function buildRecipeCard(recipe, index) {
  const recipeDiv = document.createElement('div');

  recipeDiv.innerHTML = `   
    <h3>${recipe.name}</h3>
    <p><strong>Type:</strong></p>
    <p>${recipe.type}</p>
    <p><strong>Yield:</strong></p>
    <p>${recipe.yields}</p>
    <button id="myBtn" class="view-recipe-btn" onclick="viewRecipe(${index})" data-index="${index}">View Recipe</button>    
    <button class="delete-button" data-index="${index}">Delete</button>`;

  recipeDiv.classList.add('recipe');
  return recipeDiv;
}

//View recipe modal
function viewRecipe(index) {
  const currentRecipe = recipes[index];
  document.getElementById('title').textContent = currentRecipe.name;
  document.getElementById('lblYield').textContent = currentRecipe.yields;
  document.getElementById('lblIngredients').textContent =
    currentRecipe.ingredients.join(' | ');
  document.getElementById('lblDirections').textContent =
    currentRecipe.directions;

  openModal();
}

function openModal() {
  let modal = document.getElementById('myModal');
  let span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block';

  span.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

function hide(elementId) {
  document.getElementById(elementId).style.display = 'none';
}
function show(elementId) {
  document.getElementById(elementId).style.display = null;
}

hide('recipeForm');


{
  /* <button class="delete-button" data-index="${recipes.indexOf(recipe)}">Delete</button> */
}
// function handleDelete(event) {
//     if (event.target.classList.contains('delete-button')) {
//         const index = event.target.dataset.index;
//     }
//     recipes.splice(index, 1);

//     displayRecipes();
// }

// recipeList.addEventListener('click', handleDelete);

{
  /* <img src=${recipe.photoUploaded}> */
}
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

{
  /* <button class="delete-button" data-index="${index}">Delete</button>
<button id="show-recipe">View Recipe!</button>
<div id="recipe-card">
    <button id="hide-recipe">X</button>
    <pre id="ingredient-con">${recipe.ingredients}</pre>
    <pre id="directions">${recipe.directions}</pre>
</div> */
}

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
