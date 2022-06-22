<template>
  <div class="container">
    <div class="card card-body mt-4">
      <h1>Food Database</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Food Name</label>
          <input v-model="form.name" class="form-control" required />
        </div>

        <!-- select measurement type dropdown -->
        <div class="form-group">
          <label>Serving Measurement Type</label>
          <select v-model="form.measurement" class="form-select" required>
            <option value="g">g</option>
            <option value="oz">oz</option>
            <option value="cup">cup</option>
          </select>
        </div>
        <!-- serving Size -->
        <!-- Update Lable to selected measurment -->
        <div class="form-group">
          <label>Serving Size ({{ form.measurement }})</label>
          <input v-model="form.size" class="form-control" required />
        </div>
        <!-- Protein Per Serving -->
        <div class="form-group">
          <label>Grams of Protein Per Serving</label>
          <input v-model="form.protein" class="form-control" required />
        </div>
        <!-- Carbs Per Serving -->
        <div class="form-group">
          <label>Grams of Carbs Per Serving</label>
          <input v-model="form.carbs" class="form-control" required />
        </div>
        <!-- Fat Per Serving -->
        <div class="form-group">
          <label>Grams of Fats Per Serving</label>
          <input v-model="form.fat" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-success mt-3">Add Food</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createFood } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({
      name: 'Chicken Breast',
      measurement: 'oz',
      size: '1',
      protein: '7',
      carbs: '0',
      fat: '0',
    })

    const onSubmit = async () => {
      await createFood({ ...form })
      form.name = ''
      form.measurement = ''
      form.size = ''
      form.protein = ''
      form.carbs = ''
      form.fat = ''
    }

    return { form, onSubmit }
  },
}
</script>
