<template>
  <div>
    <Header />
    <div class="content">
      <h1 class="title">Resultados de Busca</h1>
        <div class="users">
          <div v-for="(user, index) in users" :key="index">
            <ProfileCard
              :name="user.name"
              :following_id="user.id"
            />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard"
import UserController from "../controllers/userController"
import { mapGetters } from "vuex";
import ApiService from '../services/service.api'

export default {
  components: {
    Header,
    ProfileCard
  },

  data() {
    return {
      users: null
    };
  },

  computed: {
    ...mapGetters(["currentUser", "search"]),
  },

  async created() {
    this.userController = new UserController();
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      ApiService.setHeaderAuthorization();
      try {
        this.users = await this.userController.getUsers(
          this.currentUser.user_id, this.search
        ); 
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>
<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0px 300px;
  border: none !important;
}

.title {
  color: #10159a;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.14px;
  line-height: 38px;
  align-self: flex-start;
  margin-bottom: 42px;
}

.users {
  display: flex;
  justify-content: space-between;
}
</style>
