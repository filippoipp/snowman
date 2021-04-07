<template>
  <div class="user">
    <span @click.prevent="goToUseProfile()">{{name}}</span>
    <button v-if="!verifyStatus" @click.prevent="followUser()">Seguir</button>
    <button class="followed" v-else @click.prevent="unfollowUser()">Seguindo</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FollowingController from '../controllers/followingController'

export default {
  props: ["name", "following_id"],
  data() {
    return {
      verifyStatus: false,
      followingData: {
        user_id: null,
        following_id: null
      }
    };
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },
  
  async created() {
    this.followingController = new FollowingController();
  },

  mounted() {
    this.followingData.user_id = this.currentUser.user_id;
    this.followingData.following_id = this.following_id;
    this.verify();
  },

  methods: {
    async followUser() {
      try {
        await this.followingController.create(this.followingData)
      
      } catch(err) {
        alert(`${err}`);
      } finally {
        this.$router.go(0);
      }
    },

    async verify() {
      try {
        this.verifyStatus = await this.followingController.verify(this.followingData)
      } catch(err) {
        console.log(err)
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
    }
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.2);
  padding: 10px;
  margin-right: 10px;
  span {
    color: #10159A;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.08px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  button {
    height: 32px;
    width: 159px;
    border-radius: 6px;
    background-color: #10159A;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    text-align: center;
  }
  .followed {
    background: #ffff;
    border: 1px solid #10159A;
    color: #10159A;
  }
}
</style>
