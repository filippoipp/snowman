<template>
  <div>
    <Header />
    <div class="content">
      <h1 class="title">Feed</h1>
      <div v-for="(post, index) in posts" :key="index">
        <Post :user_name="post.user_name" :color="post.color" :text="post.text" />
      </div>
    </div> 
  </div>
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import PostController from '../controllers/postController'

export default {
  components: {
    Header,
    Post,
  },

  data() {
    return {
      posts: null
    };
  },

  async created() {
    this.postController = new PostController();
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      try {
        this.posts = await this.postController.getAll();
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
