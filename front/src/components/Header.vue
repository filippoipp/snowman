<template>
  <div id="container">
    <div id="nav">
      <div class="avatar">
        <v-avatar color="indigo" size="56">
          <v-icon size="56">
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </div>
      <div class="signin-signup">
        <router-link :to="'/signin'">
          <p>Login</p>
        </router-link>
        <router-link :to="'/signup'">
          <button>Cadastre-se</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
#container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 42px;
  width: 100%;
}

#nav {
  width: 100%;
  height: 60px;
  padding: 10px 213px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 4px 25px 0 rgba(0,0,0,0.06);
}

.signin-signup {
  display: flex;
  align-items: center;
  p {
    margin-right: 20px;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
    color: #111236;
  }
  a {
    text-decoration: none;
  }
  button {
    width: 148px;
    height: 40px;
    background: #10159A;
    border-radius: 6px;
    color: #ffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 22px;
  }
}
</style>
