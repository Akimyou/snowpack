<template>
  <div :class="styles['sub-component']">
    <p>Sub Component</p>
    <p>{{ foo }}</p>
    <p>{{ bar }}</p>
    <p>{{ baz }}</p>
    <p>{{ styles }}</p>
  </div>
</template>

<script>
import foo from './foo';
import bar from './bar';
import baz from './baz.json';
import styles from './styles.module.css';

export default {
  data() {
    return {
      foo,
      bar,
      baz,
      styles,
    };
  },
};
</script>
