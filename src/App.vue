<template>
  <div id="app">
    <h1 style="width:100%">
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
    </h1>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;

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
  padding-left: 5%;
  width: 100%;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: top;
  padding-top: 70px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>