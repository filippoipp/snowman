<template>
  <div>
    <Header />
    <div class="content">
      <h1 class="title">Feed</h1>
      <NewPost />
      <Post />
    </div> 
  </div>
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import NewPost from '../components/NewPost'
import PostController from '../controllers/postController'
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Post,
    NewPost
  },

  data() {
    return {
      posts: null
    };
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },

  async created() {
    this.postController = new PostController();
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      console.log(this.currentUser)
      try {
        this.posts = await this.postController.getForFeed(this.currentUser.user_id);
        console.log(this.posts)
      } catch(err) {
        console.log(err)
      }
    },
  },
}
</script>
<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #10159A;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.14px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 42px;
  }

</style>
