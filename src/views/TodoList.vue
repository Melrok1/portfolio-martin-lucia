<template>
    <div class="todo-list">
        <h2>Todo List</h2>

        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add new todo" />
        <button @click="addTodo">Add</button>

        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{todo}}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
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

<style lang="scss" scoped>

.todo-list {
    margin: 2rem 3rem;

    h2 {
        margin-bottom: 1rem;
    }

    ul {
        max-width: 400px;
        margin: 2rem auto 1rem;

        li {
            text-align: left;
        }
    }
}

</style>