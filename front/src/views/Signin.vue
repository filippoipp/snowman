<template>
  <div class="form-container">
    <div class="signin-form">
      <img  class="logo" src="../assets/logo.png" alt="" />
      <div class="social-media">
        <img src="" alt="" />
        <p>Entrar com Facebook</p>
      </div>
      <div class="social-media">
        <img src="" alt="" />
        <p>Entrar com Google</p>
      </div>
      <v-form v-model="form.isValid">
        <div>
          <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="form.emailRules"
            required
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="form.password"
            :append-icon="form.show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="form.show ? 'text' : 'password'"
            label="Password"
            @click:append="form.show = !form.show"
            :rules="[(v) => !!v || 'Email is required']"
            required
          ></v-text-field>
        </div>
        <div class="button-space">
          <button class="enter" :disabled="!form.isValid" @click.prevent="formSubmit()">aaaaa</button>
        </div>
      </v-form>
      <div class="footer">
        <p>
          Não possui conta? Faça o seu
          <router-link to="/signup"><span>cadastro</span></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        show: false,
        isValid: true,
        emailRules: [
          (v) => !!v || "Email obrigatório.",
          (v) => /.+@.+/.test(v) || "E-mail precisa ser válido",
        ],
      },
    };
  },

  computed: {
    ...mapGetters(["currentUser", "processing", "loginError"]),
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.login({
        email: this.form.email,
        password: this.form.password,
      });
    },
  },
  watch: {
    currentUser(val) {
      if (val && val.token) {
        setTimeout(() => {
          this.$router.push('/feed');
        }, 200);
      }
    },

    loginError(val) {
      if (val != null) {
        this.alert = true
      }
    },
  },
};
</script>

<style lang="scss">
.form-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: url('../assets/signin-signup-background.png') no-repeat center;
  background-size: cover;
}
.signin-form {
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 25px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  .logo {
    align-self: center;
    width: 200px;
    margin-bottom: 20px;
  }
  .social-media {
    border: 1px solid #10159a;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 10px;
    color: #10159a;
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .v-messages__message {
    color: red;
  }
  .button-space {
    display: flex;
    justify-content: flex-end;
    .enter {
      width: 148px;
      height: 40px;
      background: #10159a;
      border-radius: 6px;
      color: #ffff;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 22px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  } 
  .footer {
    color: #111236 !important;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    p {
      font-weight: 400;
    }
    span {
      font-weight: bold;
      color: #111236 !important;
      cursor: pointer;
    }
  }
}
</style>
