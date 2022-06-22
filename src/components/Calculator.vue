<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Nutrition Calculator</h1>
    </div>
  </div>
  <br />

  <form @submit.prevent="onSubmit">
    <!-- Sex -->
    <fieldset class="row mb-3" id="sex">
      <label>Sex</label>
      <select v-model="form.sex" class="form-select" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </fieldset>

    <!-- Weight -->
    <div class="row mb-3">
      <div class="col">
        <div class="col-sm-10 form-floating">
          <input
            v-model="form.weightLbs"
            type="number"
            class="form-control"
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
            class="form-control"
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
            class="form-control"
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
            class="form-control"
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
    <fieldset class="row mb-3" id="sex">
      <label>Activity Level</label>
      <select v-model="form.activity" class="form-select" required>
        <option value="sedentary">Sedentary (little to no exercise)</option>
        <option value="light">
          Lightly Active (light exercise 1-3 days/wk)
        </option>
        <option value="moderate">
          Moderately Active (moderate exercise 3-5 days/wk)
        </option>
        <option value="very">Very Active (hard exercise 6-7 days/wk)</option>
        <option value="extremely">
          Extremely Active (hard exercise & work in a physical job)
        </option>
      </select>
    </fieldset>
    <hr />

    <!-- Goal -->
    <fieldset class="row mb-3" id="sex">
      <label>Goal</label>
      <select v-model="form.goal" class="form-select" required>
        <option value="gain">Weight Gain</option>
        <option value="loss">Weight Loss</option>
      </select>
    </fieldset>
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
          class="form-range"
          min="0"
          max="10"
          step="1"
          id="range"
        />
      </div>
    </div>
    <hr />

    <!-- percentage of calories from protein, carbs, and fats with default  -->
    <div class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0" required>Macro(%)</legend>
      <div class="col">
        <div class="col-sm-10 form-floating">
          <input
            v-model="form.proteinPercent"
            type="number"
            class="form-control"
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
            class="form-control"
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
            class="form-control"
            id="fats"
            placeholder="Fats(%)"
            required
          />
          <label for="fats">Fats(%)</label>
        </div>
      </div>
    </div>
    <hr />

    <fieldset class="row mb-3">
      <label>How many meals do you eat per day?</label>
      <select v-model="form.meals" class="form-select" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </fieldset>

    <div class="col-md-12 text-center">
      <button type="submit" class="btn btn-primary text-center">
        Calculate
      </button>
    </div>
  </form>
  <br />
  <br />

  <h5 id="output1" class="text-start">{{ data.output.output1 }}</h5>
  <br />
  <h5 id="output2" class="text-start">{{ data.output.output2 }}</h5>
  <br />
  <h5 id="output3" class="text-start">{{ data.output.output3 }}</h5>
  <br />
  <br />

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Meal</th>
        <th scope="col">Protein</th>
        <th scope="col">Carbs</th>
        <th scope="col">Fats</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="meal in data.output.mealsArray">
        <td>{{ meal.mealNumber }}</td>
        <td>{{ meal.protein }}</td>
        <td>{{ meal.carbs }}</td>
        <td>{{ meal.fats }}</td>
      </tr>
    </tbody>
  </table>
  <br />
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { getUserData } from '@/CalcDiet/calculator'
import { getAllFoods } from '@/firebase'
import { async } from '@firebase/util'

export default {
  setup() {
    const form = reactive({
      sex: 'male',
      weightLbs: 165,
      age: 25,
      heightFt: 5,
      heightIn: 7,
      activity: 'moderate',
      goal: 'gain',
      rate: 5,
      proteinPercent: 34,
      carbsPercent: 33,
      fatsPercent: 33,
      meals: '6',
    })

    let data = reactive({
      output: '',
    })

    const onSubmit = () => {
      data.output = getUserData(form)
    }

    return { form, onSubmit, data }
  },
}
</script>
