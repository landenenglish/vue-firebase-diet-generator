// algorith to generate a meal

export const generateMeal = (protein, carbs, fat, foods) => {
  for (let i = 0; i < foods.length; i++) {
    foods[i].protein = parseInt(foods[i].protein)
    foods[i].carbs = parseInt(foods[i].carbs)
    foods[i].fat = parseInt(foods[i].fat)
    foods[i].size = 1
  }

  let meal = ''
  let proteinLeft = protein
  let carbsLeft = carbs
  let fatLeft = fat

  foods = foods.sort(() => Math.random() - 0.5)

  foods.forEach((food) => {
    let amountOfFoodUsed = 0
    let decimalServingSize = food.size / 5
    let decimalProteinPerServing = food.protein / 5
    let decimalCarbsPerServing = food.carbs / 5
    let decimalFatPerServing = food.fat / 5

    while (
      decimalProteinPerServing <= proteinLeft &&
      decimalCarbsPerServing <= carbsLeft &&
      decimalFatPerServing <= fatLeft
    ) {
      amountOfFoodUsed += decimalServingSize
      proteinLeft -= decimalProteinPerServing
      carbsLeft -= decimalCarbsPerServing
      fatLeft -= decimalFatPerServing
    }

    amountOfFoodUsed = amountOfFoodUsed.toFixed(1)

    if (amountOfFoodUsed > 0 && amountOfFoodUsed > 0.25) {
      meal += `${amountOfFoodUsed} ${food.measurement} of ${food.name}, `
    }
  })

  meal = meal.slice(0, -2)

  return meal
}
