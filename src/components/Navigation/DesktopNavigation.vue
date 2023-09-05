<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/lucka">Lucka</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: linear-gradient(145deg, #1c1c1e, #0a0a0a);
  border-radius: 0 0 0.75rem 0.75rem;
  box-shadow: 10px 10px 20px #181818, -10px -10px 20px #2d2d2d;
  padding: 10px 20px;
  display: inline-block;
  width: 100%;

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 5px 10px;
    position: relative;

    &:hover {
      color: #aaaaaa;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, transparent, #ffffff, transparent);
      opacity: 0.5;
      transform: translateY(-50%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, transparent, #ffffff, transparent);
      opacity: 0.5;
      transform: translateY(50%);
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>