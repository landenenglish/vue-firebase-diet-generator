<template>
  <div id="wrapper" class="container border-light">
    <div class="card card-body bg-dark text-white mt-4 border-light">
      <h1>Food Database</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Food Name</label>
          <input
            v-model="form.name"
            class="form-control bg-dark text-white"
            required
          />
        </div>

        <!-- select measurement type dropdown -->
        <div class="form-group">
          <label>Serving Measurement Type</label>
          <select
            v-model="form.measurement"
            class="form-select bg-dark text-white"
            required
          >
            <option value="g">1 g</option>
            <option value="oz">1 oz</option>
            <option value="cup">1 cup</option>
            <option value="tbsp">1 tbsp</option>
            <option v-if="form.name !== ''" value="">1 {{ form.name }}</option>
          </select>
        </div>

        <!-- Protein Per Serving -->
        <div class="form-group">
          <label>Grams of Protein Per Serving</label>
          <input
            type="number"
            step="0.1"
            v-model="form.protein"
            class="form-control bg-dark text-white"
            required
          />
        </div>
        <!-- Carbs Per Serving -->
        <div class="form-group">
          <label>Grams of Carbs Per Serving</label>
          <input
            type="number"
            step="0.1"
            v-model="form.carbs"
            class="form-control bg-dark text-white"
            required
          />
        </div>
        <!-- Fat Per Serving -->
        <div class="form-group">
          <label>Grams of Fats Per Serving</label>
          <input
            type="number"
            step="0.1"
            v-model="form.fat"
            class="form-control bg-dark text-white"
            required
          />
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
      name: '',
      measurement: '',
      protein: '',
      carbs: '',
      fat: '',
    })

    const onSubmit = async () => {
      await createFood({ ...form })
      form.name = ''
      form.measurement = ''
      form.protein = ''
      form.carbs = ''
      form.fat = ''
    }

    return { form, onSubmit }
  },
}
</script>

<style>
#wrapper {
  margin: 0 auto;
  max-width: 600px;
}
</style>
