<template>
    <div id="app">
        <h1>{{ name }}</h1>
        <Test></Test>
        <button @click="show"></button>
    </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
    components: {
        Test
    },
    data() {
        return {
            name: 'Samura'
        }
    },
    methods: {
        show() { console.log('button show') }
    }
}
</script>

<style lang="scss">
  h1 {
      color:#0af;

      &::after {
          content: 'Test After'
      }
  }
</style>