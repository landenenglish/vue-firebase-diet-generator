<template>
  <br />
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Serving Type</th>
          <th scope="col">Serving Size</th>
          <th scope="col">Protein</th>
          <th scope="col">Carbs</th>
          <th scope="col">Fats</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ id, name, measurement, size, protein, carbs, fat } in foods"
          :key="id"
        >
          <td>{{ name }}</td>
          <td>{{ measurement }}</td>
          <td>{{ size }}</td>
          <td>{{ protein }}</td>
          <td>{{ carbs }}</td>
          <td>{{ fat }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteFood(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { deleteFood, loadFoods } from '@/firebase'

export default {
  setup() {
    const foods = loadFoods()

    return { foods, deleteFood }
  },
}
</script>
