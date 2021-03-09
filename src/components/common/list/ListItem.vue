<script lang="ts">
import { Options, Vue } from "vue-class-component/dist/vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({})
export default class ListItem<T> extends Vue {
  @Prop() item!: T;
}
</script>
