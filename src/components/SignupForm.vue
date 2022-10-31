<template>
  <form @submit.prevent="handleSubmit">
    <input type="name" required placeholder="name" v-model="name" > 
    <input type="email"  placeholder="email" v-model="email" > 
    <input type="password" required placeholder="password" v-model="password"> 
    <button> Sign up</button>
     </form>



</template>

<script>

import useSignup from '@/composable/useSignup'
import {ref} from 'vue'
export default {
  setup() {
    

    const { error, signup } = useSignup() 

    // refs
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async() => {
        await signup( email.value, password.value)
    }
    return { name, email, password, handleSubmit }
 }
}
</script>

<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: auto;
}
form button{
    margin: 20px 20px 20px  ;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label{
  display: block;
  margin: 20px 0px 10px
}
.welcome input {
  width: 100%;
  padding: 10px;
  border: 1 solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto ;
}


</style>