<template>
  <div id="app">
    <router-link to="/" custom v-slot="{ navigate }">
      <h2 is="sui-header" id="appheader" @click="navigate">
        <sui-grid :columns="1">
          <sui-grid-row>
            <div @click="navigate" id="logo" style="height: 100%">
              <sui-image
                style="height: 50px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
              />
            </div>
            EGCI427 Lab Quiz
          </sui-grid-row>
        </sui-grid>
      </h2>
    </router-link>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  height: 20px;
}
#appheader {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  align-content: left;
  /* color: #ffffff; */
  background-color: rgb(226, 226, 226);
  padding: 10px;
  padding-left: 20px;
}



#nav a.router-link-exact-active {
  color: #42b983;
}
</style>