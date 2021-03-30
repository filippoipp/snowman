<template>
  <div id="container">
    <div id="nav">
      <div class="avatar">
        <v-avatar color="indigo" size="56">
          <v-icon size="56"> mdi-account-circle </v-icon>
        </v-avatar>
        <p v-if="currentUser">Olá, <strong>{{ currentUser.name }}</strong></p>
      </div>
      <div class="signin-signup" v-if="!currentUser">
        <router-link :to="'/signin'">
          <p>Login</p>
        </router-link>
        <router-link :to="'/signup'">
          <button>Cadastre-se</button>
        </router-link>
      </div>
      <div class="search-logout" v-else>
        <div class="search">

        </div>
        <div @click.prevent="logout()">
          <p>Sair</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUser"]),
  },

  methods: {
    ...mapActions(["signOut"]),
		async logout() {
			await this.signOut()
			this.$router.push("/")
		},
  }
};
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
  box-shadow: 2px 4px 25px 0 rgba(0, 0, 0, 0.06);
}

.avatar {
  display: flex;
  align-items: center;
  p {
    color: #111236;
    font-size: 16px;
    line-height: 22px;
    }
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
    background: #10159a;
    border-radius: 6px;
    color: #ffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 22px;
  }
}

.search-logout {
  display: flex;
  align-items: center;

  p {
    color: #111236;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
