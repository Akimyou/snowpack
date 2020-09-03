<script lang="tsx">
import {defineComponent, reactive} from 'vue';

interface State {
  name: string;
}

export default defineComponent({
  name: 'FooTsxVue',
  setup() {
    const state = reactive<State>({
      name: 'FooTsxVue',
    });

    return () => (
      <>
        <h2 className="foo-tsx-vue">{state.name}</h2>
      </>
    );
  },
});
</script>

<style lang="css">
/* unsupport scoped css in vue with tsx, jsx*/
.foo-tsx-vue {
  color: green;
}
</style>