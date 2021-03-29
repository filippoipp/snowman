<template>
  <div class="form-container">
    <div class="signup-form">
      <h3>Cadastro</h3>
      <v-form v-model="form.isValid">
        <div>
          <v-text-field
            v-model="form.name"
            label="Nome"
            :rules="[(v) => !!v || 'Nome é obrigatória']"
            required
            placeholder="Seu nome"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="form.emailRules"
            placeholder="email@exemplo.com.br"
            required
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="form.password"
            :append-icon="form.show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="form.show ? 'text' : 'password'"
            label="Senha"
            @click:append="form.show = !form.show"
            :rules="[(v) => !!v || 'Senha é obrigatória']"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password_confirm"
            :append-icon="form.show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="form.show ? 'text' : 'password'"
            label="Confirmar senha"
            @click:append="form.show = !form.show"
            :rules="[(v) => !!v || 'Confirmação de senha é obrigatória']"
            required
          ></v-text-field>
        </div>
        <div class="button-space">
          <button class="enter" :disabled="!form.isValid" @click.prevent="createUser()">Cadastrar</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import UserController from '../controllers/userController'

export default {
  data() {
    return {
      form: {
        name: null,
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

  async created() {
    this.userController = new UserController();
  },


  methods: {
    async createUser() {
      try {
        await this.userController.create({ name: this.form.name, email: this.form.email, password: this.form.password });
        this.$router.push('/signin')
      } catch(err) {
        console.log(err)
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
.signup-form {
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 25px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;

  h3 {
    color: #10159A;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.11px;
    line-height: 28px;
    text-align: center;
  }

  .v-messages__message {
    color: red;
  }
  .button-space {
    display: flex;
    justify-content: flex-end;

    .enter {
      width: 100%;
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
