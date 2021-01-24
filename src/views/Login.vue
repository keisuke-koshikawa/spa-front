<template>
  <div>
    <label for="email">
      Email
    </label>
    <input v-model="email" id="Email" type="text" placeholder="Email">
  </div>
  <div>
    <label for="password">
      Password
    </label>
    <input v-model="password" id="password" type="password" placeholder="******************">
  </div>
  <button @click="handleLogin()">
    Sign In
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { login } from '@/api/auth'

export default defineComponent({
  name: 'Home',
  setup () {
    const formData = reactive({
      email: '',
      password: ''
    })
    const handleLogin = () => {
      login(formData.email, formData.password)
        .then((data) => {
          console.log(data)
        })
    }

    return {
      ...toRefs(formData),
      handleLogin
    }
  }
})
</script>
