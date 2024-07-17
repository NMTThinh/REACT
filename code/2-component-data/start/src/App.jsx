import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList'
import StepList from './StepList';
// TODO: Import IngredientList


function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        stepbystep:[
            {thestep: 'Add cut potatoes to a pot of heavily salted water.', thesteps:false},
            {thestep: 'Bring pot to a boil', thesteps:true},
            {thestep: 'Boil the potatoes until fork tender, about 15-20 minutes.', thesteps:false},
            {thestep: 'Strain the potatoes.', thesteps:true},
            {thestep: 'Return potatoes to pot.',thesteps:false},
            {thestep: 'Add butter, cream, salt, and pepper to taste.', thesteps:true},
            {thestep: 'Mash potatoes.', thesteps:false},
            {thestep: 'Reseason and add butter and cream as desired.', thesteps:true},
        ]
    };

   
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            <StepList stepbystep ={recipe.stepbystep} />
        </article>
    )
}

export default App;
