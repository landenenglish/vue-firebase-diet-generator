<template>
  <br />
  <div class="container">
    <h4>Your Diets</h4>

    <hr />
    <div
      class="table-responsive"
      v-for="{ id, meals, uid } in userDiets"
      :key="id"
    >
      <table class="table" v-if="uid === currentUserID">
        <thead>
          <tr>
            <th scope="col">Meal Number</th>
            <th scope="col">Generated Meal</th>
            <th scope="col">Protein</th>
            <th scope="col">Carbs</th>
            <th scope="col">Fats</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="deleteUserDiet(id)">
                Delete
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="meal in meals">
            <td>{{ meal.mealNumber }}</td>
            <td>{{ meal.generatedMeal }}</td>
            <td>{{ meal.protein }}</td>
            <td>{{ meal.carbs }}</td>
            <td>{{ meal.fats }}</td>
          </tr>
        </tbody>
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
