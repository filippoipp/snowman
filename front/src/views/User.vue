<template>
  <div>
    <Header />
    <div class="content">
      <div class="voltar">
        <router-link to="/">
          <v-icon color="#10159A">mdi-menu-left</v-icon>
          <span>Voltar</span>
        </router-link>
      </div>
      <div class="name">
        <h1 class="title">{{user.name}}</h1>
        <button v-if="!verifyStatus" @click.prevent="followUser()">Seguir</button>
        <button class="followed" v-else @click.prevent="unfollowUser()">Seguindo</button>
      </div>
      <div v-if="posts.length">
        <div v-for="(post, index) in posts" :key="index">
          <Post
            :user_name="post.user_name"
            :color="post.color"
            :text="post.text"
          />
        </div>
      </div>
      <div v-else>
        <span>Usuário não possui postagens!</span>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PostController from "../controllers/postController";
import FollowingController from '../controllers/followingController'
import UserController from '../controllers/userController'
import { mapGetters } from "vuex";
import ApiService from "../services/service.api";
import Post from "../components/Post";

export default {
  components: {
    Header,
    Post,
  },

  data() {
    return {
      user: null,
      posts: null,
      verifyStatus: false,
      followingData: {
        user_id: null,
        following_id: null
      },
    };
  },

  computed: {
    ...mapGetters(["currentUser", "viewUser"]),
  },

  async created() {
    this.postController = new PostController();
    this.followingController = new FollowingController();
    this.userController = new UserController();
  },

  mounted() {
    this.followingData.user_id = this.currentUser.user_id;
    this.followingData.following_id = this.viewUser;
    this.verify();
    this.getPosts();
    this.getUser()
  },

  methods: {
    async getPosts() {
      try {
        this.posts = await this.postController.getUserPosts(this.followingData.following_id)
      } catch (err) {
        console.log(err);
      }
    },

    async getUser() {
      try {
        this.user = await this.userController.getUser(this.followingData.following_id)
      } catch(err) {
        console.log(err)
      }
    },

    async verify() {
      ApiService.setHeaderAuthorization();
      try {
        this.verifyStatus = await this.followingController.verify(this.followingData)
      } catch(err) {
        console.log(err)
      }
    },

    async followUser() {
      try {
        await this.followingController.create(this.followingData)
      
      } catch(err) {
        alert(`${err}`);
      } finally {
        this.$router.go(0);
      }
    },

    async unfollowUser() {
      try {
        await this.followingController.unfollow(this.followingData)
      } catch(err) {
        alert(`${err}`);
      } finally {
        this.$router.go(0);
      }
    },
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
  margin: 0px 600px;
  border: none !important;
}

.voltar {
  display: flex;
  align-content: center;
  align-items: center;
  align-self: start;
  cursor: pointer;
  margin-bottom: 20px;
  a {
    text-decoration: none !important;
    color: #10159a;
  }
  span {
    color: #10159a;
    font-size: 14px;
    line-height: 19px;
  }
}

.name {
  display: flex;
  width: 100%;
  justify-content: space-between !important;
  margin-bottom: 26px;
  h1 {
    margin-bottom: 0px;
    color: #10159A;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.14px;
    line-height: 38px;
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
  .followed {
    background: #ffff;
    border: 1px solid #10159A;
    color: #10159A;
  }
}


</style>
