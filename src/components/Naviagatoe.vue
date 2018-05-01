<script>
import { mapState } from 'vuex'
export default{
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    logout () {
      // dispatch logout action
      this.$store.dispatch('removeUserObj')
      window.localStorage.removeItem('authUser')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end" v-if="userStore.authUser != null && userStore.authUser.access_token">
       <div class="container">
           <router-link  class="navbar-brand" to="/dashboard">CHAT io</router-link>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav">
                   <li class="nav-item">
                       <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                   </li>
                   <li class="nav-item">
                       <router-link class="nav-link" to="/chat">Chat</router-link>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Messages</a>
                   </li>
                   <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Dropdown
                       </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                           <a class="dropdown-item" href="#">Action</a>
                           <a class="dropdown-item" href="#">Another action</a>
                           <div class="dropdown-divider"></div>
                           <a class="dropdown-item" href="#">Something else here</a>
                       </div>
                   </li>
               </ul>
               <ul class="navbar-nav ml-auto">
                   <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-menu-right" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           welcome {{ userStore.authUser.name }}
                       </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdown-menu-right">
                           <a class="dropdown-item" href="#">profile</a>
                           <div class="dropdown-divider"></div>
                           <a class="dropdown-item" @click.prevent="logout()" href="#">logout</a>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
    </nav>
</template>

<style>
    @import './../assets/css/bootstrap.css';
</style>
