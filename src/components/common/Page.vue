<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Page extends Vue {
  editMode = false;

  mounted() {
    this.editMode = !!this.$route.meta?.add;
  }
}
</script>

<style scoped></style>
