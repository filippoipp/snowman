<template>
  <div id="container">
    <div id="nav">
      <div class="avatar">
        <v-avatar color="indigo" size="56">
          <v-icon size="56"> mdi-account-circle </v-icon>
        </v-avatar>
        <p v-if="currentUser">Olá, <router-link to="/feed"><strong>{{ currentUser.name }}</strong></router-link></p>
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
          <input type="text" placeholder="Pesquisar..." v-model="name">
          <button @click.prevent="searchByName()">Ok</button>
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
  data() {
    return {
      name: null
    };
  },

  computed: {
    ...mapGetters(["currentUser", "search"]),
  },

  methods: {
    ...mapActions(["signOut", "searchUsers"]),
		async logout() {
			await this.signOut()
			this.$router.push("/")
		},
    searchByName() {
      this.searchUsers(this.name)
      this.$router.push("/search")
    }
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
    a {
      text-decoration: none;
      color: #111236;
    }
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
  
  .search {
    margin-right: 30px;
    input {
      height: 41px;
      width: 226px;
      border: 1px solid #DCDCDC;
      border-radius: 4px;
      padding-left: 10px;
      margin-right: 5px;
    }
    button {
      background: #10159a;
      width: 50px;
      height: 40px;
      border-radius: 6px;
      color: #ffff;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 22px;
    }
  }


  p {
    color: #111236;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
