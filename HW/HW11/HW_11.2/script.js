const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
  .then(value => value.json())
  .then(recipesObject => {
    const { recipes } = recipesObject;
    console.log(recipes);

    for (const recipe of recipes) {
      const div = document.createElement('div');
      div.classList.add('recipe-container');

      const divWithInfo = document.createElement('div');
      divWithInfo.innerText = `
                    "id": ${recipe.id},
                    "name": ${recipe.name},
                    "cuisine": ${recipe.cuisine},
                    "difficulty": ${recipe.difficulty},
                    "prepTimeMinutes": ${recipe.prepTimeMinutes},
                    "caloriesPerServing": ${recipe.caloriesPerServing}
                `;

      const img = document.createElement('img');
      img.src = recipe.image;
      img.style.width = '200px';

      const ol = document.createElement('ol');

      for (const ingredient of recipe.ingredients) {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ol.appendChild(li);
      }

      div.append(img, divWithInfo, ol);
      recipesDiv.appendChild(div);
    }
  });