<template>
  <FoodCreate />
  <FoodList />
</template>

<script>
import FoodCreate from '@/components/FoodCreate.vue'
import FoodList from '@/components/FoodList.vue'

export default {
  name: 'Home',
  components: { FoodCreate, FoodList },
}
</script>
