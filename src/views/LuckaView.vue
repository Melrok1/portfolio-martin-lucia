<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Tarffffffa')">Change name</button>
    <button @click="changeAge(250000)">Change age</button>
  </div>
</template> 


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LuckaView",
  components: {},
 setup() {
  const name = ref('Link')
  const age = ref<number | string>(35)

  return {name, age}
 },

  methods: {
    changeName(name: string) {
      this.name = name
      return name
    },

    changeAge(age: string | number) {
      this.age = age
      return age
    },
  },
});
</script>


<style lang="sass" scoped>
</style>