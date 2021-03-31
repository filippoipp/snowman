<template>
  <div>
    <Header />
    <div class="content">
      <h1 class="title">Feed</h1>
      <NewPost />
      <div class="follow-users">
        <span>
          Veja o que as pessoas estão compartilhando! <strong>Siga mais pessoas</strong> para
          ter um feed personalizado.
        </span>
        <div class="users">
          <div v-for="(user, index) in users" :key="index">
            <ProfileCard
              :name="user.name"
              :following_id="user.id"
            />
          </div>
        </div>
      </div>
      <div v-for="(post, index) in posts" :key="index">
        <Post
          :user_name="post.user_name"
          :color="post.color"
          :text="post.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import ProfileCard from "../components/ProfileCard"
import PostController from "../controllers/postController";
import UserController from "../controllers/userController"
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Post,
    NewPost,
    ProfileCard
  },

  data() {
    return {
      posts: null,
      users: null
    };
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },

  async created() {
    this.postController = new PostController();
    this.userController = new UserController();
  },

  mounted() {
    this.getPosts();
    this.getUsers();
  },

  methods: {
    async getPosts() {
      try {
        this.posts = await this.postController.getForFeed(
          this.currentUser.user_id
        );
      } catch (err) {
        console.log(err);
      }
    },

    async getUsers() {
      try {
        var temp_users
        temp_users = await this.userController.getUsers(
          this.currentUser.user_id
        );

        if(temp_users.length > 3) {
          this.users = temp_users.slice(0, 3)
        }
        
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>
<style lang="scss">

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #10159a;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.14px;
  line-height: 38px;
  text-align: center;
  margin-bottom: 42px;
}

.follow-users {
  width: 621px;
  border: 2px solid rgba(151,151,151,0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  padding: 23px 18px 18px 23px;
  span {
    color: #111236;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 16px;
  }
}

.users {
  display: flex;
  justify-content: space-between;
}
</style>
