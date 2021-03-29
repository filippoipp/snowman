<template>
  <div class="all">
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

export default {
  components: {
    Header,
    Post,
    NewPost
  }
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
