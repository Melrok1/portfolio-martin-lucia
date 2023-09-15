<template>
    <div class="todo-list">
        <h2>Todo List</h2>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{todo}}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>

        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add new todo" />
        <button @click="addTodo">Add</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
   name: "TodoList",
   setup() {
    const todos = ref<string[]>([]);
    const newTodo = ref<string>("");

    const addTodo = function() {
        if (newTodo.value.trim() !=="") {
            todos.value.push(newTodo.value);
            newTodo.value = "";
        }
    };

    const removeTodo = (index: number) => {
        todos.value.splice(index, 1);
    };
    
    return {
        todos,
        newTodo,
        addTodo,
        removeTodo,
    };
   },
});
</script>

<style lang="sass" scoped>
    
</style>