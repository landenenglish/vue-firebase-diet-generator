let userData = {}
let output1 = ''
let output2 = ''
let output3 = ''
let output4 = ''

export const getUserData = (userInput) => {
  // set user data object to user input
  userData = userInput

  let sex = userData.sex
  let kg = weight()
  let age = userData.age
  let cm = height()
  let activity = userData.activity
  let goal = userData.goal
  let rate = userData.rate * 100
  let protein = userData.proteinPercent
  let carbs = userData.carbsPercent
  let fats = userData.fatsPercent
  let meals = parseInt(userData.meals)

  // alert if protein, carbs, and fats do not equal 100
  if (protein + carbs + fats != 100) {
    window.alert('Protein, carbs, and fats must add up to 100%')
  } else {
    //calculate
    return mifflin(
      sex,
      kg,
      age,
      cm,
      activity,
      goal,
      rate,
      protein,
      carbs,
      fats,
      meals
    )
    // scroll to bottom of page
    // window.scrollTo(0, document.body.scrollHeight)
  }
}

//calculate BMR from inputs with Mifflin St Jeor Equation
function mifflin(
  sex,
  kg,
  age,
  cm,
  activity,
  goal,
  rate,
  protein,
  carbs,
  fats,
  meals
) {
  let BMR = 0
  let factor = 0
  let TDEE = 0
  protein = protein * 0.01
  carbs = carbs * 0.01
  fats = fats * 0.01

  if (sex == 'male') {
    BMR = 10 * kg + 6.25 * cm - 5 * age + 5
  } else {
    BMR = 10 * kg + 6.25 * cm - 5 * age - 161
  }

  switch (activity) {
    case 'sedentary':
      factor = 1.2
      break
    case 'light':
      factor = 1.375
      break
    case 'moderate':
      factor = 1.55
      break
    case 'very':
      factor = 1.725
      break
    case 'extremely':
      factor = 1.9
      break
  }

  // total daily energy expendature equals BMR * activity factor
  TDEE = BMR * factor
  // round
  TDEE = Math.round(TDEE)
  // display
  return display(TDEE, goal, rate, protein, carbs, fats, meals)
}

//return data to display
function display(TDEE, goal, rate, protein, carbs, fats, meals) {
  // return data to display in display component

  output1 = `Your total daily energy expenditure is ${TDEE} calories (maintenance).`

  if (goal == 'gain') {
    let gainRate = TDEE + rate

    protein = Math.round((gainRate * protein) / 4)
    carbs = Math.round((gainRate * carbs) / 4)
    fats = Math.round((gainRate * fats) / 9)

    let caloriesPerMeal = Math.round(gainRate / meals)
    let proteinPerMeal = Math.round(protein / meals)
    let carbsPerMeal = Math.round(carbs / meals)
    let fatsPerMeal = Math.round(fats / meals)

    output2 = `Eat ${gainRate} calories per day or ${caloriesPerMeal} calories per meal to gain about ${
      (rate * 7) / 3500
    }lbs per week.`
    output3 = `Macros: ${protein}g protein, ${carbs}g carbs, ${fats}g fats per day or ${proteinPerMeal}g protein, ${carbsPerMeal}g carbs, ${fatsPerMeal}g fats per meal.`

    // create an object with one meal for each meal and protein, carbs, and fats the same for each meal
    let mealsArray = []
    for (let i = 0; i < meals; i++) {
      mealsArray.push({
        mealNumber: i + 1,
        protein: proteinPerMeal,
        carbs: carbsPerMeal,
        fats: fatsPerMeal,
      })
    }

    return {
      output1,
      output2,
      output3,
      mealsArray,
    }
  } else {
    let lossRate = TDEE - rate

    protein = Math.round((lossRate * protein) / 4)
    carbs = Math.round((lossRate * carbs) / 4)
    fats = Math.round((lossRate * fats) / 9)

    let caloriesPerMeal = Math.round(lossRate / meals)
    let proteinPerMeal = Math.round(protein / meals)
    let carbsPerMeal = Math.round(carbs / meals)
    let fatsPerMeal = Math.round(fats / meals)

    output2 = `Eat ${lossRate} calories per day or ${caloriesPerMeal} per meal to lose about ${
      (rate * 7) / 3500
    }lbs per week.`
    output3 = `Macros: ${protein}g protein, ${carbs}g carbs, ${fats}g fats per day or ${proteinPerMeal}g protein, ${carbsPerMeal}g carbs, ${fatsPerMeal}g fats per meal.`

    let mealsArray = []
    for (let i = 0; i < meals; i++) {
      mealsArray.push({
        mealNumber: i + 1,
        protein: proteinPerMeal,
        carbs: carbsPerMeal,
        fats: fatsPerMeal,
      })
    }

    return {
      output1,
      output2,
      output3,
      mealsArray,
    }
  }
}

//convert lbs to kg
function weight() {
  let lbs = userData.weightLbs
  let kg = lbs / 2.20462
  return kg
}

function height() {
  //calculate total inches
  let feet = userData.heightFt
  let inches = userData.heightIn
  let totalInches = feet * 12 + inches
  //convert to cm
  let totalCm = totalInches * 2.54
  return totalCm
}
