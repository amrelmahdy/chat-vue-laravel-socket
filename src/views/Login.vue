<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { loginURl, userURl, getHeader } from './../config'
import { clientId, clientSecret } from './../env'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    login () {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.email,
        password: this.password,
        scope: ''
      }
      const authUser = {}
      axios.post(loginURl, postData).then(response => {
        if (response.status === 200) {
          authUser.access_token = response.data.access_token
          authUser.refresh_token = response.data.refresh_token
          // set items in local storage
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          axios.get(userURl, {headers: getHeader()}).then(response => {
            authUser.name = response.data.name
            authUser.email = response.data.email
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            // dispatch user store
            this.$store.dispatch('setUserObj', authUser)
            this.$router.push({name: 'dashboard'})
          })
        }
      })
    }
  },
  created () {}
}
</script>

<template>
    <div id="app">
        <div class="container">
            <div class="col-md-6 offset-md-3 login-form">
                <div class="card border-primary">
                    <div class="card-header">Login Page</div>
                    <div class="form">
                        <div class="card-body">
                            <form @submit.prevent="login()">
                                <fieldset>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email">
                                        <small id="emailHelp" class="form-text text-muted">
                                            We'll never share your email with anyone else.
                                        </small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input v-model="password" type="password" class="form-control"
                                               id="exampleInputPassword1" placeholder="Password">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import './../assets/css/bootstrap.css';

    .login-form {
        margin-top: 15%;
    }
</style>
