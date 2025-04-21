import type { March } from '@/types'
import { ref } from 'vue'

export const useMarchCalculator = () => {
  const marches = ref<March[]>([
    {
      name: 'Chief',
      marchtime: 60,
      gap: 1,
      rallyTime: 0,
      position: 0,
    },
    {
      name: 'Lieutenant',
      marchtime: 120,
      gap: 1,
      rallyTime: 0,
      position: 0,
    },
    {
      name: 'Sergeant',
      marchtime: 100,
      gap: 1,
      rallyTime: 0,
      position: 0,
    },
  ])

  const calculate = () => {
    marches.value.sort((a, b) => b.marchtime - a.marchtime)
    const longestRallyTime = marches.value[0].marchtime

    marches.value.forEach((march, index) => {
      march.position = index + 1
      march.rallyTime = longestRallyTime - march.marchtime + march.gap
    })
  }

  return {
    marches,
    calculate,
  }
}
