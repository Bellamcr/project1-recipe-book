const form = document.getElementById('form');

let recipes = [];

function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get recipe name, ingredients, and method input values
    const nameInput = document.getElementById('recipe-name');
    const typeInput = document.getElementById('recipe-select');
    const ingrInput = document.getElementById('recipe-ingredients');
    const directionsInput = document.getElementById('recipe-directions');
    const yieldsInput = document.getElementById('recipe-yields');
    const photoUpload = document.getElementById('recipe-photo');

    const name = nameInput.value.trim();
    const ingredients = ingrInput.value.trim().split(',').map(i => i.trim());
    const directions = directionsInput.value.trim();
    const yields = yieldsInput.value.trim();

    if (name && typeInput && ingredients.length > 0 && directions.length > 0 && yields && photoUpload) {
        const newRecipe = { name, typeInput, ingredients, directions, yields, photoUpload };
        recipes.push(newRecipe);
    }

    nameInput.value = '';
    typeInput.value = '';
    ingrInput.value = '';
    directionsInput.value = '';
    yieldsInput.value = '';
    photoUpload.value = '';
}

form.addEventListener('submit', handleSubmit);
