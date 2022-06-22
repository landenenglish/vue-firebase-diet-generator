<template>
  <FoodCreate />
  <FoodList />
  <Calculator />
</template>

<script>
import FoodCreate from '@/components/FoodCreate.vue'
import FoodList from '@/components/FoodList.vue'
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'Home',
  components: { FoodCreate, FoodList, Calculator },
}
</script>
