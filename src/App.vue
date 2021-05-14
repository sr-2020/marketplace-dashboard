<template>
  <div id="app" ref="rootOfApp">
    <status-bar></status-bar>
    <nav-bar></nav-bar>
    <alert></alert>
    <div class="content-wrapper" :class="{ blur: !navBarHidden }">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
@import 'assets/grid';

#app {
  min-height: 100vh;
  overflow-x: hidden;
}

.content-wrapper {
  padding-top: 8px;
  transition: filter 0.3s ease-in-out;

  &.blur {
    min-height: 100%;
    filter: blur(6px);
    pointer-events: none;
  }
}
</style>

<script lang="ts">
import StatusBar from '@/components/common/StatusBar.vue'
import NavBar from '@/components/common/NavBar.vue'
import Alert from '@/components/shared/Alert.vue'
import { Options, Vue } from 'vue-class-component'
import HttpAdapter from "@/utils/httpAdapter";
import { Specialisation } from "@/store/products/types";
import { RootMutations } from "@/store/mutations";
import { LifeStyle } from "@/store/types";
import { User } from "@/store/user/types";

@Options({
  components: {
    Alert,
    NavBar,
    StatusBar,
  },
})
export default class App extends Vue {
  mounted() {
    const storeSpecialisations = this.$store.state.specialisations
    const storeLifestyles = this.$store.state.lifestyles
    const storeUsers = this.$store.state.users

    if (storeSpecialisations.length === 0) {
      HttpAdapter.get<Specialisation[]>([
        'a-specialisations'
      ]).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_SPECIALISATIONS, data)
      )
    }

    if (storeLifestyles.length === 0) {
      HttpAdapter.get<LifeStyle[]>(['a-lifestyles']).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_LIFESTYLES, data)
      )
    }

    if (storeUsers.length === 0) {
      HttpAdapter.get<User[]>(['a-users']).subscribe(({ data }) =>
        this.$store.commit(RootMutations.SET_USERS, data)
      )
    }
  }
  get navBarHidden() {
    return this.$store.state.navbarState
  }
}
</script>
