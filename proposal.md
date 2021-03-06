# Digital Bartender

## Project Description

Digital bartender is a React-based app to help the user discover new cocktails from a cocktail API and make searched based on various ingredients. There is to be a random cocktail feature for the indecisive user as well as search functionality to compare and find cocktails based on ingredients the user may have at home. Each cocktail contains an image as well as preparation instructions and an ingredients list. As some stretch goals I would like to elaborate on the search functionality for searches based on category and/or origin of the cocktails.

## Wire Frames
**Home Page**

![Welcome wire frame](/proposal_imgs/IMG_0746(1).jpg)

**Search Page**

![Search wire frame](/proposal_imgs/IMG_0747.jpg)

**Cocktail Page**

![Cocktail wire frame](/proposal_imgs/IMG_0748.jpg)

## User Stories

**MVP**
- As a user, I would like to have a navigation bar to be able to navigate the app easily.
- As a user, I would like to have cocktail details easily available and readable.
- As a user, I would like to have a categories I can explore to browse cocktails.
- As a user, I would like to have a home screen that displays a random cocktail for inspiration.
- As a user, I would like to be able to see various information on how to prepare cocktails and/or some history of each cocktail.

**Stretch Goals**
- As a user, I would like to have intuitive search functionality to find various cocktails.
- As a user, I would like the page to be reactive to my actions and events to have a better experience.
- As a user, I would like to have multiple search options based on types of cocktails and/or cocktail history to discover more "themed" cocktails.
- As a user, I would like to be able to store some ingredients I may have at home to be able to easily search within those parameters.
- As a user, I would like to be able to see detailed information about different cocktail ingredients for some I may be unfamiliar with.

## API
[The Cocktail DB API Documentation](https://www.thecocktaildb.com/api.php)

**Random Cocktail Data**
```{
drinks: [
{
idDrink: "17060",
strDrink: "24k nightmare",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Shot",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Shot glass",
strInstructions: "Add over ice,shake and pour.",
strInstructionsES: null,
strInstructionsDE: "Über das Eis geben, schütteln und eingiessen.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
strIngredient1: "Goldschlager",
strIngredient2: "Jägermeister",
strIngredient3: "Rumple Minze",
strIngredient4: "151 proof rum",
strIngredient5: null,
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "1/2 oz ",
strMeasure2: "1/2 oz ",
strMeasure3: "1/2 oz ",
strMeasure4: "1/2 oz Bacardi ",
strMeasure5: null,
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2016-07-18 22:31:38"
}
]
}
```

**Search Cocktails Data Example**
```
drinks: [
{
idDrink: "17222",
strDrink: "A1",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Cocktail",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Cocktail glass",
strInstructions: "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
strInstructionsES: null,
strInstructionsDE: "Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
strIngredient1: "Gin",
strIngredient2: "Grand Marnier",
strIngredient3: "Lemon Juice",
strIngredient4: "Grenadine",
strIngredient5: null,
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "1 3/4 shot ",
strMeasure2: "1 Shot ",
strMeasure3: "1/4 Shot",
strMeasure4: "1/8 Shot",
strMeasure5: null,
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2017-09-07 21:42:09"
},
{
idDrink: "13501",
strDrink: "ABC",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Shot",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Shot glass",
strInstructions: "Layered in a shot glass.",
strInstructionsES: null,
strInstructionsDE: "Schichtaufbau in einem Schnapsglas.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
strIngredient1: "Amaretto",
strIngredient2: "Baileys irish cream",
strIngredient3: "Cognac",
strIngredient4: null,
strIngredient5: null,
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "1/3 ",
strMeasure2: "1/3 ",
strMeasure3: "1/3 ",
strMeasure4: null,
strMeasure5: null,
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2016-08-31 19:32:08"
},
{
idDrink: "17225",
strDrink: "Ace",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Cocktail",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Martini Glass",
strInstructions: "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
strInstructionsES: null,
strInstructionsDE: "Alle Zutaten in einem Cocktailshaker mit Eis schütteln und dann in einem kalten Glas abseihen.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
strIngredient1: "Gin",
strIngredient2: "Grenadine",
strIngredient3: "Heavy cream",
strIngredient4: "Milk",
strIngredient5: "Egg White",
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "2 shots ",
strMeasure2: "1/2 shot ",
strMeasure3: "1/2 shot ",
strMeasure4: "1/2 shot",
strMeasure5: "1/2 Fresh",
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2017-09-07 22:05:06"
},
{
idDrink: "17837",
strDrink: "Adam",
strDrinkAlternate: null,
strDrinkES: "Adam",
strDrinkDE: "Adam",
strDrinkFR: "Adam",
strDrinkZH-HANS: "亚当",
strDrinkZH-HANT: "亞當",
strTags: "Alcoholic,Holiday",
strVideo: null,
strCategory: "Ordinary Drink",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Cocktail glass",
strInstructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
strInstructionsES: null,
strInstructionsDE: "In einem Shaker, der halb mit Eiswürfeln gefüllt ist, alle Zutaten vermengen. Gut schütteln. In ein Cocktailglas abseihen.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
strIngredient1: "Dark rum",
strIngredient2: "Lemon juice",
strIngredient3: "Grenadine",
strIngredient4: null,
strIngredient5: null,
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "2 oz ",
strMeasure2: "1 oz ",
strMeasure3: "1 tsp ",
strMeasure4: null,
strMeasure5: null,
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "Yes",
dateModified: "2016-09-02 11:29:29"
},
{
idDrink: "13938",
strDrink: "AT&T",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Ordinary Drink",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Highball Glass",
strInstructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
strInstructionsES: null,
strInstructionsDE: "Wodka und Gin über das Eis gießen, Tonic hinzufügen und umrühren.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
strIngredient1: "Absolut Vodka",
strIngredient2: "Gin",
strIngredient3: "Tonic water",
strIngredient4: null,
strIngredient5: null,
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "1 oz ",
strMeasure2: "1 oz ",
strMeasure3: "4 oz ",
strMeasure4: null,
strMeasure5: null,
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2017-04-24 22:00:19"
}
```

## Component Hierarchy

![Hierarchy](/proposal_imgs/IMG_0749.jpg)

Component | Description | State/Props
--------- | ----------- | -----------
App | This will make the initial API request and include React Router | State
Header/Nav | This will be the constant header displayed and have all the nav routes/links | Props
Home | This will contain the landing page with a welcome message and a randomized cocktail | Props
Search | This will contain all the search functionality and results | Props
Cocktail | This will be the display page for each individual cocktail with ingredients and instructions | Props