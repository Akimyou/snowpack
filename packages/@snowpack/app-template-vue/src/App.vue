<template>
  <div class="app">
    <p>App</p>
    <p>{{ foo }}</p>
    <SubComponent></SubComponent>
  </div>
</template>

<script>
import SubComponent from './test-hmr/SubComponent.vue';
import foo from './test-hmr/foo';

export default {
  components: {
    SubComponent,
  },
  data() {
    return {
      foo,
    };
  },
};
</script>

<style>
.app {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  color: #fff;
  background-color: #999;
}
</style>
