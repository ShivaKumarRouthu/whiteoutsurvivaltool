<template>
  <div>
    <h1>March Calculator</h1>
    <div>
      <div>
        <div v-for="march in marches" :key="march.name">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="march.name" />
          <input type="number" id="marchtime" v-model="march.marchtime" />
          <input type="number" id="gap" v-model="march.gap" />
        </div>
        <button @click="calculate">Calculate</button>
      </div>
    </div>
    <div class="results">
      <div v-for="march in marches" :key="march.name">
        <p>{{ march.name }}</p>
        <p>{{ march.position }}</p>
        <p>{{ march.rallyTime }}</p>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useMarchCalculator } from '@/Composables/marchCalculator'

const { marches, calculate } = useMarchCalculator()


</script>
