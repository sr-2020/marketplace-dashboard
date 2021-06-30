<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    item: null,
  },
})
export default class ListItem<T> extends Vue {
  item!: T
}
</script>
