<template>
  <br />
  <div class="container bg-dark text-white">
    <h4>Your Diets</h4>

    <hr />
    <div v-for="{ id, meals, uid } in userDiets" :key="id">
      <table
        class="table table-striped table-dark mb-0 table-responsive"
        v-if="uid === currentUserID"
      >
        <thead>
          <tr>
            <th scope="col">
              <button class="btn btn-danger btn-sm" @click="deleteUserDiet(id)">
                Delete Diet
              </button>
            </th>
          </tr>
        </thead>
        <tbody v-for="meal in meals">
          <tr>
            <td>Meal {{ meal.mealNumber }}:</td>
            <td>{{ meal.protein }}g Protein</td>
            <td>{{ meal.carbs }}g Carbs</td>
            <td>{{ meal.fats }}g Fats</td>
            <td></td>
          </tr>
          <tr id="generated">
            <td colspan="4">Generated Meal: {{ meal.generatedMeal }}</td>
          </tr>
        </tbody>
        <br />
        <hr />
      </table>
    </div>
  </div>
</template>

<script>
import { loadUserDiets, deleteUserDiet } from '@/firebase'
import { getAuth } from '@firebase/auth'

export default {
  setup() {
    const currentUser = getAuth()
    const currentUserID = currentUser.currentUser.uid

    const userDiets = loadUserDiets()
    return { userDiets, currentUserID, deleteUserDiet }
  },
}
</script>
