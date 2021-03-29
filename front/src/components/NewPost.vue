<template>
  <div class="card">
    <div class="user">
      <span>{{ currentUser.name }}</span>
      <div>
        <v-icon v-if="newPost.visibility == 'private'" class="icon" color="#909090">mdi-lock-outline</v-icon>
        <v-icon v-else class="icon" color="#909090">mdi-web</v-icon>
          <v-icon class="icon" color="#909090" @click="showMenu = !showMenu">
            mdi-chevron-down
          </v-icon>
          <div class="menu" v-if="showMenu">
            <div class="menu-item" @click="newPost.visibility = 'public'; showMenu = false">
              <v-icon class="icon" color="#909090">
                mdi-web
              </v-icon>
              <p>Público</p>
            </div>
            <div class="menu-item" @click="newPost.visibility = 'private'; showMenu = false">
              <v-icon class="icon" color="#909090" >
                mdi-lock-outline
              </v-icon>
              <p>Privado</p>
            </div>
          </div>
      </div>
    </div>
    <div class="text">
      <textarea
        v-model="newPost.text"
        placeholder="O que você gostaria de compartilhar?"
      ></textarea>
    </div>
    <div class="footer">
      <div class="colors">
        <div
          class="color"
          @click="newPost.color = '#46c9a7'"
          :style="{ background: '#46c9a7' }"
        >
          <v-icon
            v-if="newPost.color == '#46c9a7'"
            class="icon"
            size="x-large"
            color="#ffff"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="color"
          @click="newPost.color = '#FF7074'"
          :style="{ background: '#FF7074' }"
        >
          <v-icon
            v-if="newPost.color == '#FF7074'"
            class="icon"
            size="x-large"
            color="#ffff"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="color"
          @click="newPost.color = '#FFBE00'"
          :style="{ background: '#FFBE00' }"
        >
          <v-icon
            v-if="newPost.color == '#FFBE00'"
            class="icon"
            size="x-large"
            color="#ffff"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="color"
          @click="newPost.color = '#10159A'"
          :style="{ background: '#10159A' }"
        >
          <v-icon
            v-if="newPost.color == '#10159A'"
            class="icon"
            size="x-large"
            color="#ffff"
            >mdi-chevron-down</v-icon
          >
        </div>
      </div>
      <div>
        <button @click.prevent="createPost()">Publicar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showMenu: false,
      newPost: {
        user_id: null,
        user_name: null,
        text: null,
        color: null,
        visibility: 'public',
      }
    };
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },

  mounted() {
    this.newPost.user_id = this.currentUser.user_id;
    this.newPost.user_name = this.currentUser.name;
  },

  methods: {
    createPost() {
      console.log(this.newPost)
    }
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
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
  span {
    color: #10159a;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
  }
  .icon {
    cursor: pointer;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 450px;
  top: 220px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.2);
  padding: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  p {
    margin-left: 10px;
    color: #111236;
    font-size: 14px;
    line-height: 19px;
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
      display: flex;
      justify-content: center;
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
