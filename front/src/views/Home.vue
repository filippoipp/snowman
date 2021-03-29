<template>
  <div>
    <Header />
    <div class="content">
      <h1 class="title">Feed</h1>
      <Post />
    </div> 
  </div>
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'

export default {
  components: {
    Header,
    Post,
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
