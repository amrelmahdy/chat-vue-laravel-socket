<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3 login-form">
        <div class="card border-primary">
          <div class="card-header">Login Page</div>
          <div class="form">
            <div class="card-body">
              <form>
                <fieldset>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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

<script>

import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  created () {
    axios.get('http://localhost:8000/api/test').then(response => {
      console.log(response.data)
    })
  }
}
</script>

<style>
  @import './assets/css/bootstrap.css';
  .login-form{
    margin-top: 15%;
  }
</style>
