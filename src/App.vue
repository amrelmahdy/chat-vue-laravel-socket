<script>
import Navigator from './components/Naviagatoe.vue'
import { mapState } from 'vuex'
export default {
  components: { Navigator },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  created () {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setUserObj', authUser)
  }
}
</script>

<template>
  <div>
    <navigator></navigator>
    <router-view></router-view>
  </div>
</template>

<style>
  .login-form{
    margin-top: 15%;
  }
</style>
