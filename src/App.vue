<template>
    <DesktopNavigation />
    <router-view />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import DesktopNavigation from './components/Navigation/DesktopNavigation.vue';

    export default defineComponent({
        components: {
            DesktopNavigation
        }
        // setup() {

        // },
    });
</script>