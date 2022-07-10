<template>
  <div id="edit" class="card card-body mt-4 bg-dark text-white border-light">
    <h3>Edit Food</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
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
          <option value="">1 {{ form.name }}</option>
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

      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFood, updateFood } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const foodId = computed(() => route.params.id)

    const form = reactive({
      name: '',
      measurement: '',
      size: '',
      protein: '',
      carbs: '',
      fat: '',
    })

    onMounted(async () => {
      const food = await getFood(foodId.value)
      form.name = food.name
      form.measurement = food.measurement
      form.protein = food.protein
      form.carbs = food.carbs
      form.fat = food.fat
    })

    const update = async () => {
      await updateFood(foodId.value, { ...form })
      router.push('/')
      form.name = ''
      form.measurement = ''
      form.protein = ''
      form.carbs = ''
      form.fat = ''
    }

    return { form, update }
  },
}
</script>

<style>
#edit {
  margin: 0 auto;
  max-width: 500px;
}
</style>
