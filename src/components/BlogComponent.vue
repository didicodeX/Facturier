<template>
  <div :style="{ fontSize: props.fontSize + 'px' }">
    <h2>Un titre d'article</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aut temporibus quos ullam
      assumenda! Veniam inventore suscipit nostrum quod! Sit quas quod distinctio laboriosam, sequi
      doloribus sint quo voluptatum quae?
    </p>
    <button
      @click="emit('smaller', props.fontSize)"
      class="text-blue-500 rounded w-36 border-blue-400 border-2"
    >
      smaller
    </button>
    <button
      @click="emit('bigger', props.fontSize)"
      class="text-blue-500 rounded w-36 border-blue-400 border-2"
    >
      bigger
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  fontSize: number
}>()

const emit = defineEmits({
  bigger: (fontSize: number) => {
    return fontSize
  },
  smaller(fontSize: number) {
    return fontSize
  },
}) // on recupere l'evenement bigger
</script>

<style scoped lang="scss"></style>
