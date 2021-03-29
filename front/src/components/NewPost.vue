<template>
  <div class="card">
    <div class="user">
      <span>{{currentUser.name}}</span>
      <div>
          
      </div>
    </div>
    <div class="text">
      <textarea placeholder="O que você gostaria de compartilhar?"></textarea>
    </div>
    <div class="footer">
      <div class="colors">
          <div class="color" :style="{background: '#46c9a7'}"></div>
          <div class="color" :style="{background: '#FF7074'}"></div>
          <div class="color" :style="{background: '#FFBE00'}"></div>
          <div class="color" :style="{background: '#10159A'}"></div>
      </div>
      <div>
        <button>Publicar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUser"]),
  },
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
  border-bottom: 1px solid #f5f5fd;
  
  textarea {
    width: 100% !important;
    color: #111236;
    font-size: 24px;
    line-height: 32px;
  }
}

.footer {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 10px 30px 10px 30px;
    .colors {
        display: flex;
        .color {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-right: 8px;
            cursor: pointer;
        }
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
}
</style>
