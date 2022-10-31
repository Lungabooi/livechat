<template>
  <div class="welcome container">
   <p>Sign up</p>
   <SignupForm />
   <!-- <LoginForm /> -->
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';


export default {
  components: {
    SignupForm,
    LoginForm,
  }
}
</script>
<style scoped>
.welcome {
  text-align: center;
  padding: 20px 0;

}
.welcome form {
  width: 300px;
  margin: 20px auto;
}


</style>
