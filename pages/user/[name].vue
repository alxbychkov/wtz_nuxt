<script setup>
import { useFetch } from "#app";

const route = useRoute();
const username = route.params.name;
const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
const URL = `https://api.unsplash.com/users/${username}?client_id=${API_KEY}`;
const user = (await useFetch(URL)).data;
</script>
<template>
  <div class="container">
    <div class="user-header">
      <div class="user-avatar">
        <img :src="user.profile_image.large" alt="" />
      </div>
      <div class="user-info">
        <p class="user-username">{{ user.username }}</p>
        <p class="user-location">{{ user.location }}</p>
        <p class="user-name">{{ user.first_name }} {{ user.last_name }}</p>
        <p class="user-bio"><b>Bio:</b> {{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 15px;
  width: 100%;
}
.user-avatar {
  width: 30%;
  margin-bottom: 20px;
}
.user-info {
  width: 70%;
}
p.user-username {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
}
p.user-location {
  font-size: 16px;
  opacity: 0.5;
  margin-bottom: 5px;
}
p.user-name {
  font-size: 18px;
  margin-bottom: 5px;
}
@media screen and (max-width: 767px) {
  .user-header {
    margin-top: 25px;
  }
  .user-avatar,
  .user-info {
    width: 100%;
  }
}
</style>
