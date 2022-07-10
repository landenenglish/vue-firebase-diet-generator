<!-- I understand this file is large and should be broken up into smaller components, I will improve it over time as I learn more Vue -->

<template>
  <div class="container bg-dark text-white">
    <div
      id="calcWrapper"
      class="card card-body mt-4 bg-dark text-white border-light"
    >
      <div class="row bg-dark text-white">
        <div class="col-12">
          <h1 class="text-center">Nutrition Calculator</h1>
          <h5>(pre-filled to test quickly)</h5>
        </div>
      </div>
      <br />

      <form @submit.prevent="onSubmit">
        <!-- Sex -->
        <div class="form-group">
          <label>Sex</label>
          <select
            v-model="form.sex"
            class="form-select bg-dark text-white"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <br />

        <!-- Weight -->
        <div class="row mb-3">
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.weightLbs"
                type="number"
                class="form-control bg-dark text-white"
                id="weight"
                placeholder="Weight(lbs)"
                required
              />
              <label for="weight">Weight(lbs)</label>
            </div>
          </div>

          <!-- Age -->
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.age"
                type="number"
                class="form-control bg-dark text-white"
                id="age"
                placeholder="Age(years)"
                required
              />
              <label for="age">Age(years)</label>
            </div>
          </div>
        </div>
        <hr />

        <!-- Height -->
        <!-- Feet -->
        <div class="row mb-3">
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.heightFt"
                type="number"
                class="form-control bg-dark text-white"
                id="feet"
                placeholder="Height(ft)"
                required
              />
              <label for="feet">Height(feet)</label>
            </div>
          </div>

          <!-- inches -->
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.heightIn"
                type="number"
                class="form-control bg-dark text-white"
                id="inches"
                placeholder="Inches"
                required
              />
              <label for="age">Height(inches)</label>
            </div>
          </div>
        </div>
        <hr />

        <!-- Activity Level -->
        <div class="form-group">
          <label>Activity Level</label>
          <select
            v-model="form.activity"
            class="form-select bg-dark text-white"
            required
          >
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">
              Lightly Active (light exercise 1-3 days/wk)
            </option>
            <option value="moderate">
              Moderately Active (moderate exercise 3-5 days/wk)
            </option>
            <option value="very">
              Very Active (hard exercise 6-7 days/wk)
            </option>
            <option value="extremely">
              Extremely Active (hard exercise & work in a physical job)
            </option>
          </select>
        </div>
        <hr />

        <!-- Goal -->
        <div class="form-group">
          <label>Goal</label>
          <select
            v-model="form.goal"
            class="form-select bg-dark text-white"
            required
          >
            <option value="gain">Weight Gain</option>
            <option value="loss">Weight Loss</option>
          </select>
        </div>
        <hr />

        <!-- Rate -->
        <p class="text-center" id="sliderOutput">
          About {{ (form.rate * 7) / 35 }} lb of weight change per week
        </p>
        <div class="row mb-3">
          <label for="range" class="col-sm-2 col-form-label">Rate</label>
          <div class="col-sm-10">
            <input
              v-model="form.rate"
              type="range"
              class="form-range bg-dark text-white"
              min="0"
              max="10"
              step="1"
              id="range"
            />
          </div>
        </div>
        <hr />

        <!-- percentage of calories from protein, carbs, and fats-->
        <div class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0" required>
            Macro(%)
          </legend>
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.proteinPercent"
                type="number"
                class="form-control bg-dark text-white"
                id="protein"
                placeholder="Protein(%)"
                required
              />
              <label for="protein">Protein(%)</label>
            </div>
          </div>
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.carbsPercent"
                type="number"
                class="form-control bg-dark text-white"
                id="carbs"
                placeholder="Carbs(%)"
                required
              />
              <label for="carbs">Carbs(%)</label>
            </div>
          </div>
          <div class="col">
            <div class="col-sm-10 form-floating">
              <input
                v-model="form.fatsPercent"
                type="number"
                class="form-control bg-dark text-white"
                id="fats"
                placeholder="Fats(%)"
                required
              />
              <label for="fats">Fats(%)</label>
            </div>
          </div>
        </div>
        <hr />

        <!-- Number of meals -->
        <div class="form-group">
          <label>How many meals do you eat per day?</label>
          <select
            v-model="form.meals"
            class="form-select bg-dark text-white"
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <br />

        <!-- Submit -->
        <div class="col-md-12 text-center">
          <button
            type="submit"
            class="btn btn-primary text-center"
            @click="scrollToElement"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
    <br />

    <!-- Results -->
    <div v-if="data.submitted === true" class="bg-dark text-white">
      <h5 id="output1" class="text-start bg-dark text-white">
        {{ data.output.output1 }}
      </h5>

      <h5 id="output2" class="text-start">{{ data.output.output2 }}</h5>

      <h5 id="output3" class="text-start">{{ data.output.output3 }}</h5>
      <br />
    </div>

    <table class="table table-striped table-dark mb-0 table-responsive">
      <tbody v-for="meal in data.output.mealsArray">
        <tr>
          <td>Meal {{ meal.mealNumber }}:</td>
          <td>{{ meal.protein }}g Protein</td>
          <td>{{ meal.carbs }}g Carbs</td>
          <td>{{ meal.fats }}g Fats</td>
          <td></td>
        </tr>
        <tr id="generated">
          <td colspan="4">
            {{ meal.generatedMeal }}
          </td>
          <td>
            <!-- Regenerate -->
            <button
              class="btn btn-danger btn-sm"
              @click="reGenerateSingleMeal(meal.mealNumber - 1)"
            >
              Regenerate
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />

    <!-- Save -->
    <button
      v-if="data.submitted === true"
      class="btn btn-success w-100"
      @click="saveDiet()"
    >
      Save Diet
    </button>
    <br />
    <br />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { getUserData } from '@/CalcDiet/calculator.js'
import { generateMeal } from '@/CalcDiet/generateMeals.js'
import { getAllFoods, createUserDiet } from '@/firebase'
import { getAuth } from 'firebase/auth'

export default {
  methods: {
    scrollToElement() {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight - 200,
          behavior: 'smooth',
        })
      }, 250)
    },
  },
  setup() {
    // Kinda messy, but it works.
    const form = reactive({
      sex: '',
      weightLbs: '',
      age: '',
      heightFt: '',
      heightIn: '',
      activity: '',
      goal: '',
      rate: 5,
      proteinPercent: 30,
      carbsPercent: 40,
      fatsPercent: 30,
      meals: '',
    })

    let data = reactive({
      output: '',
      submitted: false,
    })

    const onSubmit = async () => {
      data.submitted = true
      data.output = getUserData(form)

      const foodsArray = []
      const foods = await getAllFoods()
      foods.forEach((food) => {
        foodsArray.push(food)
      })

      const mealsArray = []
      data.output.mealsArray.forEach((meal) => {
        mealsArray.push(meal)
      })
      const generatedMeals = []
      for (let i = 0; i < mealsArray.length; i++) {
        const meal = generateMeal(
          mealsArray[i].protein,
          mealsArray[i].carbs,
          mealsArray[i].fats,
          foodsArray
        )
        generatedMeals.push(meal)
      }

      for (let i = 0; i < generatedMeals.length; i++) {
        data.output.mealsArray[i].generatedMeal = generatedMeals[i]
      }
    }

    // Regenerate meal from list
    const reGenerateSingleMeal = async (mealNumber) => {
      const foodsArray = []
      const foods = await getAllFoods()
      foods.forEach((food) => {
        foodsArray.push(food)
      })
      const meal = generateMeal(
        data.output.mealsArray[mealNumber].protein,
        data.output.mealsArray[mealNumber].carbs,
        data.output.mealsArray[mealNumber].fats,
        foodsArray
      )
      data.output.mealsArray[mealNumber].generatedMeal = meal
    }

    // Save diet to database
    const saveDiet = () => {
      const currentUser = getAuth()

      if (currentUser.currentUser === null) {
        alert('You must be logged in to save your diet')
      } else {
        const currentUserID = currentUser.currentUser.uid
        let userDataObject = {
          uid: '',
          meals: {},
        }
        userDataObject.uid = currentUserID
        userDataObject.meals = data.output.mealsArray
        createUserDiet(userDataObject)
        alert('Diet saved. You can view your diets in the Your Diets tab.')
      }
    }

    return { form, onSubmit, data, reGenerateSingleMeal, saveDiet }

    // would be cool to save the user's form too
  },
}
</script>
<style>
#calcWrapper {
  margin: 0 auto;
  max-width: 600px;
}

#generated {
  font-weight: bold;
}
</style>
