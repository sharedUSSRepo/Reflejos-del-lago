<template>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <Button @click="sendLogin">send info</Button>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import axios from 'axios';
const username = ref('');
const password = ref('');

let sendLogin = function () {
  axios.put('http://localhost:3000/users/register', { username: username.value, password: password.value })
    .then(response => {
      console.log('Type updated successfully:', response.data);
    });
}
</script>