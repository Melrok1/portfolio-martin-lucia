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

<style lang="scss">
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #4f94d8;
        background: #292929;
        min-height: 100vh;
    }
</style>
