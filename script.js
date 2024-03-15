let recipeList = document.getElementById('recipe-list');
let noRecipes = document.getElementById('no-recipes');
let form = document.querySelector('form');
let searchBox = document.getElementById('search-input');

let recipes = [
  {
    name: 'Chocolate Cake',
    type: 'Dessert',
    ingredients: [
      '2 cups sugar',
      '1 - 3/4 cups all-purpose flour',
      "3/4 cup HERSHEY'S Cocoa",
      '1 - 1/2 tsps baking powder',
      '1 - 1/2 tsps baking soda',
      '1 tsp salt',
      '2 eggs',
      '1 cup milk',
      '1/2 cup vegetable oil',
      '2 tsps vanilla extract',
      '1 cup boiling water',
    ],
    directions: [
      'Heat oven to 350°F. Grease and flour two 9-inch round baking pans.',
      'Stir together sugar, flour, cocoa, baking powder, baking soda and salt in large bowl. Add eggs, milk, oil and vanilla; beat on medium speed of mixer 2 minutes. Stir in boiling water (batter will be thin). Pour batter into prepared pans.',
      'Bake 30 to 35 minutes or until wooden pick inserted in center comes out clean. Cool 10 minutes; remove from pans to wire racks. Cool completely. Frost with "Perfectly Chocolate" Chocolate Frosting.',
    ],
    yields: '1 cake',
  },
  {
    name: 'Frosting',
    type: 'Dessert',
    ingredients: [
      '1/2 cup butter or margarine (1 stick)',
      "2/3 cup HERSHEY'S Cocoa",
      '3 cups powdered sugar',
      '1/3 cup milk',
      '1 tsp vanilla extract',
    ],
    directions: [
      'Melt butter. Stir in cocoa. Alternately, add powdered sugar and milk, beating to spreading consistency.',
      'Add small amount additional milk, if needed. Stir in vanilla.',
    ],
    yields: '2 cups',
  },
];

//First look of the page
if (recipes) displayRecipes();

function showAddRecipeForm() {
  show('recipeForm');
  hide('recipe-list');
  hide('show-form-btn');
  hide('no-recipes');
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
  let directions = directionsInput.value
    .trim()
    .split(',')
    .map((i) => i.trim());
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
  show('recipe-list');
  show('show-form-btn');
}

form.addEventListener('submit', handleSubmit);

//Cancel add new recipe
function cancelNewRecipe() {
  hide('recipeForm');

  if (recipes.length > 0) {
    show('recipe-list');
  } else {
    show('no-recipes');
  }
  show('show-form-btn');
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
    <p><strong>Yields:</strong></p>
    <p>${recipe.yields}</p>
    <button id="myBtn" class="view-recipe-btn" onclick="viewRecipe(${index})" data-index="${index}">View Recipe</button>    
    <button id="deleteBtn" class="delete-button" onclick="deleteRecipe(${index})" data-index="${index}">Delete</button>`;

  recipeDiv.classList.add('recipe');
  return recipeDiv;
}

//View recipe modal
console.log('Recipe added');
function viewRecipe(index) {
  const currentRecipe = recipes[index];
  document.getElementById('title').textContent = currentRecipe.name;
  document.getElementById('lblYield').textContent = currentRecipe.yields;
  document.getElementById('lblIngredients').textContent =
    currentRecipe.ingredients.join(' | ');
  document.getElementById('lblDirections').textContent =
    currentRecipe.directions.join(' | ');

  openModal();
}
console.log('recipe showed');
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
console.log('modal opened');

function hide(elementId) {
  document.getElementById(elementId).style.display = 'none';
}
function show(elementId) {
  document.getElementById(elementId).style.display = null;
}

hide('recipeForm');

function deleteRecipe(index) {
  const delRecipe = recipes[index];
  if (delRecipe) {
    recipes.splice(index, 1);
  }
  displayRecipes();

  searchBox.value = '';
}

recipeList.addEventListener('click', deleteRecipe);

function searchRecipe(query) {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(query.toLowerCase());
  });

  recipeList.innerHTML = '';

  filteredRecipes.forEach((recipe, index) => {
    const recipeEl = document.createElement('div');

    recipeEl.innerHTML = `
    <h3>${recipe.name}</h3>
    <p><strong>Type:</strong></p>
    <p>${recipe.type}</p>
    <p><strong>Yields:</strong></p>
    <p>${recipe.yields}</p>
    <button id="myBtn" class="view-recipe-btn" onclick="viewRecipe(${index})" data-index="${index}">View Recipe</button>    
    <button id="deleteBtn" class="delete-button" onclick="deleteRecipe(${index})" data-index="${index}">Delete</button>`;

    recipeEl.classList.add('recipe');
    recipeList.appendChild(recipeEl);
  });
}
searchBox.addEventListener('input', (event) =>
  searchRecipe(event.target.value)
);
// searchBox.addEventListener('click', searchRecipe);
