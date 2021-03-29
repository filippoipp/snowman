<template>
  <div class="card">
    <div class="user">
      <span>João Silva</span>
    </div>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "text", "color"],
};
</script>

<style lang="scss">
.card {
  width: 621px;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 26px;
}

.user {
  border-bottom: 1px solid #f5f5fd;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 30px;
  span {
    color: #10159a;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
  }
}

.text {
  padding: 23px 30px 23px 30px;
  p {
    color: #111236;
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
