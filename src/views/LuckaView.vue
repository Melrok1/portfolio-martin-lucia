<template>

  <div class="app">
    <div class="change">
      <p>{{ name }} - {{ age }}</p>
      <button @click="changeName('Tarffffffa')">Change name</button>
      <button @click="changeAge(250000)">Change age</button>
    </div>

    <TodoList/>
  </div>
</template> 


<script lang="ts">

import { defineComponent, ref } from "vue";
import TodoList from "./TodoList.vue";

export default defineComponent({
  name: "LuckaView",
  components: {
    TodoList,
  },
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

        return { name, age };
    },

    methods: {
        changeName(name: string) {
            this.name = name;
            return name;
        },

        changeAge(age: string | number) {
            this.age = age;
            return age;
        }
    }
});
</script>


<style lang="scss" scoped>
</style>