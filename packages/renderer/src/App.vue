<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

import renderNodejsApi from './samples/nodejs-api'
import renderSerialport from './samples/serialport'
import renderSqlite3 from './samples/sqlite3'
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
window.removeLoading()

</script>

<template>
  <div class="logo-box">
    <img
      height="124"
      alt="logo"
      src="./assets/logo.svg"
    >
    <div>{{ renderNodejsApi() }}</div>
    <div>{{ renderSerialport() }}</div>
    <div>{{ renderSqlite3() }}</div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  line-height: 1.4;
  background: linear-gradient(140deg, transparent, #6bd1fe, #bd34fe);
}

body,
div,
span,
img,
code {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-box {
  width: 100%;
  margin-top: 14px;
}
</style>
