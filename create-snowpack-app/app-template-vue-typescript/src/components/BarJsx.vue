<script lang="jsx">
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  name: 'BarJsxVue',
  setup() {
    const state = reactive({
      name: 'BarJsxVue',
    });

    return () => (
      <>
        <h2 className="bar-jsx-vue">{state.name}</h2>
      </>
    );
  },
});
</script>

<style lang="css">
/* unsupport scoped css in vue with tsx, jsx*/
.bar-jsx-vue {
  color: red;
}
</style>