<template>
  <div class="page">
    <mainHeader />
    <div>
      <form @submit.prevent="userLogin">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="login.password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';
// import axios from 'axios';
export default {
  name: 'Login',
  components: { mainHeader, mainFooter },
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        // let response = await this.$auth.loginWith('local', {
        //   data: this.login,
        // });
        let response = await this.$auth.loginWith('local', {
          data: this.login,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
