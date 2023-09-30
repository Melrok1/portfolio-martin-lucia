<template>
    <h1>Project Detail</h1>
    <h3>{{ id }}</h3>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
    props: ['id'],
    setup(props) {
        const { id } = toRefs(props);

        return {
            projectId: id
        }
    },
})
</script>
