<template>
  <div class="container">
      <div class="item" v-for="photo in photos" :key="photo.id">
        <div class="item-head">
          <div class="item-head__icon">
            <img :src="photo.user.profile_image.small" alt="avatar" class="icon" />
          </div>
          <div class="item-head__author">
            <p class="name">{{ photo.user.name }}</p>
            <a :href="photo.user.links.html" target="_blank" class="name-link">@{{
              photo.user.username
            }}</a>
          </div>
        </div>
        <div class="item-body">
          <img :src="photo.urls.small" alt="photo" />
        </div>
        <div class="item-footer"></div>
      </div>
  </div>
</template>
<script setup>
import { useAsyncData } from "#app";

const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
const page = 0;
const URL = `https://api.unsplash.com/photos?client_id=${API_KEY}`;
const { data: photos } = await useAsyncData("photos", () => $fetch(URL));

</script>
