<template>
    <h1>Projects</h1>
    <ul>
        <li v-for="project in projects" :key="project.id">
            <div class="project-content-wrapper">
                <router-link :to="`/projects/${project.id}`">{{ project.name }}</router-link>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </li>
        <router-view></router-view>
    </ul>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue';

    export default defineComponent({
        setup() {
            const projects = reactive([
                {
                    id: 1,
                    name: 'Project A',
                    title: 'Title A',
                    description: 'Description for Project A',
                    picture: 'path/to/pictureA.jpg',
                    colors: ['#FFF', '#000'],
                    tags: ['tag1', 'tag2']
                },
                {
                    id: 2,
                    name: 'Project B',
                    title: 'Title B',
                    description: 'Description for Project B',
                    picture: 'path/to/pictureB.jpg',
                    colors: ['#FFF', '#000'],
                    tags: ['tag1', 'tag2']
                }
            ]);

            return {
                projects
            };
        }
    });
</script>

<style lang="scss" scoped>

.project-content-wrapper {
    width: 100%;
    margin: 1rem auto;
}

</style>
